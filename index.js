function findMatching(drivers, name) {
  // 1) returns all drivers that match the passed in name
  // 2) returns matching drivers if case does not match but letters do
  // 3) returns an empty array if there is no match
  return drivers.filter((match) => match.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  // 1) returns a driver if beginning provided letters match
  // 2) does not return drivers if only middle or ending letters match
  // 3) does not return drivers if only middle or ending letters match
  return drivers.filter(
    (maybeMatch) =>
      maybeMatch.toLowerCase().indexOf(letters.toLowerCase()) === 0
  );
}

function matchName(drivers, nameFind) {
  //1) accesses the data structure to check if name matches
  return drivers.filter((record) => record.name === nameFind);
}
