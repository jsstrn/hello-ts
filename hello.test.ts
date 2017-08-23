import sayHello from './hello';

test('computes addition like a boss', () => {
	expect(3 + 2).toBe(5);
});

test('greets a person with their name', () => {
	expect(sayHello('Jesstern')).toBe('Hello, Jesstern!');
});
