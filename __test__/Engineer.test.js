const Engineer = require('../lib/Engineer');


test("Set github account", () => {
    const value = 'githubUser';
    const member = new Engineer('Name', 1, 'name@name.com', value);
    expect(member.github).toBe(value)
});
