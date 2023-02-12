import puppeteer from "puppeteer";

const getDentrixPayerData = async (searchTerm) => {
  const browser = await puppeteer.launch();
  
    const page = await browser.newPage();
    await page.goto("https://www.dentrix.com/products/eservices/eclaims/payor-search", {
      waitUntil: "domcontentloaded",
    });

    let dentrixData = [];
    
    while (true) {
  
    const pageData = await page.evaluate(() => {
        const headers = Array.from(document.querySelectorAll('table#payorResults tbody tr th')).map(th => th.innerText).slice(2);

        const rows = Array.from(document.querySelectorAll('table#payorResults tbody tr'));
        return rows.map(row => {
          const cells = Array.from(row.querySelectorAll('td'));
          const rowData = cells.map(cell => cell.innerText).filter(el => el !== '');
          //If we have a cell that is checked off, change the element of checked off to the header
          const checkColumns = cells
            .filter(cell => cell.querySelector('.glyphicon-check'))
            .map((cell, index) => headers[index])
          
          return [...rowData, ...checkColumns];
        });
      });
    

      // Add the extracted data to the `dentrixData` array
      dentrixData = dentrixData.concat(pageData);
      //See if there is a match inside of dentrixData
      if (searchTerm) {
        searchTerm = searchTerm.toString().replace(/\s/g, '').toLowerCase()
        const filteredData = dentrixData.filter(item => item[1] && item[1].replace(/\s/g, '').toLowerCase() == searchTerm);
        if (filteredData.length) {
          console.log(`Dentrix: 
      ID: ${filteredData[0][0]}
      NAME: ${filteredData[0][1]}
      INCLUDED:
      ${filteredData[0].slice(2)}`);
          break;
        } 
    } 
        
      // Check if there is a "Next" button
      const nextButton = await page.$('a[rel="next"]');
      if ( !nextButton) {
          break;
      }
      // Click the "Next" button
      await nextButton.click();
      
      // Wait for the page to load
      await page.waitForSelector('table#payorResults');
    }
    //Check if the search term is on last page
    if (searchTerm && !dentrixData.filter(item => item[1] && item[1].split(' ').join('').toLowerCase() == searchTerm.toString().split(' ').join('').toLowerCase()).length) { 
      console.log("No dentrix results found!");
    }

    await browser.close();
  };

  export { getDentrixPayerData };

  //Uncomment to enable testing
  // module.exports = getDentrixPayerData;

