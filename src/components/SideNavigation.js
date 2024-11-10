import React from 'react';
import '../css/Navagation.css';


function SideNavigation({sidebarOpen, isMobile, handlePageSelect }) {
    let sidebar_class = "sidebar"
    sidebar_class += `${sidebarOpen ? ' open' : ' closed'}`
    sidebar_class += `${isMobile ? ' mobile' : ' desktop'}`
    return (
        <div className={sidebar_class}>
            <ul className="links">
                <li onClick={() => handlePageSelect('Home')}>Home</li>
                <li onClick={() => handlePageSelect('Watchlist')}>Watchlist</li>
                <li onClick={() => handlePageSelect('Calender')}>Calender</li>
                <li onClick={() => handlePageSelect('Tickers')}>Tickers</li>
                <li onClick={() => handlePageSelect('API')}>API</li>
            </ul>
        </div>
    );
}


export default SideNavigation