const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('говорит "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
