import { pipeOperator as to } from '@pauliojanpera/pipe-operator';
import { join, toArray } from '@pauliojanpera/iterator-utils-sync';
//  import { toAsync } from '@pauliojanpera/iterator-utils-async';

{
	console.log(['foo', 'bar'][to](join));
}
{
	function* operator(source: Iterable<number>) {
		for (const i of source) {
			yield i * 2;
			yield -i * 3;
		}
	}

	console.log([...[1, 2, 3][Symbol.iterator]()[to](operator)]);
}


//  test('toArray, toAsync', async () => {
// 	 async function* asyncMultiplier(source: AsyncIterable<number> | Iterable<number>) {
// 		 for await (const i of source) {
// 			 yield i * 2;
// 		 }
// 	 }

// 	 expect(await [1, 2, 3][to](toAsync)[to](asyncMultiplier)[to](toArray)).toEqual([2, 4, 6]);
//  });


// function delay(t: number) {
// 	return new Promise(resolve => setTimeout(resolve, t));
// }

// test('async', async () => {
// 	async function* asyncOperator(source: AsyncIterable<number> | Iterable<number>) {
// 		for await (const i of source) {
// 			yield i * 2;
// 			yield -i * 3;
// 			// Add some random delay just for the sake of it.
// 			await delay((Math.random() * 200) | 0);
// 		}
// 	}

// 	expect(await toArray(toAsync([1, 2, 3])[to](asyncOperator))).toEqual([2, -3, 4, -6, 6, -9]);
// });
