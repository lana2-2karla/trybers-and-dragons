import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static instance = 0;
  public energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.instance += 1;
  }

  get getenergyType() {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instance;
  }
}

export default Warrior;