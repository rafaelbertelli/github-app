import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch }) => {
  return (
    <div className='search'>
      <input
        style={styles.search}
        type='search'
        placeholder='Buscar por usuário'
        onKeyUp={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
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
