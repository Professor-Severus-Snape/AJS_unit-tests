// url = `https://server/user/${userId}`
export default function fetchData(url) {
  if (url.length > 20) {
    const level = Number.parseInt(url.slice(20), 10);
    if (!Number.isNaN(level)) {
      return JSON.stringify({ status: 'ok', level });
    }
  }
  return JSON.stringify({ status: 'not ok' });
}
