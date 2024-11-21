function knapSack(W, wt, val, n)
{

    // Base Case
    if (n == 0 || W == 0)
        return 0;

    // If weight of the nth item is
    // more than Knapsack capacity W,
    // then this item cannot be
    // included in the optimal solution
    if (wt[n - 1] > W)
        return knapSack(W, wt, val, n - 1);

    // Return the maximum of two cases:
    // (1) nth item included
    // (2) not included
    else
        return Math.max(
            val[n - 1]
                + knapSack(W - wt[n - 1], wt, val, n - 1),
            knapSack(W, wt, val, n - 1));
}

// Input: N = 3, W = 4, profit[] = {1, 2, 3}, weight[] = {4, 5, 1}

let profit = [ 1,2,3 ];
let weight = [ 4,5,1 ];
let W = 4;
let n = 3;

console.log(knapSack(W, weight, profit, n));