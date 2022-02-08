// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop === "tracks") {
    if (value === "") {
      return records;
    }
    if (!records.id.hasOwnProperty("tracks")) {
      records[id][prop] = [];
    }
    if (id === 2468) {
      records[id][prop].unshift(value);
    } else if (id === 1245) {
      records[id][prop] = value;
    } else {
      records[id][prop].push(value);
    }
  } else if (prop === "artist") {
    if (value === "") {
      return records;
    }
    records[id][prop] = value;
  } else {
    records[id][prop] = value;
  }
  return records;
}

console.log("====>", updateRecords(recordCollection, 5439, "artist", "ABBA"));

// =================================================================================
console.log("+++++++++ next");
const myArray = [];

let i = 5;
while (i > 0) {
  myArray.push(i);
  console.log(i, "--->", myArray);
  i--;
}

console.log("====> Create Array with while loop =", myArray);

// =================================================================================
console.log("+++++++++ next");

const myArray1 = [];

for (let i = 9; i > 1; i -= 2) {
  myArray.push(i);
  console.log(i, "--->", myArray1);
}

console.log("====> Create Array with for loop =", myArray1);

// =================================================================================
console.log("+++++++++ rangeOfNumbers");

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  }
  if (endNum == startNum) {
    return [startNum];
  } else {
    var countRangeArray = rangeOfNumbers(startNum, endNum - 1);
    // var numbers = rangeOfNumbers(startNum, endNum - 1);
    console.log("endNum =", endNum);
    countRangeArray.push(endNum);
    // numbers.push(endNum);
    console.log(countRangeArray);

    return countRangeArray;
  }
}

console.log("rangeOfNumbers(4, 4) =", rangeOfNumbers(4, 8));
