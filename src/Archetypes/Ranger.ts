import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static instance = 0;
  public energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.instance += 1;
  }

  get getenergyType() {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instance;
  }
}

export default Ranger;