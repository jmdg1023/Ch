const Employee = require("../lib/Employee");

it("Can create an new employee.", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
})

it("Testing name.", () => {
    const name = "Mia";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

it("Testing ID.", () => {
    const id = 2;
    const employee = new Employee("Mia", id);
    expect(employee.id).toBe(id);
})

it("Testing email.", () => {
    const email = "mia123@gmail.com";
    const employee = new Employee("Mia", 2, email);
    expect(employee.email).toBe(email);
})

it("Gets name through getName method.", () => {
    const testName = "James";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
})

it("Can test ID through getID method.", () => {
    const testID = 2;
    const employee = new Employee("Mia", testID);
    expect(employee.getId()).toBe(testID);
})

it("Can test email through getEmail method.", () => {
    const testEmail = "mia123@gmail.com";
    const employee = new Employee("Mia", 2, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
})

it("Testing role.", () => {
    const returnValue = "Employee";
    const employee = new Employee("Mia", 2, "mia123@gmail.com");
    expect(employee.getRole()).toBe(returnValue);
})

