const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const exclamArray = [];
const newArray = array.forEach((username) => {
  exclamArray.push(array.username + '!');
})
console.log('forEach', exclamArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(element => element.username + '?');
console.log('map', mapArray);

//Filter the array to only include users who are on team: red
const filter = array.map(element => element.team === 'red');
console.log('filter', filter);

