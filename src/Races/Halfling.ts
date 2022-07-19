import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  private static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.instance += 1;
  }

  get getMaxLifePoints() {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.instance;
  }
}

export default Halfling;