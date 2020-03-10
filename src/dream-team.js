module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  members = members.map(function(a) {
    if (typeof a === 'string') {
      return a.replace(/\s+/g, '').toUpperCase();
    } else return false;
  });
  members = members.filter(item => item !== false);
  members = members.sort();
  let name = members.reduce((sum, current) => sum + current[0], '');
  return name;
};
