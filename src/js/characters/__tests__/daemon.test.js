import Daemon from '../daemon';

test('Test daemon character class', () => {
  const daemon = new Daemon('Abigor');
  expect(daemon).toEqual({
    name: 'Abigor',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
    attackDistance: 1,
    attackPower: 100,
    isStoned: false,
  });
});

test('Test magician damage', () => {
  const daemon = new Daemon('Abigor');
  daemon.damage(30);
  expect(daemon.health).toBe(82);
});

test('Attacking the nearest cell should not reduce the attack power.', () => {
  const daemon = new Daemon('Abigor');
  daemon.attack = 1;
  expect(daemon.attack).toBe(100);
});

test('An attack at a distance of two cells reduces the attack power by 10%.', () => {
  const daemon = new Daemon('Abigor');
  daemon.attack = 2;
  expect(daemon.attack).toBe(90);
});

test('An attack at a distance of four cells reduces the attack power by 30%.', () => {
  const daemon = new Daemon('Abigor');
  daemon.attack = 4;
  expect(daemon.attack).toBe(70);
});

test('An attack at a distance of nine cells reduces the attack power by 80%.', () => {
  const daemon = new Daemon('Abigor');
  daemon.attack = 9;
  expect(daemon.attack).toBe(20);
});

test('An attack at a distance of two cells in the stoned state should reduce the attack power by 15%.', () => {
  const daemon = new Daemon('Abigor');
  daemon.attack = 2;
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
  expect(daemon.attack).toBe(85);
});

test('An attack at a distance of four cells in the stoned state should reduce the attack power by 40%.', () => {
  const daemon = new Daemon('Abigor');
  daemon.attack = 4;
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
  expect(daemon.attack).toBe(60);
});

test('An attack at a distance of ten cells in the stoned state should reduce the attack power by 100%.', () => {
  const daemon = new Daemon('Abigor');
  daemon.attack = 10;
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
  expect(daemon.attack).toBe(0);
});
