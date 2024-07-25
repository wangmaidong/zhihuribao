import React from 'react'
import { HashRouter, useLocation } from 'react-router-dom'
import RouterView from './router'
const App = function (prop) {
    return <HashRouter>
        <RouterView></RouterView>
    </HashRouter>
}
export default App