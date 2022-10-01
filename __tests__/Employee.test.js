const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
})

test("Testing name.", () => {
    const name = "James";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employee = new Employee("James", id);
    expect(employee.id).toBe(id);
})

test("Testing email.", () => {
    const email = "jamesljenks@gmail.com";
    const employee = new Employee("James", 2, email);
    expect(employee.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "James";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employee = new Employee("James", testID);
    expect(employee.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "jamesljenks@gmail.com";
    const employee = new Employee("James", 2, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employee = new Employee("James", 2, "jamesljenks@gmail.com");
    expect(employee.getRole()).toBe(returnValue);
})

