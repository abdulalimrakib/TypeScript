var userId = [1, 12, 3, 4, 15];
console.log(userId.length); // Outputs the length of the array
userId.sort();
console.log(userId); // Outputs the sorted array
var userName = ["abdul", "alim", "rakib", "rafid", "Aleya"];
userName.sort();
console.log(userName);
// numeric Enum
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 0] = "readData";
    requestType[requestType["saveDate"] = 1] = "saveDate";
    requestType[requestType["deleteData"] = 2] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType);
var requestType2;
(function (requestType2) {
    requestType2[requestType2["readData"] = 1] = "readData";
    requestType2[requestType2["saveDate"] = 2] = "saveDate";
    requestType2[requestType2["deleteData"] = 3] = "deleteData";
})(requestType2 || (requestType2 = {}));
console.log(requestType2);
// string Enum
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "Abdul Alim";
    requestType3["saveDate"] = "Rakib";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
// hetergenus Enum
var requestType4;
(function (requestType4) {
    requestType4["readData"] = "Abdul Alim";
    requestType4[requestType4["Id"] = 101] = "Id";
})(requestType4 || (requestType4 = {}));
console.log(requestType4.Id);
var user = [];
var user1;
user1 = { userName: "Abdul Alim", age: 23 };
user.push(user1);
console.log(user);
var customUser = [];
var customUser1;
customUser1 = { userName: "Abdul Alim", age: 23 };
customUser.push(customUser1);
console.log(customUser);
var getRequestType;
getRequestType = 'GET';
console.log(getRequestType);
var requestHandler = function (requestType) {
    console.log(requestType);
};
requestHandler("post");
