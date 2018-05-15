import React from 'react';
import ReactDOM from 'react-dom';
// import SearchBar from './compons/SearchBar'

 class ReversedString extends React.Component {


    state = {
        currentString: ""
    };




      fun = (value) => {

         var w = [];
         for(var i = 1; i <= value.length; i++) {
             w.push(value[value.length - i]);
         }
         console.log(w);
         return w.join("");
     };



    render() {

        return(
            <div>
                <form>
                    <input type="search" onChange={event =>
                    {
                        this.setState({
                            currentString: event.target.value
                        })
                    }} />




                </form>
                <p >Reversed String: {this.fun(this.state.currentString)}</p>
            </div>
        );
    }

}










ReactDOM.render(<ReversedString/>, document.getElementById('root'));
