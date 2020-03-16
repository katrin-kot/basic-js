module.exports = class DepthCalculator {
  calculateDepth(arr, level = 0) {
      if (Array.isArray(arr)) {
        const levels = [level + 1];
        for (let i = 0; i < arr.length; i++) {
          levels.push(this.calculateDepth(arr[i], level + 1));
        }
        return Math.max(...levels);
      }
      return level;
  }
};
