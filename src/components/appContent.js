import React from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = props => {
  return (
    <div>
      <Search />
      <UserInfo />
      <Actions />
      <Repos className={'repos'} title={'Repositórios'} repos={props.repos} />
      <Repos className={'starred'} title={'Favoritos'} repos={props.repos} />
    </div>
  )
}

AppContent.prototype = {
  repos: PropTypes.arrayOf(PropTypes.object)
}

export default AppContent
