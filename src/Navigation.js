import React from 'react'
import Sidebar from './Sidebar'
import AppBar from 'material-ui/AppBar'

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title={'JFDDL5 APP'}
                />
                <Sidebar />

            </div>

        )
    }
}

export default Navigation