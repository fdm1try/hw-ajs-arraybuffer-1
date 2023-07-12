import MagicCharacter from './magic_character';

export default class Magician extends MagicCharacter {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attackPower = 100;
    this.defence = 40;
  }
}
