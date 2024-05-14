import data from '../../data.json';

describe('DataJson', () => {
  it('should return data.json', () => {
    expect(data).toHaveLength(5);
  });
});
