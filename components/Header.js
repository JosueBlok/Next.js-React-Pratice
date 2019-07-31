import Link from 'next/link';
import NavBar from "./Navbar";

const Header = (props) => (
    <div>
        <img src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt="Pokemon_Logo" width="200px"/>
        <NavBar />
        <style jsx>{`
            div{
                background: rgb(254, 68, 59);
                display: flex;
                justify-content: space-between;
            }
        `}</style>
    </div>

)

export default Header;