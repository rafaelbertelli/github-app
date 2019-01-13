import React from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ repos, userInfo }) => {
  return (
    <div>
      <Search />
      <UserInfo userInfo={userInfo} />
      <Actions />
      <Repos className='repos' title='Repositórios' repos={repos} />
    </div>
  )
}

AppContent.prototype = {
  repos: PropTypes.arrayOf(PropTypes.object),
  userinfo: PropTypes.objectOf(PropTypes.string)
}

export default AppContent
