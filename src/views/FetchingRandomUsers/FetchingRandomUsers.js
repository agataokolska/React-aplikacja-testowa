import React from 'react'
import User from './User'
import PaperRefined from '../../components/PaperRefined'
import Search from './Search'

class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null
    }

    componentDidMount() {
        fetch("https://randomuser.me/api?results=10")
            .then(response => response.json())
            .then(dataFromResponse => {
                this.setState({
                    randomUserData: dataFromResponse.results

                })
            })
    }

    render() {
        const usersList = (
            this.state.randomUserData
                        &&
                        this.state.randomUserData
                            .map(user => (
                                <User
                                    key={user.login.uuid}
                                    user={user}
                                />
                            ))
        )

        return (
            <div>
                <PaperRefined>
                    <Search />
                </PaperRefined>
                <PaperRefined>
                    {usersList}
                </PaperRefined>
            </div>
        )
    }
}

export default FetchingRandomUsers