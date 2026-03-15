// 2706. Buy Two Chocolates

var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);

  let cost = prices[0] + prices[1];

  if (cost <= money) {
    return money - cost;
  }

  return money;
};

var buyChoco = function (prices, money) {
  let min1 = Infinity;
  let min2 = Infinity;

  for (let price of prices) {
    if (price < min1) {
      min2 = min1;
      min1 = price;
    } else if (price < min2) {
      min2 = price;
    }
  }

  let cost = min1 + min2;

  return cost <= money ? money - cost : money;
};
