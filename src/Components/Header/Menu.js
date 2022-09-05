import React from 'react'

export const Menu = () => {
    return (
        <>

            <div style={{ backgroundColor: 'black', height: 100, flex: 0.6, margin: 5 }}>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Guide</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Marketplace</a> </li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Maps</a></li>
                        <li><a href="#">Our Initiatives</a></li>
                        <li><a href="#">Partners</a> </li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">SignIn</a> </li>
                        <li><a href="#">For Business</a></li>
                        <li><a href="#">Support</a> </li>
                    </ul>

                </nav>
            </div>
        </>
    )
}
