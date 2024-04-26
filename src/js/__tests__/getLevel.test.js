import getLevel from '../getLevel';
import fetchData from '../fetchData.mock';

jest.mock('../fetchData.mock');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing getLevel function #1', () => {
  fetchData.mockReturnValue(JSON.stringify({ status: 'ok', level: 123 }));
  const result = getLevel(123);
  expect(result).toBe('Ваш текущий уровень: 123');
});

test('testing getLevel function #2', () => {
  fetchData.mockReturnValue(JSON.stringify({ status: 'not ok' }));
  const result = getLevel();
  expect(result).toBe('Информация об уровне временно недоступна');
});

test('testing getLevel function #3', () => {
  fetchData.mockReturnValue(JSON.stringify({ status: 'not ok' }));
  const result = getLevel(NaN);
  expect(result).toBe('Информация об уровне временно недоступна');
});
