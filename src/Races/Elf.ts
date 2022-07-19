import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;
  private static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instance += 1;
  }

  get getMaxLifePoints() {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.instance;
  }
}

export default Elf;