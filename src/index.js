import React from 'react';
import ReactDOM from 'react-dom';

var x = "hello world";


var fun = (value) => {

    var w = [];
    for(var i = 1; i <= value.length; i++) {
        w.push(value[value.length - i]);
    }
    console.log(w);
    return w.join("");
}




ReactDOM.render(<div>{fun(x)}</div>, document.getElementById('root'));
