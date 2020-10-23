import React from 'react';
class App extends React.Component {
    componentDidMount () {
        fetch('http://localhost:9000/api/data')
            .then(res => res.json())
            .then(data => this.setState({ data }));
    }

        state={
            data:null
        }

        render (){
            const { data }=this.state;
            console.log(data);
            return  data ? 
            <div className="flex">
                    <h1 className="h1"> { data.title }</h1>
                    <a href={ data.link }>This is my github</a>
            </div> : 
            <h1>Loading...</h1>
        }
}

export default App;
