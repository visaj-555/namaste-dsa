// 771. Jewels and Stones

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                ++count;
                break;
            }
        }
    }
    return count;
};


// Optimal

var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels);
    let count = 0;

    for (let stone of stones) {
        if (set.has(stone)) {
            count++;
        }
    }
    return count;
};
