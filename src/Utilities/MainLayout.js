import React from 'react'

const MainLayout = ({ children }) => {

    return(
        <main className='container-fluid' style={{ height: '60vh' }}>
            {children}
        </main>
    )
}

export default MainLayout