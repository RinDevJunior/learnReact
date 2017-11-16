/* eslint-disable react/jsx-tag-spacing */
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import yup from 'yup'
import Widget from '../../widget'
import Counter from '../../counter'
import { basicAuthHeader } from '../../../lib/auth'

const schema = yup.object().shape({
  owner: yup.string().required(),
  repository: yup.string().required(),
  interval: yup.number(),
  title: yup.string(),
  authKey: yup.string()
})

export default class Test extends Component {
  static defaultProps = {
    interval: 1000,
    titlex: '123 XXX'
  }

  state = {
    count: 0,
    error: false,
    loading: true
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  render () {
    const {count, error, loading} = this.state
    const {titlex: title} = this.props
    this.alertxx('messxxx')
    return (
      <div>
        <Widget title={title} loading={loading} error={error}>
          <Counter value={count}/>
        </Widget>
        <button className='button' onClick={this.getNameFromAI()}>
          Click Me
        </button>
      </div>
    )
  }

  async getName (aaa) {
    const {authKey, owner, repository} = this.props
    const opts = authKey ? {headers: basicAuthHeader(authKey)} : {}
    const res = await fetch(`https://api.github.com/repos/${owner}/${repository}`, opts)
    const json = await res.json()
    return json
  }

  getNameFromAI = () => {
    console.log('Test')
    // let xxx = this.getName('abc')
    //   .then(res => {
    //     return res.json().name
    //   })
    //   .catch(err => {
    //     return ''
    //   })
    // console.log(xxx)
  }

  increaseCount = () => {
    const {count: time} = this.state
    this.setState({count: time + 1})
  }

  alertxx = (mess) => {
    // window.alert(mess)
  }

  componentDidMount () {
    schema.validate(this.props)
      .then(() => this.fetchInformation())
      .catch((err) => {
        console.error(`${err.name} @ ${this.constructor.name}`, err.errors)
        this.setState({error: true, loading: false})
      })
  }

  async fetchInformation () {
    const {authKey, owner, repository} = this.props
    const opts = authKey ? {headers: basicAuthHeader(authKey)} : {}

    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repository}`, opts)
      const json = await res.json()

      this.setState({count: json.open_issues_count, error: false, loading: false})
    } catch (error) {
      this.setState({error: true, loading: false})
    }
    // finally {
    //    this.timeout = setTimeout(() => this.fetchInformation(), this.props.interval)
    // }
  }
}
