// 2942. Find Words Containing Character

var findWordsContaining = function(words, x) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};
    


// Using 1 loop : 

var findWordsContaining = function (words, x) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            res.push(i);
        }
    }
    return res;
};
