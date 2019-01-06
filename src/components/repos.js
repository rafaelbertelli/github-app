import React from 'react'

const Repos = ({ className, title, repos }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul style={styles.list}>
        {repos.map((repo, key) => 
          <li key={key} style={styles.listItem}><a href={repo.href}>{repo.name}</a><hr /></li>
        )}
      </ul>
    </div>
  )
}

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array
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
