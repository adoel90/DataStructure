   
     var a = 1, b = 2, c = 3;  
       console.log(a);
     (function firstFunction(){  
         var b = 5, c = 6;
         (function secondFunction(){  
             var b = 8;  
             (function thirdFunction(){  
                 var a = 7, c = 9;  //7, 9
                 (function fourthFunction(){  
                     var a = 1, c = 8;  // 1, 8
                 })(console.log(c));  
             })();  
         })(console.log(b));  
     })(); 


console.log("a : " + a + ", b : " + b + ", c : " + c);