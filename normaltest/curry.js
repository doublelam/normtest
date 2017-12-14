function convertToBinary(num) {
	function getBin(str, num){
        var divi = parseInt(num / 2);
        var main = num % 2
        if (num <= 1) {
            return main + str
        }
        return getBin(main + str, divi)
    }
    var val = getBin('', num);
    return '0'.repeat(8 - val.length) + val
    
}
console.log(convertToBinary(65))