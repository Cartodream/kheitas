const fs = require('fs');

// Données d'expérience de base pour les 151 Pokémon
const expBaseData = [
    64, 142, 236, 62, 142, 240, 63, 142, 239, 39,
    72, 178, 39, 72, 178, 50, 122, 216, 51, 145,
    52, 162, 62, 147, 112, 218, 60, 158, 55, 128,
    227, 55, 128, 227, 113, 217, 60, 178, 95, 196,
    49, 159, 64, 138, 221, 57, 142, 61, 158, 53,
    153, 58, 154, 62, 175, 61, 159, 70, 194, 60,
    135, 225, 62, 140, 225, 61, 142, 227, 64, 138,
    221, 67, 180, 60, 134, 223, 82, 175, 63, 172,
    65, 163, 94, 62, 165, 85, 176, 65, 175, 61,
    180, 62, 142, 225, 77, 66, 169, 65, 166, 66,
    172, 65, 186, 87, 124, 139, 140, 77, 68, 173,
    69, 170, 395, 166, 172, 59, 154, 61, 158, 68,
    182, 136, 100, 137, 156, 167, 200, 211, 20, 189,
    219, 101, 65, 196, 184, 184, 130, 99, 199, 99,
    201, 202, 189, 261, 261, 261, 60, 147, 270, 306, 270
];

// Lire le fichier JSON
const pokemonData = JSON.parse(fs.readFileSync('pokemon_data.json', 'utf8'));

// Ajouter l'expérience de base à chaque Pokémon
for (let i = 1; i <= 151; i++) {
    if (pokemonData[i.toString()]) {
        pokemonData[i.toString()].exp_base = expBaseData[i - 1];
    }
}

// Écrire le fichier modifié
fs.writeFileSync('pokemon_data.json', JSON.stringify(pokemonData, null, 2));

console.log('Expérience de base ajoutée à tous les Pokémon !');