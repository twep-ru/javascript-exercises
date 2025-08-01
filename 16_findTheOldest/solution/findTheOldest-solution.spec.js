const findTheOldest = require('./findTheOldest-solution');

describe('findTheOldest', () => {
  test('находит самого старого человека!', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('находит самого старого человека, если кто-то еще жив', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 2018,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('находит самого старого человека, если САМЫЙ СТАРЫЙ еще жив', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 1066,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    expect(findTheOldest(people).name).toBe('Carly');
  });
});
