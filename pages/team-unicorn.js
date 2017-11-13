import Dashboard from '../components/dashboard'
import DateTime from '../components/widgets/datetime'
import lightTheme from '../styles/light-theme'
import Test from '../components/widgets/customXXX/aaa'
import * as React from 'react'

export default () => (
  <Dashboard theme={lightTheme}>

    <Test
      owner='danielbayerlein'
      repository='dashboard'
    />
    <DateTime interval={1000} />
  </Dashboard>
)
