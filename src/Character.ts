import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.random() * 10 };
  }

  get race(): Race {
    return this._race;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    const obj = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
    return obj;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) this._lifePoints -= damage;

    if (this._lifePoints <= 0) this._lifePoints = -1;
    
    return this._lifePoints;
  }

  attMaxLifePoints(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this.attMaxLifePoints();
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  special(enemy: Fighter): void {
    this._defense += 1;
    enemy.receiveDamage(this._strength * 4);
  }
}

export default Character;