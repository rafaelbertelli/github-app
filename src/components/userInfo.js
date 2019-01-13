import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = props => {
  const { name, html_url, avatar_url, public_repos, followers, following } = props.userInfo

  return (
    <div className='user-info' style={styles.userInfo}>
      <img style={styles.image} src={avatar_url} alt={`${name} photography`} title={name} />
      <div style={styles.userDetails}>
        <h1 style={styles.title}>
          <a target='_blank' href={html_url}>{name}</a>
        </h1>
        <ul style={styles.list} className='repos-info'>
          <li style={styles.listItem}>Repositórios: {public_repos}</li>
          <li style={styles.listItem}>Seguidores: {followers}</li>
          <li style={styles.listItem}>Seguindo: {following}</li>
        </ul>
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  userInfo: PropTypes.object
}

const styles = {
  userInfo: {
    width: '100%',
    margin: '15px 0',
    display: 'flex',
    alignItems: 'flex-start'
  },
  image: {
    maxWidth: 250,
    boxShadow: '2px 3px 8px rgba(0,0,0,0.3)'
  },
  userDetails: {
    marginLeft: 15
  },
  title: {
    marginTop: 0
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    margin: '5px 0'
  }
}

export default UserInfo
