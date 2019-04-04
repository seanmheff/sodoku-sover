export const getFirstEmptyCell = (grid: number[][]) => {
  for (let row = 0; row < grid[0].length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0) {
        return [row, col]
      }
    }
  }

  // Puzzle is solved
  return [-1, -1]
}

export const isValid = (array: number[], numberToTest: number) => {
  return !array.includes(numberToTest)
}

export const isRowValid = (
  grid: number[][],
  row: number,
  numberToTest: number
) => isValid(grid[row], numberToTest)

export const isColumnValid = (
  grid: number[][],
  column: number,
  numberToTest: number
) => isValid(grid.map((row) => row[column]), numberToTest)

export const getStartIndex = (numberToTest: number, sqrtWidth: number) =>
  Math.floor(numberToTest / sqrtWidth) * sqrtWidth

export const isBoxValid = (
  grid: number[][],
  row: number,
  column: number,
  numberToTest: number
) => {
  const sqrtWidth = Math.sqrt(grid[0].length)
  const startRow = getStartIndex(row, sqrtWidth)
  const startCol = getStartIndex(column, sqrtWidth)

  const box = []
  for (let tempRow = startRow; tempRow < startRow + sqrtWidth; tempRow++) {
    for (let tempCol = startCol; tempCol < startCol + sqrtWidth; tempCol++) {
      box.push(grid[tempRow][tempCol])
    }
  }

  return isValid(box, numberToTest)
}

export const isValidEntry = (
  grid: number[][],
  row: number,
  column: number,
  numberToTest: number
) => isRowValid(grid, row, numberToTest) &&
    isColumnValid(grid, column, numberToTest) &&
    isBoxValid(grid, row, column, numberToTest)

export const solve = (grid: number[][]) => {
  const [row, col] = getFirstEmptyCell(grid)

  // Base case. Have solved puzzle
  if (row === -1) {
    return true
  }

  // Look for valid solutions to solve the cell
  for (let i = 1; i <= grid[0].length; i++) {
    if (isValidEntry(grid, row, col, i)) {
      grid[row][col] = i

      if (solve(grid)) {
        return true
      } else {
        grid[row][col] = 0
      }
    }
  }
}

export const printGrid = (grid: number[][]) => {
  grid.forEach(row => console.log(row.join(",")))
  console.log("\n")
}
