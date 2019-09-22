import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roman: '',
            arabic: ''
        }
    }

    getArabic(e) {
        console.log(e);
        let roman = e.target.value;
        if (roman) {
            this.setState({
                roman: roman
            });
            fetch('http://localhost:3001/convert?roman=' + roman)
                .then(res => res.text())
                .then(text => {
                    this.setState({
                        arabic: text
                    })
                });
        }
    }


    render() {
        return (
            <div>
                <p>Roman: <input name="Roman" value={this.state.roman} onChange={e => this.getArabic(e)}/></p>
                <p>Arabic: <input name="Arabic" readOnly value={this.state.arabic}/></p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));