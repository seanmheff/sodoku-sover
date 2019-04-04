import { grid1 as grid } from '../puzzles'
import {
  getFirstEmptyCell,
  isBoxValid,
  isColumnValid,
  isRowValid,
  isValidEntry
} from '../solver'

describe('question', () => {
  describe('getFirstEmptyCell', () => {
    it('returns [-1, -1] if it cant find an empty cell', () => {
      const solved = [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]
      ]
      expect(getFirstEmptyCell(solved)).toEqual([-1, -1])
    })

    it('returns the row, col of the first empty cell', () => {
      expect(getFirstEmptyCell(grid)).toEqual([0, 2])
    })
  })

  describe('isRowValid', () => {
    it('returns true if row does not already contain number', () => {
      expect(isRowValid(grid, 0, 1)).toBe(true)
    })

    it('returns false if row does already contains number', () => {
      expect(isRowValid(grid, 0, 4)).toBe(false)
    })
  })

  describe('isColumnValid', () => {
    it('returns true if column does not already contain number', () => {
      expect(isColumnValid(grid, 0, 9)).toBe(true)
    })

    it('returns false if column does already contains number', () => {
      expect(isColumnValid(grid, 0, 4)).toBe(false)
    })
  })

  describe('isBoxValid', () => {
    it('returns true if box does not contain number', () => {
      expect(isBoxValid(grid, 0, 2, 2)).toBe(true)
    })

    it('returns false if box already contains number', () => {
      expect(isBoxValid(grid, 0, 2, 5)).toBe(false)
    })
  })

  describe('isValidEntry', () => {
    it('returns true if the number is valid for row, col, box', () => {
      expect(isValidEntry(grid, 0, 2, 2)).toBe(true)
    })

    it('returns false if the number is not valid for row, col, box', () => {
      expect(isValidEntry(grid, 0, 2, 5)).toBe(false)
    })
  })
})
