// TODO: Extract these functions into package

import type { ThemeConfig } from 'tailwindcss/types/config'

/**
 * @param {import('tailwindcss/types/config').ThemeConfig["fontSize"]} fontSizes font sizes object
 * @param {number} shift how much steps should shift take
 * @returns {import('tailwindcss/types/config').ThemeConfig["fontSize"]} font sizes object
 */
export function shiftFontSizes(fontSizes: Partial<ThemeConfig['fontSize']>, shift: number): ThemeConfig['fontSize'] {
  const arr = Object.entries(fontSizes)
  if (shift < 0) {
    arr.reverse()
  }

  const obj = Object.entries(fontSizes).reduce((acc, item, index, arr) => {
    const isItemInRange = index + shift + 1 <= arr.length
    if (isItemInRange) Object.assign(acc, { [item[0]]: arr[index + shift]?.[1] })
    return acc
  }, {} as ThemeConfig['fontSize'])

  return obj
}

/**
 * @typedef {object} Configs - configs object
 * @property {number} start where we start generate additional spacing
 * @property {number} numberOfNewSteps how much steps should be generated
 * @property {number=} step number of rem's to count as a step 1 = 1 rem
 * @return {Record<string, string>}
 * @example
 * getSpacingRange({start: 1, numberOfNewSteps: 200, step: 0.125}) // {..., '14': '3.5rem', '14.5': '3.625rem', '15': '3.75rem', ...}
 */
export function getSpacingRange({
  start,
  numberOfNewSteps,
  step = 1,
}: {
  start: number
  numberOfNewSteps: number
  step?: number
}): Record<string, string> {
  const spacing: Record<string, string> = {}

  const cof = step * 4
  const limit = start + numberOfNewSteps * cof

  for (let i = start + cof; i < limit; i = i + cof) {
    Object.assign(spacing, { [`${i}`]: `${i / 4}rem` })
  }

  return spacing as any
}
