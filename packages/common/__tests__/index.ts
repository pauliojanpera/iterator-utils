/**
 * @jest-environment node
 */
import { pipeOperator as to } from '@pauliojanpera/pipe-operator';

test('Number => number', () => {
	const f = (v: Number): number => v.valueOf() * 2;
	expect((2)[to](f)[to](f)).toEqual(8);
});

test('dummy test', () => {
	expect(true).toEqual(true);
});
