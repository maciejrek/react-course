import React from 'react'
import Footer from './Footer'
import MainContent from './MainContent'
import Header from './Header'
import Checkbox from './Checkbox'
import '../style.css'

const App = ()=>(
        <div>
            <Header />
            <MainContent />
            <Checkbox/>
            <Checkbox/>
            <Checkbox/>
            <Footer />
        </div>
    )
export default App 