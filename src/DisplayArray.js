import React from 'react'

const DisplayArray = (props) => (
    <div>
        {props.listOfNames[0]}{props.listOfNames[1]}{props.listOfNames[2]}
        <ul>
            {
                props.listOfNames.map((name, index) => <li key={index}> {name}</li>)
            }
        </ul>
    </div>
)

export default DisplayArray