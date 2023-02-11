import puppeteer from "puppeteer";

const getdentalXChangePayerData = async (searchTerm) => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
  
    const page = await browser.newPage();
    await page.goto("https://register.dentalxchange.com/reg/payerList?0", {
      waitUntil: "domcontentloaded",
    });

  
        const pageData = await page.evaluate(() => {
            const headers = Array.from(document.querySelectorAll('table#id2c1 .headers span[title]')).map(header => header.getAttribute('title')).slice(2);

            console.log(headers)
            
            const rows = Array.from(document.querySelectorAll('table#id2c1 tbody tr'));
            return rows.map(row => {
              const cells = Array.from(row.querySelectorAll('td'));
              const rowData = cells.map(cell => cell.innerText).filter(el => el !== '');
        
              const checkColumns = cells
                .filter(cell => cell.querySelector('.fa-check'))
                .map((cell, index) => headers[index])
                
                
    
        
              return [...rowData, ...checkColumns];
            });
          });
 

    console.log(pageData)
    await browser.close();
  };

  export { getdentalXChangePayerData };
