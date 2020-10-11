import React from 'react';
class  App extends React.Component{
        state={
            text:'Hello Dears !'
        }
    render() {
        return (
            <div>
               <h1> {this.state.text}</h1>
            </div>
        )
    }
} 

export default App;
