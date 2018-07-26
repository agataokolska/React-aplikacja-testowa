import React from 'react'
import ListItem from 'material-ui/List/ListItem';

const User = (props) => {
    const name = props.user.name.first + ' ' + props.user.name.last
    return (
        <ListItem
            primaryText={name}
            secondaryText={props.user.email}
        />
    )
}
export default User