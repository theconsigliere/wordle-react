export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Create an array from 0 (inclusive) to 2 (exclusive):
// range(2);
// Produces: [0, 1]

// Create an array from 0 (inclusive) to 5 (exclusive):
// range(5);
// Produces: [0, 1, 2, 3, 4]

// Create an array from 2 (inclusive) to 6 (exclusive):
// range(2, 6);
// Produces: [2, 3, 4, 5]

// Create an array from 2 to 10, picking every 2nd number
// range(2, 10, 2);
// Produces: [2, 4, 6, 8]

export const range = (start, end, step = 1) => {
  let output = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}
