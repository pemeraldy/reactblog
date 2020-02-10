import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// import registerServiceWorker from './registerServiceWorker'
 import Navbar from './components/Navbar'
 import Welcome from './components/Welcome'
 import Footer from './components/Footer'
 import CreateArticle from './components/CreateArticle'
 import Login from './components/Login'




ReactDOM.render(
    <BrowserRouter>
        <div>
           <Navbar />
            <Route exact path="/" component = {Welcome} />        
            <Route path="/articles/create" component = {CreateArticle} />
            <Route path="/login" component = {Login} />
            <Footer />
        </div>
    </BrowserRouter>
    
    ,document.getElementById('root'))

// registerServiceWorker()