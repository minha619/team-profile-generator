const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');


test('creates a Manager object', () => {
    const manager = new Manager('Amy', 10, 'email@email.com',123-4567);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role', () => {
    const manager = new Manager('Amy', 10, 'email@email.com',123-4567);

    expect(manager.getRole()).toEqual('Manager');
});