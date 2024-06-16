# how to work TypeScript

- `ts` file convert into `js` file by using `tsc index.ts` or **tsc fileName.ts**
- run that converted `js` file by `node index.js` or **node fileName.js**
- for auto copiling `ts` file by using `--watch` flag e.g. `tsc index.ts --watch` or **tsc fileName.ts --watch**

# DAY 01

```
let userName = "Abdul Alim";
userName = 123; // error, userName is diclared as a staring dataType

const adder = (num1, num2) =>{
    console.log(num1 + num2);
}

adder(20) // not eccepted in typeScript
adder(20,0); // eccepted

console.log(userName);
```

## Data type

### Built In Datatype

- `number`
- `string`
- `boolean`
- `void`
- `undefined`
- `null`

> [!NOTE]
> If a data type is not declared, the data type is automatically inferred from the inserted value

### Union Datatype

> [!TIP]
> We can use `|` to worke with mutiple dataType e.g `userId: (numnber|string)`

### Array Datatype

```
let userName: string[] or let userName: Array<string>
let userId: number[] or let userId: Array<number>
let multupleType: (string|number)[]
```
> ARRAY METHODS
- `length`
- `toString()`
- `at()`
- `join()`
- `pop()`
- `push()`
- `shift()`
- `unshift()`
- `delete()`
- `concat()`
- `copyWithin()`
- `flat()`
- `splice()`
- `toSpliced()`
- `slice()`
- `indexOf()`
- `lastIndexOf()`
- `includes()`
- `find()`
- `findIndex()`
- `findLast()`
- `findLastIndex()`
- `sort()`
- `reverse()`
- `toSorted()`
- `toReversed()`
- `map()`
- `flatMap()`
- `filter()`
- `reduce()`

> e.g
```
let userId: number[] = [1, 12, 3, 4, 15];
console.log(userId.length); // Outputs the length of the array

userId.sort();
console.log(userId); // Outputs the sorted array

let userName: string[] = ["abdul", "alim", "rakib", "rafid", "Aleya"];

userName.sort()
console.log(userName);
```

### Enum Datatype
>[!NOTE]
>Duplicate value is not allowed

> Type of Enum
- `numeric`
- `string`
- `hetergenous`

```
// numeric Enum
enum requestType {
  readData,
  saveDate,
  deleteData,
}

console.log(requestType);

enum requestType2 {
    readData=1,
    saveDate,
    deleteData,
  }
  
  console.log(requestType2);

  // string Enum

  enum requestType3 {
    readData = 'Abdul Alim',
    saveDate = 'Rakib',
  }

  console.log(requestType3);

  // hetergenus Enum
  
  enum requestType4 {
    readData = 'Abdul Alim',
    Id = 101,
  }

  console.log(requestType4.Id);
  ```
  ### Object Datatype

  ```
  let user: object[] = [];

let user1: { userName: string; age: number };
user1 = { userName: "Abdul Alim", age: 23 };

user.push(user1);

console.log(user);
```

>[!TIP]
>We can use optional property by using `?` e.g `let user1: { userName: string; age?: number };`

### Custom Datatype

```
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
```

