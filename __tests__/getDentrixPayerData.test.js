import getDentrixPayerData from '../dentrixScraper';

jest.setTimeout(100000);

describe('getDentrixPayerData', () => {
  test('No results found if search term is not found with Dentrix', async () => {
    const searchTerm = 'Test';

    const spy = jest.spyOn(console, 'log');
    const result = await getDentrixPayerData(searchTerm);
    expect(console.log).toHaveBeenCalledWith('No dentrix results found!');

    spy.mockRestore();
  });
  test('Return a correct value for a specific dentrix payer (Carefirst)"', async () => {
    const searchTerm = `Carefirst`;
    const spy = jest.spyOn(console, 'log');
    const result = await getDentrixPayerData(searchTerm);
    expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/Dentrix:.*ID: 00580.*NAME: Carefirst.*INCLUDED:.*eClaims™,Special Enrollment,Attachments,Eligibility,Real Time/s));


    spy.mockRestore();
  });
});
