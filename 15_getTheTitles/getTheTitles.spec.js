const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

  test('получает названия', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });
});
