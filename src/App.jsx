import React from 'react'
import Nav from './components/Nav';
import Search from './components/Search';
import Category from './components/Category';
import TopRestaurant from './components/TopRestaurant';
import TopCards from './components/TopCards';
import OnlineDelv from './components/OnlineDelv';

const App = () => {

    return (
        <>
            <Nav />
            <Category />
            <TopRestaurant />
            <OnlineDelv />
        </>
    )
}

export default App