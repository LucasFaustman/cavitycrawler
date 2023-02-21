## Project

My friend is a Dentist in the States who is trying to decide what Practice Management System (PMS) they should use for their dental practice.
They have narrowed it down to two options [Dentrix](https://www.dentrix.com/), and [DentalXChange](https://www.dentalxchange.com/home/Home).
They have asked you to find a way to compare the two PMSs to see which one will work best for their practice.

## Demo Video : https://www.youtube.com/watch?v=1aoZHC3wtiE&ab_channel=LucasFaustman

## Assumptions

1. A linear to quadratic time complexity is probably fine. A video explaining this decision can be found here: https://www.youtube.com/watch?v=qERyn6lWKas&ab_channel=LucasFaustman

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
