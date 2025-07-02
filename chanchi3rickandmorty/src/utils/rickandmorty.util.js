export const adaptRickData = (character) => {
    return {
        name: character.name,
        species: character.species,
        status: character.status,
        image: character.image, 
    };
};
