import React from 'react'
import User from './User'
import PaperRefined from '../../components/PaperRefined'
import Search from './Search'

class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null,
        searchPhrase: ''
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

    searchPhraseChangeHandler = (event) => {
        this.setState({
            searchPhrase: event.target.value
            
        })
        
    }

    render() {

        const displayUser = user => (
            <User
                key={user.login.uuid}
                user={user}
            />
        )
        const searchResults = (
            this.state.randomUserData
                        &&
                        this.state.randomUserData
                            .filter(user => (
                                (user.name.first + ' ' + user.name.last).indexOf(this.state.searchPhrase) !== -1
                                ||
                                user.email.indexOf(this.state.searchPhrase) !== -1
                            ))
                            .map(displayUser)
        )


        const usersList = (
            this.state.randomUserData
                        &&
                        this.state.randomUserData
                            .map(displayUser)
        )
        return (
            <div>
                <PaperRefined>
                    <Search 
                    searchPhrase={this.state.searchPhrase}
                    searchPhraseChangeHandler={this.searchPhraseChangeHandler}
                    />
                </PaperRefined>
                <PaperRefined>
                    {searchResults}
                </PaperRefined>
                <PaperRefined>
                    {usersList}
                </PaperRefined>
            </div>
        )
    }
}

export default FetchingRandomUsers