export const findMinMax = (data) => {
  let minX = Number.MAX_SAFE_INTEGER, maxX = Number.MIN_SAFE_INTEGER, minY = Number.MAX_SAFE_INTEGER, maxY = Number.MIN_SAFE_INTEGER

  for (let i=0; i<data.length; i++) {
    const d = data[i]
    if (d.x < minX) {
      minX = d.x
    } else if (d.x > maxX) {
      maxX = d.x
    }
    if (d.y < minY) {
      minY = d.y
    } else if (d.y > maxY) {
      maxY = d.y
    }
  }

  return {
    minX,
    maxX,
    minY,
    maxY
  }
}
