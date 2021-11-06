/**
 * @jest-environment node
 */
import { pipeOperator as to } from '@pauliojanpera/pipe-operator';
import { join, toArray } from '../src';

test('join', () => {
	expect(['foo', 'bar'][to](join)).toEqual('foobar');
});

test('array', () => {
	function* operator(source: Iterable<number>) {
		for (const i of source) {
			yield i * 2;
			yield -i * 3;
		}
	}

	expect(
		[1, 2, 3] //
			[to](operator) //
			[to](toArray) //
	).toEqual([2, -3, 4, -6, 6, -9]);
});
