import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({ title, list }) => {
  return (
    <div className='repos'>
      <h2>{title}</h2>
      <ul style={styles.list}>
        {list.map((repo, key) =>
          <li key={key} style={styles.listItem}>
            <a href={repo.href}>
              {repo.name}
            </a><hr />
          </li>
        )}
      </ul>
    </div>
  )
}

Repos.defaultProps = {
  list: [{
    href: '##',
    name: 'blá blá blá'
  }]
}

Repos.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    margin: '5px 0'
  }
}

export default Repos
