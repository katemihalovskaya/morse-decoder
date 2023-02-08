const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word = '';
    for (let start = 0; ; start += 10) {
        let letterInDecimal = expr.substr(start, 10);
        if(letterInDecimal) {
            let letterInMorse = '';
            if(letterInDecimal.includes('*')) {
                word += ' ';
            } else {
                for(let i = letterInDecimal.length - 1; i >= 0 ; i = i - 2) {
                    let decimalSymbol = `${letterInDecimal[i-1]}${letterInDecimal[i]}`;
                    if(decimalSymbol === '10') {
                        letterInMorse += '.';
                    } else if (decimalSymbol === '11') {
                        letterInMorse += '-';
                    } else {
                        break;
                    }
                }
                letterInMorse = letterInMorse.split('').reverse().join('');
                word += MORSE_TABLE[letterInMorse];
            }
        } else {
            break;
        }
    }
    return word;
}

module.exports = {
    decode
}