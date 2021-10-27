const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create an Intern object', () => {
 const intern = new Intern('Amy', 10, 'email@eamil.com', 'engineer10');

 expect(intern.school).toEqual(expect.any(String));
})

test('gets intern school', () => {
    const intern = new Intern('Amy', 10, 'email@email.com', 'engineer10', 'NYU')

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets role', () => {
    const intern = new Intern('Amy', 10, 'email@email.com', 'engineer10', 'NYU')

    expect(intern.getRole()).toEqual('Intern');
});

