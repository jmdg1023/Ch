// My Attempt
const Manager = require("../lib/Manager");

it("Can create an office number.", () => {
    const officeNumberValue = 2;
    const employee = new Manager("Jonathan", 2, "Jonathan123@gmail.com", officeNumberValue);
    expect(employee.officeNumber).toBe(officeNumberValue);
});

it("Will return office number.", () => {
    const officeNumberValue = 2;
    const employee = new Manager("Jonathan", 2, "Jonathan123@gmail.com", officeNumberValue);
    expect(employee.getOfficeNumber()).toBe(officeNumberValue);
});

it("Gets employee role.", () => {
    const role = "Manager";
    const employee = new Manager("Jonathan", 2, "Jonathan123@gmail.com", 2);
    expect(employee.getRole()).toBe(role);
});