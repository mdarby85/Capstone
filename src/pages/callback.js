/**
 * @author Brandon Wilcox (CSI 43C9 Spring 2020)
 */

import React from "react"
import { handleAuthentication } from "src/utils/auth"

const Callback = () => {
  handleAuthentication()
  return <p>Loading...</p>
}

export default Callback
