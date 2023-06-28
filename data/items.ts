export type Items = {
  id: number;
  name: string;
  desc?: Desc;
  price: number;
  tag: string;
  imgUrl: string;
};

type Desc = DescPC;

export type DescPC = {
  CPU: string;
  RAM: string;
  GPU: string;
  PSU: string;
  OS: string;
};

export const items: Items[] = [
  {
    id: 1,
    name: 'GAYMING PC V1',
    desc: {
      CPU: 'Intel Core i5-12400F',
      RAM: '16GB DDR4 3200MHz)',
      GPU: 'RTX 3060',
      PSU: '500W',
      OS: 'None',
    },
    price: 749,
    tag: 'PC',
    imgUrl: '',
  },
  {
    id: 2,
    name: 'GAYMING PC V2',
    desc: {
      CPU: 'Intel Core i5-13400F',
      RAM: '32GB DDR4 3600MHz',
      GPU: 'RTX 4060Ti',
      PSU: '750W',
      OS: 'Windows 11 Home',
    },
    price: 1249,
    tag: 'PC',
    imgUrl: '',
  },
  {
    id: 3,
    name: 'GAYMING PC V3',
    desc: {
      CPU: 'Intel Core i9-13900F',
      RAM: '64GB DDR5 4800MHz',
      GPU: 'RTX 4090',
      PSU: '1350W',
      OS: 'Windows 11 Pro',
    },
    price: 9499,
    tag: 'PC',
    imgUrl: '',
  },
  {
    id: 4,
    name: 'GAYMING TV',
    price: 9499,
    tag: 'TV',
    imgUrl: '',
  },
  {
    id: 5,
    name: 'DOGSHIT TV',
    price: 249,
    tag: 'TV',
    imgUrl: '',
  },
  {
    id: 6,
    name: 'MIDTIER TV',
    price: 1249,
    tag: 'TV',
    imgUrl: '',
  },
  {
    id: 7,
    name: 'BATTLEPASS',
    price: 19,
    tag: 'Valorant skins',
    imgUrl: '',
  },
  {
    id: 8,
    name: 'U BROKE CLASSIC',
    price: 49,
    tag: 'Valorant skins',
    imgUrl: '',
  },
  {
    id: 9,
    name: 'E-DATER PHANTOM',
    price: 499,
    tag: 'Valorant skins',
    imgUrl: '',
  },
  {
    id: 10,
    name: 'GETTIN BITCHES OPERATOR',
    price: 2499,
    tag: 'Valorant skins',
    imgUrl: '',
  },
  {
    id: 11,
    name: 'KISS A HOMIE',
    price: 1,
    tag: 'Gay porn',
    imgUrl: '',
  },
  {
    id: 12,
    name: 'IM ABOUT TO CUM',
    price: 49,
    tag: 'Gay porn',
    imgUrl: '',
  },
  {
    id: 13,
    name: 'VAN',
    price: 74,
    tag: 'Gay porn',
    imgUrl: '',
  },
  {
    id: 14,
    name: 'RAM RANCH',
    price: 99,
    tag: 'Gay porn',
    imgUrl: '',
  },
  {
    id: 15,
    name: 'BILLY WOULD BE PROUD',
    price: 19999,
    tag: 'Gay porn',
    imgUrl: '',
  },
];
