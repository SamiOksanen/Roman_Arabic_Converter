const express = require('express');
const cors = require('cors');
const app = express();

const conversions = [
    {"roman": "M", "arabic": 1000},
    {"roman": "D", "arabic": 500},
    {"roman": "C", "arabic": 100},
    {"roman": "L", "arabic": 50},
    {"roman": "X", "arabic": 10},
    {"roman": "V", "arabic": 5},
    {"roman": "I", "arabic": 1},
    {"roman": "CM", "arabic": 900},
    {"roman": "CD", "arabic": 400},
    {"roman": "XC", "arabic": 90},
    {"roman": "XL", "arabic": 40},
    {"roman": "IX", "arabic": 9},
    {"roman": "IV", "arabic": 4},

];

function convertRomanToArabic(roman) {
    let arabic = 0;
    let a;
    [...roman].forEach(letter => {
        let b = conversions.find((conversion) => conversion.roman === letter);
        if (!b) {
            return '';
        }
        if (a) {
            let c = conversions.find((conversion) => conversion.roman === a.roman+b.roman);
            if (c) {
                arabic -= a.arabic;
                arabic += c.arabic;
            } else {
                arabic += b.arabic;
            }
        } else {
            arabic += b.arabic;
        }
        a = b;
    });
    return arabic;
}

app.get('/convert', cors(), (req, res) => {
    res.send(convertRomanToArabic(req.query.roman).toString())
});

app.listen(3001, () => {
    console.log('Server listening port 3001');
});

