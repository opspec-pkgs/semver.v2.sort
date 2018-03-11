const semver = require('semver')
const semVers = require('/semVers.json');
const fs = require('fs');

const compare = (a, b) => {
  if (semver.lt(a, b)) {
    // a less than b
    return 0;
  }

  if (semver.gt(a, b)) {
    // a greater than b
    return 1;
  }

  // a === b
  return 0;
}

try {
  fs.writeFileSync(
    '/semVers.json',
    JSON.stringify(semVers.sort(compare))
  );
} catch (err) {
  console.error(err.message);
  process.exit(1)
}