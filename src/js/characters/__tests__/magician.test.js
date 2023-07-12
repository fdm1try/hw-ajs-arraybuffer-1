import Magician from '../magician';

test('Test magician character class', () => {
  const magician = new Magician('Gandalf');
  expect(magician).toEqual({
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
    attackDistance: 1,
    attackPower: 100,
    isStoned: false,
  });
});

test('Test magician damage', () => {
  const magician = new Magician('Gandalf');
  magician.damage(30);
  expect(magician.health).toBe(82);
});

test('Attacking the nearest cell should not reduce the attack power.', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 1;
  expect(magician.attack).toBe(100);
});

test('An attack at a distance of two cells reduces the attack power by 10%.', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 2;
  expect(magician.attack).toBe(90);
});

test('An attack at a distance of four cells reduces the attack power by 30%.', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 4;
  expect(magician.attack).toBe(70);
});

test('An attack at a distance of nine cells reduces the attack power by 80%.', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 9;
  expect(magician.attack).toBe(20);
});

test('An attack at a distance of two cells in the stoned state should reduce the attack power by 15%.', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 2;
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
  expect(magician.attack).toBe(85);
});

test('An attack at a distance of four cells in the stoned state should reduce the attack power by 40%.', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 4;
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
  expect(magician.attack).toBe(60);
});

test('An attack at a distance of ten cells in the stoned state should reduce the attack power by 100%.', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 10;
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
  expect(magician.attack).toBe(0);
});
