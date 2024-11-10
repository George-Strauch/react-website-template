import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiDark} from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsBrightnessAltHigh } from "react-icons/bs";

import '../css/Navagation.css';


function TopNavigation({ handleSearch, toggleDarkMode, toggleSidebar, isDarkMode}) {
    const navigate = useNavigate();

    return (
        <nav className="top-nav">
            <SidebarToggle toggleSidebar={toggleSidebar} />
            <SearchInput handleSearch={handleSearch} />
            <TopRightIcons navigate={navigate} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </nav>
    );
}

// Component for the sidebar toggle button
function SidebarToggle({ toggleSidebar }) {
    return (
        <div
            className="hamburger-icon-container"
            aria-label="Toggle SideNavigation"
            onClick={toggleSidebar}
        >
            <GiHamburgerMenu
                className="topbar-icon topbar-hamburger"
            />
        </div>
    );
}

// Component for the search input field
function SearchInput({ handleSearch }) {
    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                onKeyDown={handleSearch}
            />
        </div>
    );
}

// Component for the top-right icons (theme toggle and profile)
function TopRightIcons({ navigate, toggleDarkMode, isDarkMode}) {
    let theme_icon = (
        <CiDark
            className="topbar-icon theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle Theme"
        />
    )
    if (isDarkMode){
        theme_icon = (
            <BsBrightnessAltHigh
                className="topbar-icon theme-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle Theme"
            />
        )
    }
    return (
        <div className="top-right">
            {theme_icon}
            <IoPersonCircleSharp
                className="topbar-icon profile-icon"
                onClick={() => navigate('/account')}
                aria-label="Profile"
            />
        </div>
    );
}

export default TopNavigation