import Header from '../components/Header';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) =>(

    <div>
        <Header />
            <h1>Poke Wiki</h1>
            <ul>
                {props.info.map(entry => (
                    <li key={entry.name}>
                        <Link href="/p/[id]" as={`/p/${entry.name}`}>
                            <a>{entry.name}</a>
                        </Link>
                    </li>

                ))}
            </ul>
            <style global jsx>{`
                body{
                    margin: 0px;
                    background-image: url("https://pokemonlife.vanlankveld.me/img/grass_tile.png");
                }

                h1,
                a {
                    color: red;
                    font-family: 'Arial';
                }

                ul {
                    display: inline;
                    padding: 0;
                }

                li {
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                }

                a:hover {
                    opacity: 0.6;
                }
        `}</style>
    </div>
    
        
);

Index.getInitialProps = async function(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=300');
    const data = await res.json();

    // console.log(`Show data fetched. ${data.results}`);
    return{
        info: data.results
    };
};

export default Index;