import readline from 'readline';
import { getDentrixPayerData } from './dentrixScraper.js';
import { getdentalXChangePayerData } from './dentalXChangeScraper.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  
rl.question('Enter the payor name:', (answer) => {
//   getDentrixPayerData(answer);
  getdentalXChangePayerData(answer)
  rl.close();
});
