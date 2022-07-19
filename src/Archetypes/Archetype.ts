import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;
  
  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }
  
  get getName() {
    return this.name;
  }
  
  get getSpecial() {
    return this.special;
  }

  get getCost() {
    return this.cost;
  }
  
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
  
  abstract get energyType(): EnergyType;
}
  
export default Archetype;