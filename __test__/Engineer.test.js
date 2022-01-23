const Engineer = require('../lib/Engineer');


test("Set github account", () => {
    const engineer = new Engineer ('sem', '123', 'email', 'steepllama')
    expect(engineer.name).toBe('sem')
    expect(engineer.id).toBe('123')
    expect(engineer.email).toBe('email')
    expect(engineer.github).toBe('steepllama')
});
