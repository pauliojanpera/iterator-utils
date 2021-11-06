export async function* desync<T>(source: Iterable<T>) {
	yield* source;
}

export async function toArray<T>(source: AsyncIterable<T>) {
	const output = [];
	for await (const input of source) {
		output.push(input);
	}
	return output;
}

export const join = async function(source: AsyncIterable<string>) {
	let output;
	for await (const input of source) {
		if (output === undefined) {
			output = input;
		} else {
			output = output + input;
		}
	}
	return output;
};

export const first = async function <T>(source: AsyncIterable<T>) {
	for await (const input of source) {
		return input;
	}
	throw new Error('No input.');
};

export const last = async function <T>(source: AsyncIterable<T>) {
	const notFound: T = {} as T;
	let last = notFound;
	for await (last of source) {
	}
	if (last === notFound) {
		throw new Error('No input.');
	}
	return last;
};

export const pairwise = async function* <T>(source: AsyncIterable<T>) {
	let first = true;
	let previous;
	for await (const input of source) {
		if (first) {
			first = false;
		} else {
			yield [previous, input];
		}
		previous = input;
	}
};
