const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

describe("User prompt function", () => {
    test("Prompt up user questions", () => {
        const manager = new Manager("sem", "123", "email", "456");
        expect(manager.name).toBe("sem");
        expect(manager.id).toBe("123");
        expect(manager.email).toBe("email");
        expect(manager.officeNumber).toBe("456");
    })
});