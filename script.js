function mincost(arr)
{ 
//write your code here
	function mincost(arr) {
  if (arr.length <= 1) return 0;

  let cost = 0;

  // Sort ascending
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Take two smallest
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Push back and re-sort
    arr.push(sum);
    arr.sort((a, b) => a - b);
  }

  return cost;
}

// return the min cost
  
}

module.exports=mincost;
