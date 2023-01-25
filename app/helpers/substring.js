/* eslint-disable prettier/prettier */
// import { helper } from '@ember/component/helper';

// function substringMy([string], { start, end }) {
//   return string.substring(start || 0, end);
// }

// export default helper(substringMy);

import Helper from '@ember/component/helper';

export default class Substring extends Helper {
  compute([string], { start, end }) {
    return string.substring(start || 0, end);
  }
}
