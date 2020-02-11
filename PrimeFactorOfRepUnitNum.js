function primeFactors(n) 
{
var output = [];
    // Print the number of 2s that divide n
    while (n%2 == 0 && output.indexOf(2) < 0 ) 
    { 
      output.push(2);
      n = n/2; 
    } 
  
    // n must be odd at this point.  So we can skip
    // one element (Note i = i +2)
    for (var i = 3; i <= Math.sqrt(n); i = i+2) 
    { 
        // While i divides n, print i and divide n
        while (n%i == 0 && output.indexOf(i) < 0) 
        {   output.push(i);
           // console.log(i);
            n = n/i; 
        } 
    } 
  
    // This condition is to handle the case when n
    // is a prime number greater than 2
    if (n > 2 && output.indexOf(n) < 0) {
         output.push(n);
        }
   return output.reduce((a,b)=> a+b);
}

primeFactors(1111111111111111);
