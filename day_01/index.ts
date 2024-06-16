let userId: number[] = [1, 12, 3, 4, 15];
console.log(userId.length); // Outputs the length of the array

userId.sort();
console.log(userId); // Outputs the sorted array

let userName: string[] = ["abdul", "alim", "rakib", "rafid", "Aleya"];

userName.sort();
console.log(userName);

// numeric Enum
enum requestType {
  readData,
  saveDate,
  deleteData,
}

console.log(requestType);

enum requestType2 {
  readData = 1,
  saveDate,
  deleteData,
}

console.log(requestType2);

// string Enum

enum requestType3 {
  readData = "Abdul Alim",
  saveDate = "Rakib",
}

console.log(requestType3);

// hetergenus Enum

enum requestType4 {
  readData = "Abdul Alim",
  Id = 101,
}

console.log(requestType4.Id);

let user: object[] = [];

let user1: { userName: string; age?: number };
user1 = { userName: "Abdul Alim", age: 23 };

user.push(user1);

console.log(user);

type user = { userName: string; age?: number };
let customUser: user[] = [];

let customUser1: user;
customUser1 = { userName: "Abdul Alim", age: 23 };

customUser.push(customUser1);

console.log(customUser);

type requestType5 = "GET" | "post";
let getRequestType: requestType5;
getRequestType = 'GET'

console.log(getRequestType);

const requestHandler = (requestType:requestType5) => {
console.log(requestType);
}

requestHandler("post")