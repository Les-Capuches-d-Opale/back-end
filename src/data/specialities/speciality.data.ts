// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');
const items = require('../items/item.data');

const randomItems = (items) => {
  return items
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 8 + 4))
    .map((item) => item._id);
};

const specialities = [
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e1'),
    name: 'Archer',
    description:
      "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e2'),
    name: 'Babare',
    description:
      'Certains barbares sont véritablement sauvages et n’ont presque aucune connaissance des armes modernes. Ils apprennent à éviter les coups et à endurcir leur peau.',
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e3'),
    name: 'Paladin',
    description:
      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e4'),
    name: 'Mage',
    description:
      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e5'),
    name: 'Arcaniste',
    description:
      'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e6'),
    name: 'Prêtre',
    description:
      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e7'),
    name: 'Alchimiste',
    description:
      'L’exubérance de l’alchimiste n’adoucit en rien sa réputation de perfectionniste en matière de fabrication d’extraits et de potions magiques. Il les imprègne de la magie qu’il puise dans sa propre aura et utilise son corps comme sujet d’expérimentation.',
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e8'),
    name: 'Forgeron',
    description:
      'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e9'),
    name: 'Enchanteur',
    description:
      'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
    requiredItems: randomItems(items),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5f1'),
    name: 'Messager',
    description: "C'est juste un gars de La Poste.",
    requiredItems: randomItems(items),
  },
];

export = specialities;
