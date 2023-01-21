import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Contact from './Contact'
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from './About'
import Register from './Register'
import NoPage from './noPage'

const index = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='*' element={<NoPage/>}/>
            </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default index