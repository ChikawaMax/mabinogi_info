import { cromOBJ } from '@/app/typs/types';

const rooms0 = {
  room1: { color: 'text-green-500', info: '大/3/3カ' },
  room2: { color: 'text-green-500', info: '小/2/2カ' },
  room3: { color: 'text-green-500', info: '大/2/2フ' },
  room4: { color: 'text-green-500', info: '通/16' },
  room5: { color: 'text-yellow-500', info: '小/2/2カ' },
  room6: { color: 'text-green-500', info: '小/2/2フ' },
  room7: { color: 'text-green-500', info: '悪/2/2フ' },
  room8: { color: 'text-green-500', info: '大/4/3カ4フ' },
};

const rooms100 = {
  ...rooms0,
  room1: { ...rooms0.room1, color: 'text-red-500' },
  room2: { ...rooms0.room2, color: 'text-red-500' },
  room3: { color: 'text-yellow-500', info: '小/2/2カ3フ' },
  room4: { ...rooms0.room4, color: 'text-red-500' },
  room5: { color: 'text-red-500', info: '大/2' },
  room6: { color: 'text-red-500', info: '大/2/2カ3フ' },
  room7: { ...rooms0.room7, color: 'text-red-500' },
  room8: { ...rooms0.room8, color: 'text-red-500' },
  room9: { color: 'text-red-500', info: '大' },
};

export const crombas: cromOBJ[] = [
  {
    id: 1,
    level: '0%',
    ...rooms0,
  },
  {
    id: 2,
    level: '30%',
    ...rooms0,
    room6: { ...rooms0.room6, color: 'text-red-500' },
    room7: { ...rooms0.room7, color: 'text-red-500' },
    room8: { ...rooms0.room8, color: 'text-red-500' },
  },
  {
    id: 3,
    level: '40%',
    ...rooms100,
    room1: { ...rooms0.room1 },
    room4: { ...rooms0.room4 },
    room5: { ...rooms0.room5 },
    room9: { ...rooms100.room9, color: 'text-yellow-500' },
  },
  {
    id: 4,
    level: '50%',
    ...rooms100,
    room1: { ...rooms0.room1 },
    room4: { ...rooms0.room4 },
    room5: { ...rooms0.room5 },
  },
  {
    id: 8,
    level: '80%',
    ...rooms100,
    room1: { ...rooms0.room1 },
  },
  {
    id: 9,
    level: '90%',
    ...rooms100,
    room1: { ...rooms0.room1 },
    room9: { ...rooms100.room9, color: 'text-yellow-500' },
  },
  {
    id: 10,
    level: '100%',
    ...rooms100,
  },
];
