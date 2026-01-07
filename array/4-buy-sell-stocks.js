// 121. Best Time to Buy and Sell Stock

function maxProfit(prices) {
  let min_price = prices[0],
    profit = 0,
    max_profit = 0;

  for (let i = 0; i < prices.length; i++) {
    min_price = Math.min(min_price, prices[i]);
    profit = prices[i] - min_price;
    max_profit = Math.max(max_profit, profit);
  }

  return max_profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
