import React from 'react'

import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem';

class Sidebar extends React.Component {
    render() {
        return (
            
                <Drawer
                    open={this.props.isSidebarOpen}
                    docked={false}
                    onRequestChange={this.props.toggleSidebar}
                >
                     <SideBarItem
                        to={'/dashboard'}
                        label={'Dashboard'}
                        toggleSidebar={this.props.toggleSidebar}
                    />
                    <SideBarItem
                        to={'/basiccomponents'}
                        label={'BasicComponents'}
                        toggleSidebar={this.props.toggleSidebar}
                    />
                    <SideBarItem
                         to={'/passing-parameters/cos'}
                        label={'PassingParameters'}
                        toggleSidebar={this.props.toggleSidebar}
                    />
                    <SideBarItem
                         to={'/counter'}
                        label={'Counter'}
                        toggleSidebar={this.props.toggleSidebar}
                    />
                    <SideBarItem
                         to={'/todo'}
                        label={'ToDo'}
                        toggleSidebar={this.props.toggleSidebar}
                    />
                    <SideBarItem
                         to={'/fetching-random-users'}
                        label={'FetchingRandomUsers'}
                        toggleSidebar={this.props.toggleSidebar}
                    />
                   
                </Drawer>
            
        )
    }
}

export default Sidebar