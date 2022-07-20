import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static instance = 0;
  public energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.instance += 1;
  }

  get getenergyType() {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.instance;
  }
}

export default Mage;