import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const Sidebar = () => (
    <div>
        <Drawer
            open={false}
        >
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
    </div>
)

export default Sidebar