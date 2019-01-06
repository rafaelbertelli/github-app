import React from 'react'
import Search from './components/search'
import UserInfo from './components/userInfo'
import Actions from './components/actions'
import Repos from './components/repos'
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
        <Search />
        <UserInfo />
        <Actions />
        <Repos className={'repos'} title={'Repositórios'} repos={this.state.repos} />
        <Repos className={'starred'} title={'Favoritos'} repos={this.state.repos} />
      </div>
    )
  }
}

export default App
