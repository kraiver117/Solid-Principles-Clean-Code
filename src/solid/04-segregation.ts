// * Segregation interface is about to not use interfaces that has no meaning in a class

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Hummingbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  // * Violate the Segregation interface principle
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  // * Violate the Segregation interface principle
  public eat() {}
  public swim() {}
}
