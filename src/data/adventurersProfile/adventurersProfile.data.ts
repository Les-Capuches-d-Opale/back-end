const mongoose = require('mongoose');
const items = require('../items/item.data');

const randomItems = (items) => {
    return items
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 8 + 4));
};

const adventurerProfile = [{
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e1'),
    speciality: {
        name: 'Archer',
        description:
            "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
        requiredItems: randomItems(items)
    },
    experience: Math.floor(Math.random() * 10)
}]