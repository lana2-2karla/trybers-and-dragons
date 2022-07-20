import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static instance = 0;
  public energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.instance += 1;
  }

  get getenergyType() {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instance;
  }
}

export default Necromancer;