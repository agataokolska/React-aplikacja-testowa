import React from 'react'

class Counter extends React.Component {

    state = {
        number: 0
    }


    incHandler = () => {
        this.state.number = this.state.number + 1
    }

        render(){
            return (
                <div>
                    <h1>{this.state.number}</h1>
                    <button
                    onClick={this.incHandler}
                    >
                        +
                    </button>
                    <button>-</button>

                </div>
            )
        }
    }

    export default Counter