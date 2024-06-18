
import React from "react";
import './Header.css';
function Header() {
    const style = {

        color: 'grey',
        fontSize: '40px',
        
    }
    return (
        <>
            <h2 style={style}>brundavani</h2>
            <h3 style={style}>Header Component</h3>
            <button className="btn">click here</button>
        </>
    );
}
export default Header;