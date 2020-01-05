import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';

import countries from './countries.json';

interface Country {
  code: string;
  name: string;
  others: string[];
}

/**
 * Sanitize a country name
 */
function sanitize(input: string): string {
  return (
    input
      // Lowercase
      .toLowerCase()
      // Remove all spaces
      .replace(/ /g, '')
      // Remove all "-"
      .replace(/-/g, '')
  );
}

export function getCountryCode(input: string): O.Option<string> {
  return pipe(
    O.fromNullable(
      (countries as Country[]).find(({ code, name, others }) => {
        const sName = sanitize(name);
        const sInput = sanitize(input);

        return (
          sName === sInput ||
          code === sInput ||
          sName.includes(sInput) ||
          sInput.includes(sName) ||
          others.includes(sInput)
        );
      })
    ),
    O.map(({ code }) => code)
  );
}
