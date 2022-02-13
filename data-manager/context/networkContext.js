import React from "react"

const networkContext = React.createContext({
  isConnected: false,
  isInternetReachable: false,
  type: "",
  updateNetworkStatus: async () => {}
})

export default networkContext