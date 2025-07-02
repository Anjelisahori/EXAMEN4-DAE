import { useEffect } from 'react';
import CardList from '../components/CardList'; 
import { useRickStore } from '../store/rickandmorty.store';

const Home = () => {
    const characters = useRickStore((state) => state.characters);
    const getCharacters = useRickStore((state) => state.getCharacters);

    useEffect(() => {
        getCharacters(); 
    }, [getCharacters]);

    return (
        <section>
            <div className="container">
                <h2>Personajes de Rick and Morty</h2>
                <CardList data={characters} /> 
            </div>
        </section>
    );
}

export default Home;
