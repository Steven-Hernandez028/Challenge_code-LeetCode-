const isValidSudoku =()=>{

    // Initialize an array to keep track of used numbers in each row, column, and sub-box.
  const used = Array(27).fill(null).map(() => new Set());

  // Iterate over each cell in the board.
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = board[row][col];

      // Skip empty cells.
      if (num === '.') {
        continue;
      }

      // Check if the number has already been used in the same row, column, or sub-box.
      if (used[row].has(num) || used[9 + col].has(num) || used[18 + 3 * Math.floor(row / 3) + Math.floor(col / 3)].has(num)) {
        return false;
      }

      // Mark the number as used in the corresponding row, column, and sub-box.
      used[row].add(num);
      used[9 + col].add(num);
      used[18 + 3 * Math.floor(row / 3) + Math.floor(col / 3)].add(num);
    }
  }

  // If all cells pass the checks, the board is valid.
  return true;
}