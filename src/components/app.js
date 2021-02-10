import React from "react"
import Header from "./header"
import Container from "./container"
import Footer from "./footer"
const App = ({ location, title, children }) => {
//  const rootPath = `${__PATH_PREFIX__}/`
//  const isRootPath = location.pathname === rootPath
    return (
    <div className="global-wrapper" >
          <div id="root">
            <Header />
            <Container />
            <Footer />
          </div>
    </div>
  )
}

export default App