import React from 'react'
import './card.css'

const Card = ({ title, content }) => {

    const styles =
    {
        card: {
            border: "1px solid #ddd",
            borderRadius: '8px',
            padding: "20px",
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: '#fff'
        },
        title: {
            fontSize: '24px',
            marginBottom: "10px",
            color: '#00D8FF'
        },
        content: {
            fontSize: "16px",
            color: "#333",
        },
    }


    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.content}>{content}</p>
        </div>
    )
}

export default Card