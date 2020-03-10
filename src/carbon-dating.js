const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const value = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || sampleActivity === '') {
    return false;
  }
  if (!sampleActivity || !value) return false;
  if (value > 15 || value <= 0) {
    return false;
  }
  const years =
    (Math.log1p(MODERN_ACTIVITY / value - 1) * HALF_LIFE_PERIOD) / 0.693;
  return Math.ceil(years);
};
