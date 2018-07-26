import React from 'react'
import ListItem from 'material-ui/List/ListItem';

const User = (props) => (
    <ListItem 
    primaryText={props.user.name.first + ' ' + props.user.name.last}
    secondaryText={props.user.email}   
    />  
)

export default User