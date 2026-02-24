// 994. Rotting Oranges

var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }
    let maxMinutes = 0;
    while (queue.length) {
        let [x, y, level] = queue.shift();

        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1]);
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1]);
        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1]);
        }
        maxMinutes = Math.max(level, maxMinutes);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    return maxMinutes;
};


// Easy Solution : 

function orangesRotting(grid) {

  const rows = grid.length;
  const cols = grid[0].length;

  let queue = [];          // rotten oranges waiting to spread
  let freshCount = 0;      // total fresh oranges
  let minutes = 0;

  // -------- STEP 1: Find initial oranges --------
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      if (grid[r][c] === 2) {
        queue.push([r, c]);   // already rotten
      }

      if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }

  // directions: down, up, right, left
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  // -------- STEP 2: Spread rot (BFS) --------
  while (queue.length > 0 && freshCount > 0) {

    let orangesThisMinute = queue.length;

    for (let i = 0; i < orangesThisMinute; i++) {

      let [row, col] = queue.shift();

      for (let [dr, dc] of directions) {

        let newRow = row + dr;
        let newCol = col + dc;

        // check valid cell + fresh orange
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {

          grid[newRow][newCol] = 2; // make rotten
          freshCount--;
          queue.push([newRow, newCol]);
        }
      }
    }

    minutes++;
  }

  // -------- STEP 3: Final answer --------
  return freshCount === 0 ? minutes : -1;
}

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));
console.log(orangesRotting([[0,2]]));