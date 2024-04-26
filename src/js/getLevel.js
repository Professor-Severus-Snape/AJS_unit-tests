import fetchData from './fetchData.mock';

export default function getLevel(userId) {
  let response = fetchData(`https://server/user/${userId}`);
  response = JSON.parse(response);

  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}
