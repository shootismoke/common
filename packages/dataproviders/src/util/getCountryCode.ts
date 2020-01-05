import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';

import countries from './countries.json';

export function getCountryCode(input: string): O.Option<string> {
  return pipe(
    O.fromNullable(
      countries.find(({ name }) => {
        // Empirical tests to test that country matches name
        if (name === input) {
          return true;
        }

        const lName = name.toLowerCase();
        const lInput = input.toLowerCase();
        if (lName === lInput) {
          return true;
        }

        const lnsName = lName.replace(/ /g, ''); // lns stands for "lower no space"
        const lnsInput = lInput.replace(/ /g, '');
        if (lnsName === lnsInput) {
          return true;
        }

        return lnsName.includes(lnsInput) || lnsInput.includes(lnsName);
      })
    ),
    O.map(({ code }) => code)
  );
}
