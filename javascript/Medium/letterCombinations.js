/*
    @param {string} digits
    @return {string[]}
*/
export const letterCombinations = (digits) => {
  if (digits.length == 0) return [];

  let separate = digits.split("");
  let total = [];
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length == 1) return map[separate[0]];
  const concatData = (nmber1, nmber2) => {
    let dataArray = [];
    for (let i = 0; i < nmber1.length; i++) {
      for (let j = 0; j < nmber2.length; j++) {
        dataArray.push(nmber1[i].concat(nmber2[j]));
      }
    }
    return dataArray;
  };

  total = concatData(map[separate[0]], map[separate[1]]);

  for (let i = 2; i < digits.length; i++) {
    total = concatData(total, map[separate[i]]);
  }
  return total;
};
