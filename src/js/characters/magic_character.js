import Character from './base';

export default class MagicCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackDistance = 1;
    this.isStoned = false;
  }

  get attack() {
    let power = this.attackPower - (this.attackPower * ((this.attackDistance - 1) / 10));
    if (this.isStoned) {
      power = Math.round(power - Math.log2(this.attackDistance) * 5);
    }
    return power > 0 ? power : 0;
  }

  set attack(distance) {
    this.attackDistance = distance > 0 ? distance : 1;
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(state) {
    this.isStoned = Boolean(state);
  }
}
