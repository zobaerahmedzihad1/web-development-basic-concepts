const user = { name: "zihad", id: 7, address: "Barishal" };
// console.log(user);
// convert object to json
const userStringified = JSON.stringify(user);

console.log(userStringified);
// convert json to regular object.
const userParse = JSON.parse(userStringified);
console.log(userParse);

const shop = {
  name: "alia store ",
  address: "Dhaka",
  product: ["mobile", "laptop", "ice cream"],
  sell: 17000,
  owner: {
    name: "alia",
    position: "ceo",
    salary: 1200,
  },
  isCostly: false,
};
// console.log(shop);
// convert object to json
const shopStringified = JSON.stringify(shop);
console.log(userStringified);
// convert json to regular object.
const shopParse = JSON.parse(userStringified);
console.log(shopParse);
