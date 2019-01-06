import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <input style={styles.search} type='search' placeholder='Buscar por usuário' />
    </div>
  )
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
