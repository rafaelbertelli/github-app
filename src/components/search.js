import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {

  handleSearch = e => {
    const ENTER = 13
    if (e.keyCode === ENTER) {
      const username = e.target.value

      axios
        .get(`https://api.github.com/users/${username}`)
        .then(console.log)
        .catch(console.log)
    }
  }

  render() {
    return (
      <div className='search'>
        <input
          style={styles.search}
          type='search'
          placeholder='Buscar por usuário'
          onKeyUp={this.handleSearch}
        />
      </div>
    )
  }
}

const styles = {
  search: {
    width: '100%',
    height: 50,
    fontSize: 28,
    padding: '0 10px',
    boxSizing: 'border-box'
  }
}

export default Search
