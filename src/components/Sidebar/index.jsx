import React from "react";
import "./Sidebar.css";


function Sidebar(){
    return (
        <div style={{backgroundColor: "#222222", height: "100vh"}}>
            {/* <h1>Sidebar</h1> */}
            <div class="sidebar">
                <h1><i class="fas fa-comments" style={{color: "white"}}></i> WellsFargo</h1>
                <ul>
                    <li><a href=""><i class="fas fa-comment"></i>Chat</a></li>
                    <li><a href=""><i class="fas fa-user"></i>Account</a></li>
                    <li><a href=""><i class="fas fa-cog"></i>Settings</a></li>
                    <li><a href=""><i class="fas fad fa-power-off"></i>Logout</a></li>
                    {/* <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
                    <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
                    <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li>  */}
                </ul> 
            </div>
        </div>
    );
}

export default Sidebar;