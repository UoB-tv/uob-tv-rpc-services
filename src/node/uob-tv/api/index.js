import React from 'react'

import { AuthenClient } from './AuthenClient'
import { UobTVGraphQL} from './UobTVGraphQL'

const ApiClientContext = React.createContext("api-client")

class ApiClientProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = { authClient: null, graphqlClient: null}
    }

    render() {
        return (
            <ApiClientContext.Provider value={this.state}>
                { this.props.children }
            </ApiClientContext.Provider>
        )
    }
}


export {
    AuthenClient as AuthenClient,
    UobTVGraphQL as UobTVGraphQL,
}