import Link from 'next/link';

const NavBar = () => (
    <div>
        <nav>
            <ul>
                <li> <Link href="/"><a>Home</a></Link> </li>
                <li> <Link href='/pokimon'><a>Pokemones</a></Link> </li>
            </ul>
        </nav>
        <style jsx>{`
            nav {
                height: 100%;
            }
            ul {
                display: flex;
                margin: 0px;
                padding: 0px;
                height: 100%;
                width: 100%;
                list-style: none;
                
            }
            
            ul li {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0px;
                heifht: 100%;
                background: rgb(255, 81, 98);
                padding-left: 20px;
                padding-right: 20px;
            }

            ul li a {
                color: white;
                text-decoration: none;
            }

            
        `}</style>
    </div>
)

export default NavBar;