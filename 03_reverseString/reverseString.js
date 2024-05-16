const reverseString = function(string) {
    const n = string.length
    if (n == 0){
        return ""
    }
    let res = ""
    for (let i = 0; i < n; i++){
        res += string.slice(n - i - 1, n - i)
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
