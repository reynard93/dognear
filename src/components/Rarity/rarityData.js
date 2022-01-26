import shortid from 'shortid';
import common from '../../assets/images/rarity-common.svg';
import uncommon from '../../assets/images/rarity-uncommon.svg';
import rare from '../../assets/images/rarity-rare.svg';
import veryRare from '../../assets/images/rarity-very-rare.svg';
import superRare from '../../assets/images/rarity-super-rare.svg';

import rateDog1 from '../../assets/images/hounds/1.jpg';
import rateDog2 from '../../assets/images/hounds/2.jpg';
import rateDog3 from '../../assets/images/hounds/3.jpg';
import rateDog4 from '../../assets/images/hounds/4.jpg';

const rarityData = {
  rates: [
    {
      id: shortid.generate(),
      svgIcon: common,
      count: '7,500',
      text: 'Common',
    },
    {
      id: shortid.generate(),
      svgIcon: uncommon,
      count: '1,250',
      text: 'Uncommon',
    },
    {
      id: shortid.generate(),
      svgIcon: rare,
      count: '750',
      text: 'Rare',
    },
    {
      id: shortid.generate(),
      svgIcon: veryRare,
      count: '350',
      text: 'Very Rare',
    },
    {
      id: shortid.generate(),
      svgIcon: superRare,
      count: '150',
      text: 'Super Rare',
    },
  ],
  kats: [
    {
      id: shortid.generate(),
      svgRarityIcon: common,
      srcImg: './images/1.jpg',
      svgRate: rateDog1,
      palette: 2,
      clothes: 3,
      hat: 2,
    },
    {
      id: shortid.generate(),
      svgRarityIcon: superRare,
      srcImg: './images/2.jpg',
      svgRate: rateDog2,
      palette: 5,
      clothes: 5,
      hat: 5,
    },
    {
      id: shortid.generate(),
      svgRarityIcon: veryRare,
      srcImg: './images/3.jpg',
      svgRate: rateDog3,
      palette: 3,
      clothes: 3,
      hat: 4,
    },
    {
      id: shortid.generate(),
      svgRarityIcon: veryRare,
      srcImg: './images/4.jpg',
      svgRate: rateDog4,
      palette: 3,
      clothes: 3,
      hat: 4,
    },
  ],
};

export default rarityData;
