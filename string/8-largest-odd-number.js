// 1903. Largest Odd Number in String


  var largestOddNumber = function(s) {
      let n = s.length - 1;
      while (n >= 0) {
          if (Number(s[n]) % 2 == 1) {
              return s.substring(0, n + 1);
          }
          --n;
      }
      return "";
  };
  
  
  console.log(largestOddNumber("52"));
  console.log(largestOddNumber("4602")); 
  console.log(largestOddNumber("35427"));