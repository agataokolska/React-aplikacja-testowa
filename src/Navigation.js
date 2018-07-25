import React from 'react'
import Sidebar from './Sidebar'
import AppBar from 'material-ui/AppBar'

class Navigation extends React.Component {
    state = {
        isOpen: true
    }

    toggleHandler = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

    render() {
        return (
            <div>
                <AppBar
                    title={'JFDDL5 APP'}
                    onLeftIconButtonClick={this.toggleHandler}
                />
                <Sidebar 
                isSidebarOpen ={this.state.isOpen}
                toggleSidebar ={this.toggleHandler}
                />

            </div>

        )
    }
}

export default Navigation