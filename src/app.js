import React from 'react'
import axios from 'axios'

import AppContent from './components/appContent'

// https://api.github.com/users/rafaelbertelli

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      showRepos: false,
      showStarreds: false,
      userInfo: {
        name: "Rafael",
        html_url: 'https://api.github.com/users/rafaelbertelli',
        avatar_url: 'https://avatars2.githubusercontent.com/u/10123227?v=4',
        public_repos: 70,
        followers: 2,
        following: 2
      },
      repos: [{ href: '#', name: 'Nome do repo' }],
      starreds: []
    }
  }

  handleSearch = e => {
    const ENTER = 13
    if (e.keyCode === ENTER) {
      const username = e.target.value || 'rafaelbertelli'
      e.persist()
      e.target.disabled = true

      axios
        .get(`https://api.github.com/users/${username}`)
        .then(res => {
          axios
            .get(res.data.repos_url)
            .then(repos => {
              this.setState({
                
                repos: repos.data
              })
            })
            .catch(console.log)

          axios
            .get(`https://api.github.com/users/${username}/starred`)
            .then(starreds => {
              this.setState({
                starreds: starreds.data
              })
            })
            .catch(console.log)

          this.setState({
            userInfo: {
              name: res.data.name,
              html_url: res.data.html_url,
              avatar_url: res.data.avatar_url,
              public_repos: res.data.public_repos,
              followers: res.data.followers,
              following: res.data.following
            }
          })
        })
        .catch(console.log)
        .finally(() => {

          
          e.target.disabled = false
        })
    }
  }

  render () {
    return (
      <div className='app'>
        <AppContent
          {...this.state}
          handleSearch={this.handleSearch}
        />
      </div>
    )
  }
}

export default App
