import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [value, setValue] = useState({ roman: '', arabic: '' })

    function getArabic(e) {
        let newRoman = e.target.value;
        fetch('http://localhost:3001/convert?roman=' + newRoman)
            .then(res => res.text())
            .then(text => {
                setValue({ roman: newRoman, arabic: text });
            });
    }

    return (
        <div>
            <p>Roman numeral: <input name="Roman" value={value.roman} onChange={e => getArabic(e)} /></p>
            <p>Arabic number: <input name="Arabic" readOnly value={value.arabic} /></p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));