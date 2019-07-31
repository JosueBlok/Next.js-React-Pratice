import Header from '../../components/Header';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
    <Header>
      <h1>{props.data.name}</h1>
      <img src={props.data.sprites.front_default} alt="Sprite_Pokemon"/>
      <style jsx>{`
        h1{
            color:33BBFF;
        }
      `}</style>
    </Header>
)

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
    const data = await res.json();
  
    console.log(`Fetched show: ${data}`);
  
    return { data };
};

export default Post;