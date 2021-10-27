const Employee = require('../lib/Employee')

test ('create an employee object', () => {
    const employee = new Employee('Amy', 10, 'email@email.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employeee name', () => {
    const employee = new Employee('Amy', 10, 'email@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employeee id', () => {
    const employee = new Employee('Amy', 10, 'email@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employeee email', () => {
    const employee = new Employee('Amy', 10, 'email@email.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employeee role', () => {
    const employee = new Employee('Amy', 10, 'email@email.com');

    expect(employee.getRole()).toEqual('Employee');
});

