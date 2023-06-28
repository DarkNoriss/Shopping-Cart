import { items } from '@/data/items';

export const randomNumberGenerator = () => {
  const min = 1;
  const max = items.length;
  const randomNumbers: number[] = [];

  while (randomNumbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
};
