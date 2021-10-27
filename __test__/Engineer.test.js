const Engineer = require('../lib/Engineer')

test ('create an engineer object', () => {
    const engineer = new Engineer('Amy', 10, 'email@email.com', 'engineer10')

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Amy', 10, 'email@email.com', 'engineer10')

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets role', () => {
    const engineer = new Engineer('Amy', 10, 'email@email.com', 'engineer10')

    expect(engineer.getRole()).toEqual('Engineer');
});

