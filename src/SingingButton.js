import React from 'react'

const SingingButton = (props) => {
    return(
    <div>
        <button
            onClick={props.makeSound || (() => alert(props.sound))}
        >
            {props.label}
        </button>
    </div>
)
}

export default SingingButton