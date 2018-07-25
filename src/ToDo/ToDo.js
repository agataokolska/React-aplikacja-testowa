import React from 'react'
import List from './List'
import Forms from './Forms'

class ToDo extends React.Component {
    state = {
        tasks:[
            {isCompleted:false, text:'Wynies śmieci', key:'123'},
            {isCompleted:false, text:'Zmyj gary', key:'234'},
        ]
    }
    render(){
        return(
            <div>
                <Forms/>
                <List
                    tasksList = {this.state.tasks}
                />
            </div>
        )
    }
}

export default ToDo