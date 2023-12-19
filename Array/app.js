// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const result =  inventors.filter(function (born) {
 return (born.year <= 1600 && born.year >= 1500)
});
console.log(result);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const result1 = inventors.map(function (inventors) {
 return `Name:${inventors.first} ${inventors.last}`;
}) 
console.log(result1);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort(function(a , b) {
 return a.year - b.year
})
console.log(inventors);
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const result2 = inventors.reduce(function (accumulator , inventor) {
 return (inventor.passed - inventor.year) + accumulator;
}, 0)
console.log(result2);

// 5. Sort the inventors by years lived
const sortedInventors = inventors.slice().sort(function (a, b) {
  const ageA = a.passed - a.year
  const ageB = b.passed - b.year

  return ageA - ageB
})
console.log(sortedInventors)



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevardsWithDe = Array.from(document.querySelectorAll('.mw-category-group ul li'))
  .map(boulevard => boulevard.textContent)
  .filter(name => name.includes('de'));

console.log(boulevardsWithDe);

// 7. sort Exercise
// Sort the people alphabetically by last name
people.sort(function(a, b) {
  const lastNameA = a.split(', ')[0].toUpperCase(); 
  const lastNameB = b.split(', ')[0].toUpperCase();

  if (lastNameA < lastNameB) {
    return -1; // a comes before b
  } else if (lastNameA > lastNameB) {
    return 1; // b comes before a
  } else {
    return 0; // last names are equal
  }
});
console.log(people);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
]
const result3 = data.reduce(function (accumulator, currentValue) {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator;
}, {});

console.log(result3)