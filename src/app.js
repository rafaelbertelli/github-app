import React from 'react'
import AppContent from './components/appContent';

// https://api.github.com/users/rafaelbertelli

class App extends React.Component {
  constructor () {
    super() 

    this.state = {
      repos: [
        { href: '#', name: 'Nome do repo' },
        { href: '#', name: 'Nome do repo' },
        { href: '#', name: 'Nome do repo' }
      ]
    }
  }

  render () {
    return (
      <div className='app'>
        <AppContent repos={this.state.repos} />
      </div>
    )
  }
}

export default App
