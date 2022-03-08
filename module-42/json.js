// convert object to json.
const student = {
  name: "zihad",
  id: 9057,
  rollNumber: 07,
  group: "science",
  subject: ["English", "Bangla", "math", "physics"],
};

// console.log(student);
const studentJson = JSON.stringify(student);
console.log(studentJson);

// convert json stringify to regular object

const studentObj = JSON.parse(studentJson);
console.log(studentObj);
