const helloWorld = require('./helloWorld-solution');

describe('Hello World', function () {
  test('говорит "Hello, World!"', function () {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
