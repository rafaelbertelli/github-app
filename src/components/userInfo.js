import React from 'react'

const UserInfo = () => {
  return (
    <div className='user-info' style={styles.userInfo}>
      <img style={styles.image} src={'https://avatars2.githubusercontent.com/u/10123227?v=4'} alt='github user' title='Github user' />

      <div style={styles.userDetails}>
        <h1 style={styles.title}>
          <a href='https://api.github.com/users/rafaelbertelli'>Rafael</a>
        </h1>
        <ul style={styles.list} className='repos-info'>
          <li style={styles.listItem}>Repositórios: 70</li>
          <li style={styles.listItem}>Seguidores: 2</li>
          <li style={styles.listItem}>Seguindo: 2</li>
        </ul>
      </div>
    </div>
  )
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
