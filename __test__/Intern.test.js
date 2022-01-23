const Intern = require('../lib/Intern');

describe("User prompt function", () => {
    test("Should prompt up user questions", () => {
        const intern = new Intern("sem", "123", "email", "elementary");
        expect(intern.name).toBe("sem");
        expect(intern.id).toBe("123");
        expect(intern.email).toBe("email");
        expect(intern.school).toBe("elementary");
    });
});