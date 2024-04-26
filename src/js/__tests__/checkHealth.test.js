import checkHealth from '../checkHealth';

test.each([
  [{ name: 'маг', health: 90 }, 'healthy'],
  [{ name: 'лучник', health: 50 }, 'wounded'],
  [{ name: 'мечник', health: 10 }, 'critical'],
])('testing checkHealth function for object %o', (options, status) => {
  const result = checkHealth(options);
  expect(result).toBe(status);
});
