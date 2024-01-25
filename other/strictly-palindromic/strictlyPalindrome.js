
//STRICTLY PALINDROMIC

var strictPalindrome = (x) => {
    var i = 2;
for (i; i <= x-2; i++ ){
    const test = 2
    if(!checkPalindrome(ConvertToBase(x,i))){
        return false
    }        
    if(i == x-2){
        return true
    }
}
}

var checkPalindrome = (x) => {
    if(x == x.split('').reverse().join('')){
        return true
    }
    return false
}

var ConvertToBase = (x, base) =>{
    var rem = 0
    var temp = x;
    var ans = '';
    while(true){
        rem = temp % base;
        ans = ans + rem.toString()
        temp = parseInt(temp/base);
        if(temp < base-1 && temp > 0){    
            ans = (ans + temp.toString()).split('').reverse().join('')
            return ans
        }
    }
      
}


const test = strictPalindrome(9)

