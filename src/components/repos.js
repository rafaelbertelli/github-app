import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({ className, title, repos }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul style={styles.list}>
        {repos.map((repo, key) =>
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
  repos: []
}

Repos.propTypes = {
  className: React.PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object)
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
