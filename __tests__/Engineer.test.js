const Engineer = require("../lib/Engineer");

it("Can create a Github.", () => {
    const github = "Melissa123";
    const employee = new Engineer("Melissa", 2, "melissa123@gmail.com", github);
    expect(employee.github).toBe(github);
});

it("Testing getGithub will return github.", () => {
    const github = "Melissa123";
    const employee = new Engineer("Melissa", 2, "melissa123@gmail.com", github);
    expect(employee.getGithub()).toBe(github);
});

it("Testing role.", () => {
    const role = "Engineer";
    const employee = new Engineer("Melissa", 2, "melissa123@gmail.com", "Melissa123");
    expect(employee.getRole()).toBe(role);
});