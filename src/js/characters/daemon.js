import MagicCharacter from './magic_character';

export default class Daemon extends MagicCharacter {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attackPower = 100;
    this.defence = 40;
  }
}
