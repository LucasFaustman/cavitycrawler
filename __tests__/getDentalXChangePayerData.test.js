import getDentalXChangePayerData from '../dentalXChangeScraper';

jest.setTimeout(50000);

describe('getDentalXChangePayerData', () => {
  test('No results found if search term is not found with dentalXChange', async () => {
    const searchTerm = 'Test';

    const spy = jest.spyOn(console, 'log');
    const result = await getDentalXChangePayerData(searchTerm);
    expect(console.log).toHaveBeenCalledWith('No dentalXChange results found!');

    spy.mockRestore();
  });
  test('Return a correct value for a specific dentalXChange payor Worksite Benefit Service"', async () => {
    const searchTerm = `Worksite Benefit Service`;
    const spy = jest.spyOn(console, 'log');
    const result = await getDentalXChangePayerData(searchTerm);
    expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/Dental xChange:.*ID: 20333.*NAME: Worksite Benefit Service.*INCLUDED:.*Claim,Real-Time Eligibility,Real-Time Benefits/s));


    spy.mockRestore();
  });
});
