import { useRouter } from 'next/router'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {

    const { pokemon } = props

    return (
        <div>
            <h1>{pokemon.name}</h1>
            {pokemon.abilities.map(ability =>
                (<p>{ability.name}</p>)
            )}
        </div>
    )
}

Index.getInitialProps = async function(context) {
    const { name } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const pokemon = await res.json();

    console.log(`Fetched pokemon: ${pokemon.name}`);
    console.log(pokemon)

    return { pokemon };
};


export default Index