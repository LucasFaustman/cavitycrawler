import puppeteer from "puppeteer";

const getDentrixPayerData = async (searchTerm) => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
  
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
    
          const checkColumns = cells
            .filter(cell => cell.querySelector('.glyphicon-check'))
            .map((cell, index) => headers[index])
            
            

    
          return [...rowData, ...checkColumns];
        });
      });
    

      // Add the extracted data to the `dentrixData` array
      dentrixData = dentrixData.concat(pageData);

      if (searchTerm) {
        searchTerm = searchTerm.toString().split(' ').join('').toLowerCase()
        const filteredData = dentrixData.filter(item => item[1] && item[1].split(' ').join('').toLowerCase() == searchTerm);
        if (filteredData.length) {
            console.log(filteredData);
            break;
        } 
    } 
        
      // Check if there is a "Next" button
      const nextButton = await page.$('a[rel="next"]');
      if (!nextButton) {
          break;
      }
      
      // Click the "Next" button
      await nextButton.click();
      
      // Wait for the page to load
      await page.waitForSelector('table#payorResults');
    }

    if (searchTerm && !dentrixData.filter(item => item[1] && item[1].split(' ').join('').toLowerCase() == searchTerm.toString().split(' ').join('').toLowerCase()).length) { 
        console.log("No results found!");
      }
    

    await browser.close();
  };

  export { getDentrixPayerData };
