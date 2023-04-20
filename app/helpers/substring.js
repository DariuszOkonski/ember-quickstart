/* eslint-disable prettier/prettier */
import { helper } from '@ember/component/helper';

function mySubstring(args) {
  let [string, start, end] = args;
  return string.substring(start, end);
}

export default helper(mySubstring);
