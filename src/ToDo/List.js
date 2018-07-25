import React from 'react'
import Task from './Task'

const List = (props) => (

    <div>
        {props.tasksList.map(
            task => <Task task={task}/>
        )
        }
    </div>
)

export default List
