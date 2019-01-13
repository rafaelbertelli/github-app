import React from 'react'
import AppContent from './components/appContent'

// https://api.github.com/users/rafaelbertelli

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      repos: [
        { href: '#', name: 'Nome do repo' },
        { href: '#', name: 'Nome do repo' },
        { href: '#', name: 'Nome do repo' }
      ],
      userInfo: {
        name: 'Rafael',
        html_url: 'https://api.github.com/users/rafaelbertelli',
        avatar_url: 'https://avatars2.githubusercontent.com/u/10123227?v=4',
        public_repos: 70,
        followers: 2,
        following: 2
      }
    }
  }

  render () {
    return (
      <div className='app'>
        <AppContent repos={this.state.repos} userInfo={this.state.userInfo} />
      </div>
    )
  }
}

export default App
