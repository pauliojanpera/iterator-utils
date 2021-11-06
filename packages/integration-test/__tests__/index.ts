/**
 * @jest-environment node
 */
import { pipeOperator as to } from '@pauliojanpera/pipe-operator';
import { join } from '@pauliojanpera/iterator-utils-sync';

test('join', () => {
	expect(['foo', 'bar'][to](join)).toEqual('foobar');
});
