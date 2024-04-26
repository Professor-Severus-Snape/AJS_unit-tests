export default function sortHeros(heros) {
  return heros.sort((a, b) => b.health - a.health);
}
