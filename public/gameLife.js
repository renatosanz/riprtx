let resolution =5;
let grid = document.getElementById("grid");
let ctxGrid = grid.getContext("2d");
let rows = Math.floor(grid.offsetHeight / resolution);
let columns = Math.floor(grid.offsetWidth / resolution);
let game = new Array(rows);
console.log(rows, columns);
setupGame(game);

function generateGrid(game) {
  for (let i = 0; i < rows; i++) {
    game[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      game[i][j] = Math.round(Math.random());
    }
  }
  console.table(game);
}

function draw(array) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      ctxGrid.beginPath();
      ctxGrid.fillStyle = "white";
      if (array[i][j] == 1) {
        let x = j * resolution;
        let y = i * resolution;
        ctxGrid.fillRect(x, y, resolution, resolution);
      }
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function setupGame(game) {
  generateGrid(game);
  while (true) {
    draw(game);
    await sleep(30);
    let nextArray = new Array(rows);
    for (let i = 0; i < rows; i++) {
      nextArray[i] = new Array(columns);
      for (let j = 0; j < columns; j++) {
        let state = game[i][j];
        // Count live neighbors!
        let neighbors = countNeighbors(game, i, j);

        if (state == 0 && neighbors == 3) {
          nextArray[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          nextArray[i][j] = 0;
        } else {
          nextArray[i][j] = state;
        }
      }
    }
    game = nextArray;
    ctxGrid.clearRect(0, 0, grid.width, grid.height);
  }
}

function countNeighbors(arr, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (y + j + columns) % columns;
      let row = (x + i + rows) % rows;
      sum += arr[row][col];
    }
  }
  sum -= arr[x][y];
  return sum;
}