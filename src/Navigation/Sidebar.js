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
                    />
                    <SideBarItem
                        to={'/basiccomponents'}
                        label={'BasicComponents'}
                    />
                    <SideBarItem
                         to={'/passing-parameters/cos'}
                        label={'PassingParameters'}
                    />
                   
                </Drawer>
            
        )
    }
}

export default Sidebar