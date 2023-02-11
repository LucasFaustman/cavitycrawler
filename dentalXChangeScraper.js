import puppeteer from "puppeteer";

const getDentalXChangePayerData = async (searchTerm) => {
  const browser = await puppeteer.launch({
    slowMo: 10
  });
    const page = await browser.newPage();
    await page.goto("https://register.dentalxchange.com/reg/payerList", {
      waitUntil: "domcontentloaded",
    });

    await page.waitForSelector('table');

    let dentalXChangeData = [];
    
    while (true) {

        const pageData = await page.evaluate(() =>{
          //Get headers, then the values from the attribute of the span
          const headers = Array.from(document.querySelectorAll('table .headers th'));
          const headerValues = headers.map(header => {
            const span = header.querySelector('span');
            return span ? span.getAttribute('title') : '';
          }).slice(2);
          
            const rows = Array.from(document.querySelectorAll('table tbody tr'));
            return rows.map(row => {
              const cells = Array.from(row.querySelectorAll('td'));
              const rowData = cells.map(cell => cell.innerText).filter(el => el !== '');
        
              const checkColumns = cells
                .filter(cell => cell.querySelector('.fa-check'))
                .map((cell, index) => headerValues[index])
              return [...rowData, ...checkColumns];
            });
          });

          // Add the extracted data to the `dentalXChange Data` array
          dentalXChangeData = dentalXChangeData.concat(pageData);

          //See if there is a match inside of dentalXChangeData
      if (searchTerm) {
        searchTerm = searchTerm.toString().replace(/\s/g, '').toLowerCase()
        const filteredData = dentalXChangeData.filter(item => item[1] && item[1].replace(/\s/g, '').toLowerCase() == searchTerm);
        if (filteredData.length) {
          console.log(`Dental xChange: 
      ID: ${filteredData[0][0]}
      NAME: ${filteredData[0][1]}
      INCLUDED:
      ${filteredData[0].slice(2)}`);
          break;
        } 
      }
           // Check if there is a "Next" button
           const nextButton = await page.$('a[title="Go to next page"]');
    if (!nextButton) {
      break;
    }
      // Click the "Next" button
      await nextButton.evaluate(b => b.click());

      // Wait for the page to load
      await page.waitForSelector('table a[title="Go to next page"]');
        }
        //If no matches on last page, console log no results found
        if (searchTerm && !dentalXChangeData.filter(item => item[1] && item[1].split(' ').join('').toLowerCase() == searchTerm.toString().split(' ').join('').toLowerCase()).length) {
          console.log("No dentalXChange results found!");
        }
    await browser.close();
  };

  export { getDentalXChangePayerData };
