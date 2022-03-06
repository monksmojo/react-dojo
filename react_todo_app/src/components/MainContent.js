import React from 'react'
const MainContent = (props) => {
    return (
        <main className="MainContent">
            {props.children}
        </main>
    )
}

export default MainContent;