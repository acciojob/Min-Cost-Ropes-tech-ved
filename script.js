function mincost(arr) {
  if (arr.length <= 1) return 0;

  let cost = 0;

  // Make a copy and sort
  let ropes = arr.slice().sort((a, b) => a - b);

  while (ropes.length > 1) {
    // Take two smallest
    let first = ropes.shift();
    let second = ropes.shift();

    let sum = first + second;
    cost += sum;

    // Insert sum back in sorted order
    let i = 0;
    while (i < ropes.length && ropes[i] < sum) {
      i++;
    }
    ropes.splice(i, 0, sum);
  }

  return cost;
}
