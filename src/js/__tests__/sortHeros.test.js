import sortHeros from '../sortHeros';

test('testing sortHeros function', () => {
  const heros = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortHeros(heros);
  expect(result).toEqual(expected);
});
