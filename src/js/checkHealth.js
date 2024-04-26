// options = {name: 'Маг', health: 90}

export default function checkHealth(options) {
  if (options.health > 50) {
    return 'healthy';
  }
  if (options.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
