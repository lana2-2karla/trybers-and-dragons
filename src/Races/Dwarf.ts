import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  private static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.instance += 1;
  }

  get getMaxLifePoints() {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.instance;
  }
}

export default Dwarf;