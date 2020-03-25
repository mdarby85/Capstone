/**
 * @name sessionCheck.js
 * @author Brandon Wilcox (CSI 43C9 Spring 2020)
 * @overview @TODO
 * @TODO Document what's going on here pls
 */
import React from "react"
import { silentAuth } from "src/utils/auth"

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return this.state.loading === false && <>{this.props.children}</>
  }
}

export default SessionCheck
