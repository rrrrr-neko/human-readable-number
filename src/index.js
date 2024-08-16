module.exports = function toReadable (number) {
  
    function convertToText( number){
        switch (number){
            case 0: return 'zero';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'forty';
            case 50: return 'fifty';
            case 60: return 'sixty';
            case 70: return 'seventy';
            case 80: return 'eighty';
            case 90: return 'ninety';
        }
      }
    
    
        if (number <= 20) {
            return convertToText( number);
        }
        if (number >= 21 && number < 100){
            if (number % 10 === 0) {
                return convertToText( number);
            }
            let older_part = convertToText (Math.floor(number /10) *10);
            let lower_part = convertToText (Math.floor(number% 10));
            return older_part +' ' + lower_part;
        }
        if (number => 100 && number < 1000){
            let res = convertToText (Math.floor(number /100)) + ' ' + 'hundred';
            if (number % 100 <= 20) {
                if ((number % 100) === 0) {
                    return res;
                }
                return res + " "+ convertToText( number %100);
             }
            else {
                let older_part = convertToText (Math.floor((number % 100) / 10) *10);
            
                if (((number % 100) % 10) === 0) {
                    return res + ' '+ older_part;
                }
                let lower_part = convertToText (Math.floor(number% 10));
                return res + ' '+ older_part +' ' + lower_part;
        }
        }
    
}
