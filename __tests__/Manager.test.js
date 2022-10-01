// My Attempt
const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const officeNumber = 2;
    const employee = new Manager("Jonathan", 2, "Jonathan123@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const officeNumber = 2;
    const employees = new Manager("Jonathan", 2, "Jonathan123@gmail.com", officeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(officeNumber);
});

test("Testing role.", () => {
    const role = "Manager";
    const employee = new Manager("Jonathan", 2, "Jonathan123@gmail.com", 2);
    expect(employee.getRole()).toBe(role);
});