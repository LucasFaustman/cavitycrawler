## Project

My friend is a Dentist in the States who is trying to decide what Practice Management System (PMS) they should use for their dental practice.
They have narrowed it down to two options [Dentrix](https://www.dentrix.com/), and [DentalXChange](https://www.dentalxchange.com/home/Home).
They asked me to find a way to compare the two PMSs to see which one will work best for their practice.

## Demo Video : https://www.youtube.com/watch?v=1aoZHC3wtiE&ab_channel=LucasFaustman

## Assumptions

1. I assumed that a quadratic solution would be fine. The program will go through each page on both Dentrix and DentalXChange, and each result, to find a match.

## Solution formulation

Steps done when building: 

1. Setup my Node environment and Puppeteer
2. Figure out how to scrape the data using Puppeteer
3. Implement a pagination feature which will allow me to go through different pages of data
4. Implement a user input feature to search for a specific input
5. When an input is found, return back to the user along with relevant data
6. Implement testing through Jest

## Libraries/Tools used

* Node
* Puppeteer
* JavaScript
* Jest for testing

## How to setup

1. npm install
2. node index.js 
3. Then type in the payer you're looking for

## Running tests

* To run tests, please uncomment the module.exports code in both dentrixScraper.js and dentalXChangeScraper.js
* Then run npm run test


## Optimizations

1. Make the program run faster through some sort of divide and conquer algorithm.
2. Find out if there is a more optimal data scraping library than Puppeteer.
3. Instead of running everything in the command line, a more built-out UI would be nice for production use.

## Examples

Take a look at these other examples that I have in my portfolio:

Travel-Buddi: https://github.com/LucasFaustman/travel-buddi

Lucas Faustman Portfolio website: https://github.com/LucasFaustman/lucas-faustman-portfolio

myPlayer.io: https://github.com/LucasFaustman/nba-Stat-Project

Local Freelance Makeup Artist: https://github.com/LucasFaustman/local-makeup-artist-website

My Small CRM: https://github.com/LucasFaustman/my-small-crm/tree/main

BillTrackr: https://github.com/Ash1eyC0des/bill-trackr

Bench Banter: https://github.com/LucasFaustman/benchbanter
