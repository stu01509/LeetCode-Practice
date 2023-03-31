/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (t === '') {
    return '';
  }

  const countT = new Map();
  const slideWindow = new Map();
  
  for (let i = 0; i < t.length; i++) {
    if (countT.has(t[i])) {
      countT.set(t[i], countT.get(t[i]) + 1);
    } else {
      countT.set(t[i], 1);
    }
  }

  const NEED = countT.size;
  let have = 0;
  let positions = [-1, -1]
  let positionLength = Number.MAX_SAFE_INTEGER;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (slideWindow.has(char)) {
      slideWindow.set(char, slideWindow.get(char) + 1);
    } else {
      slideWindow.set(char, 1);
    }

    if (countT.has(char) && slideWindow.get(char) === countT.get(char)) {
        have += 1;
    }

    while (have === NEED) {
      if (right - left + 1 < positionLength) {
        positions = [left, right];
        positionLength = (right - left + 1);
      }
      slideWindow.set(s[left], slideWindow.get(s[left]) - 1);
      if (countT.has(s[left])  && slideWindow.get(s[left]) < countT.get(s[left])) {
        have -= 1;
      }
      left += 1;
    }
  }
  const [leftPosition, rightPosition] = positions;
  return positionLength === Number.MAX_SAFE_INTEGER ? '' : s.substring(leftPosition, rightPosition + 1);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'a'));
console.log(minWindow('a', 'aa'));