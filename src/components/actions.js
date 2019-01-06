import React from 'react'

const Actions = () => {
  return (
    <div className='actions' style={styles.actions}>
      <button style={styles.button}>Ver repositórios</button>
      <button style={styles.button}>Ver favoritos</button>
    </div>
  )
}

const styles = {
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    height: 50,
    width: '49%',
    fontSize: 24
  }
}

export default Actions
