let person = {
  running: function () {
    console.log("running");
  },
};

function createStudent(name) {
  let stu = Object.create(person);
  stu.name = name;
  stu.studying = function () {
    console.log("studying");
  };
  return stu;
}
let stu1 = createStudent("AA");
