import React from 'react'

class FetchingRandomUsers extends React.Component {
    state =  {
        randomUserData: null
    }

    componentDidMount(){
        fetch("https://randomuser.me/api")
            .then(response => response.json())
            .then(dataFromResponse => {
                this.setState({
                    randomUserData: dataFromResponse
                })
            })
    }

    render(){

        return (

            <div>
                {JSON.stringify(this.state.randomUserData)}
                </div>
        )
    }
}

export default FetchingRandomUsers