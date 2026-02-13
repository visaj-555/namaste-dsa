// 150. Evaluate Reverse Polish Notation

var evalRPN = function(arr) {
    let stack = [];
    const map = {
        "+": (a,b) => (b+a),
        "*": (a,b) => (b*a),
        "-": (a,b) => (b-a),
        "/": (a,b) => Math.trunc(b/a),
    };
        for(let i=0; i < arr.length; i++){
            if(map[arr[i]]) {
                let a = stack.pop();
                let b = stack.pop();
                let ans = map[arr[i]](+a,+b);
                stack.push(ans);
            } else {
                stack.push(arr[i]) 
            }
        }
    return Number(stack.pop());
};


 console.log(evalRPN(["2","1","+","3","*"])) 
 console.log(evalRPN(["4","13","5","/","+"]))
