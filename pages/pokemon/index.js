import { useRouter } from 'next/router'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {

    const { pokemons } = props

    return (
        <div>
            {pokemons.results.map((pokemon, i) =>
                (
                    <li key={i}>
                        <Link href="/pokemon/[name]" as={`/pokemon/${pokemon.name}`}>
                            <a>{pokemon.name}</a>
                        </Link>
                    </li>
                )
            )}
        </div>
    )
}

Index.getInitialProps = async function(context) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limite=964`);
    const pokemons = await res.json();

    console.log(pokemons)

    return { pokemons };
};


export default Index