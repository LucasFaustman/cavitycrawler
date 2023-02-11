import readline from 'readline';
import { getDentrixPayerData } from './dentrixScraper.js';
import { getDentalXChangePayerData } from './dentalXChangeScraper.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
rl.question('Enter the payor name:', (answer) => {
    getDentrixPayerData(answer);
    getDentalXChangePayerData(answer)
    rl.close();
});
