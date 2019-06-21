import React from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import UserInfo from './userInfo'
import Repos from './repos'

const AppContent = props => {
  const { repos, starreds, userInfo, handleSearch } = props
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <UserInfo userInfo={userInfo} />
      {/* <Actions /> */}
      <Repos key={1} title='Repositórios' list={repos} />
      <Repos key={2} title='Starreds' list={starreds} />
    </div>
  )
}

AppContent.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
  userinfo: PropTypes.objectOf(PropTypes.string)
}

export default AppContent
