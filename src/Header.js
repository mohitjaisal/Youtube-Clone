import React, { useState } from 'react'
import "./Header.css"

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";


function Header() {
const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            
            <div className="header__left">
            <MenuIcon/>
            <Link to={`/`}><img className="Header__logo" alt="YouTube" src="https://raw.githubusercontent.com/mohitjaisal/ImageStore/master/SvgStore/CloneIconsSVG/YouTube_Logo.png"></img></Link>
            </div>

            <div className="header__med">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search"></input>
            <Link to={`/search/${inputSearch}`}><SearchIcon className="header__searchbutton"/></Link>
            </div>
            
            <div className="header__right">
            <VideoCall className="header__righticons"/>
            <AppsIcon className="header__righticons"/>
            <NotificationsIcon className="header__righticons"/>
            <Avatar alt="MJ" src="https://avatars.githubusercontent.com/u/23385605?s=400&u=2c6ce0c3466df577fbd359f123d4162ff51fdd24&v=4"/>
            </div>
        
        </div>
    )
}

export default Header
