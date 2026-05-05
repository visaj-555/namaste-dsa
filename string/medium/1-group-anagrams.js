// 49. Group Anagrams


// Easy Solution : 
var groupAnagrams = function (strs) {
  const map = new Map(); // Step 1: create empty map

  for (let word of strs) {
    // Step 2: loop each word

    // Step 3: create key by sorting
    let key = word.split("").sort().join("");

    // Step 4: if key not present → create new group
    if (!map.has(key)) {
      map.set(key, []);
    }

    // Step 5: push word into its group
    map.get(key).push(word);
  }

  // Step 6: return only values (groups)
  return Array.from(map.values());
};
