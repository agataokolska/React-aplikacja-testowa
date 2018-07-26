import React from 'react'
import List from './List'
import Forms from './Forms'

class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: false, text: 'Wynies śmieci', key: '123' },
            { isCompleted: false, text: 'Zmyj gary', key: '234' },
        ],
        newTaskText: ''
    }


    
    componentDidMount(){
        const lastState = JSON.parse(localStorage.getItem('jfddl-app-counter-state'))

        if (lastState===null) return

        this.setState(lastState)

    }

    componentWillUnmount(){
        localStorage.setItem('jfddl-app-counter-state', JSON.stringify(this.state))
    }

    
    onNewTaskTextChanged = (event) => {
        this.setState({
            newTaskText: event.target.value
        })
    }

    onAddNewTaskClickHandler = (newTaskText) => {
        if (this.state.newTaskText===''){
            return
        }
        this.setState({
            tasks: this.state.tasks.concat(
                {isCompleted:false,
                    text:this.state.newTaskText,
                    key: Date.now()
                }
            ),
            newTaskText:''
        })
    }
   

    render() {
        return (
            <div>
                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />
                <List
                    tasksList={this.state.tasks}
                />
            </div>
        )
    }
}

export default ToDo