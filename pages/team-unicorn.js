import Dashboard from '../components/dashboard'
import DateTime from '../components/widgets/datetime'
import lightTheme from '../styles/light-theme'
import Test from '../components/widgets/customXXX/aaa'
import * as React from 'react'
import Select from '../components/widgets/customXXX/bbb'

export default () => (
  <Dashboard theme={lightTheme}>

    <Test
      owner='danielbayerlein'
      repository='dashboard'
    />
    <Select
      values={['State.', 'Should.', 'Be.', 'Synchronous.']}
    />
    <DateTime interval={1000} />
  </Dashboard>
)
