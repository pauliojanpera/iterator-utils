export function toArray<T>(source: Iterable<T>) {
	const output = [];
	for (const input of source) {
		output.push(input);
	}
	return output;
}

export const join = function (source: Iterable<string>) {
	let output;
	for (const input of source) {
		if (output === undefined) {
			output = input;
		} else {
			output = output + input;
		}
	}
	return output;
};

export const first = function <T>(source: Iterable<T>): T {
	for (const input of source) {
		return input;
	}
	throw new Error('No input.');
};

export const last = function <T>(source: Iterable<T>): T {
	const notFound: T = {} as T;
	let last = notFound;
	for (last of source) {
	}
	if (last === notFound) {
		throw new Error('No input.');
	}
	return last;
};

export const pairwise = function* <T>(source: Iterable<T>) {
	let first = true;
	let previous;
	for (const input of source) {
		if (first) {
			first = false;
		} else {
			yield [previous, input];
		}
		previous = input;
	}
};
