import React from 'react'
import ListItem from 'material-ui/List/ListItem';

const User = (props) => (
    <ListItem 
    primaryText={props.user.name.first}
    secondaryText={props.user.email}   
    />  
)

export default User