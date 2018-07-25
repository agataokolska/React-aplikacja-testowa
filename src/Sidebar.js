import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class Sidebar extends React.Component {
    render() {
        return (
            
                <Drawer
                    open={this.props.isSidebarOpen}
                >
                    <MenuItem
                        onClick={this.props.toggleSidebar}
                    >
                    CLOSE
                    </MenuItem>
                    <Link
                        to={'/dashboard'}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem>
                            Dashboard
                        </MenuItem>
                    </Link>

                    <Link
                        to={'/basiccomponents'}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem>
                            BasicComponents
                         </MenuItem>
                    </Link>

                    <Link
                        to={'/passing-parameters/cos'}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem>
                            PassingParameters
                        </MenuItem>
                    </Link>
                </Drawer>
            
        )
    }
}

export default Sidebar