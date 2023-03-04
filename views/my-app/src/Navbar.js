import { useState } from 'react';
const Navbar = () => {

    const [title, setTitle] = useState("Home Page")

    const handleClick = () => {
        setTitle("Ca$h Cam")
    }

    return ( 
        <nav className="navbar">
            <h1>{title}</h1>
            <button onClick={handleClick}>Click Me</button>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Transaction</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
