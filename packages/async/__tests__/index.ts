/**
 * @jest-environment node
 */
import { pipeOperator as to } from '@pauliojanpera/pipe-operator';
import { join, desync, toArray } from '../src';

test('join', async () => {
	expect(
		await ['foo', 'bar'] //
			[to](desync) //
			[to](join) //
	).toEqual('foobar');
});

test('array', async () => {
	function delay(t: number) {
		return new Promise(resolve => setTimeout(resolve, t));
	}

	async function* asyncOperator(source: AsyncIterable<number> | Iterable<number>) {
		for await (const i of source) {
			yield i * 2;
			yield -i * 3;
			// Add some random delay just for the sake of it.
			await delay((Math.random() * 200) | 0);
		}
	}

	expect(
		await [1, 2, 3] //
			[to](desync) //
			[to](asyncOperator) //
			[to](toArray) //
	).toEqual([2, -3, 4, -6, 6, -9]);
});

