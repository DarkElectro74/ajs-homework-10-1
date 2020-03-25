// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving);
}, (error) => {
  // ...
  console.log(error);
});
