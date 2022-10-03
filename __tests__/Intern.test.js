// My Attempt
const Intern = require("../lib/Intern");

it("Can create school.", () => {
    const schoolName = "School Name";
    const employee = new Intern("Mary", 2, "Mary123@gmail.com", schoolName);
    expect(employee.school).toBe(schoolName);
});

it("Testing officeNumber will return office number.", () => {
    const schoolName = "School Name";
    const employee = new Intern("Mary", 2, "Mary123s@gmail.com", schoolName);
    expect(employee.getSchool()).toBe(schoolName);
});

it("Testing role.", () => {
    const role = "Intern";
    const employee = new Intern("Mary", 2, "Mary123@gmail.com", "School Name");
    expect(employee.getRole()).toBe(role);
});