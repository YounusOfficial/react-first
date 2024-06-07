import React from 'react'
import './home.css'
import Card from '../../components/cards/Card'
import List from '../../components/list/List'

const Home = () => {

    const fruits = [
        "Apple",
        "Mango",
        "Banana",
        "Grapes",
        "Watermelon"
    ]

    return (
        <>
            <div>Home</div>
            <Card title={"Title here"} content={"This is static card"} />

            <h2>
                List of Fruits
            </h2>
            <List items={fruits} />
        </>
    )
}

export default Home