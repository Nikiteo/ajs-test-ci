import stringifyHealth from './health.js';

test.each([
  ['healthy', 60],
  ['healthy', 51],
  ['wounded', 50],
  ['wounded', 49],
  ['wounded', 45],
  ['wounded', 16],
  ['wounded', 15],
  ['critical', 14],
  ['critical', 10],
])(
  ('should return string name of health status'), (health, healthPoints) => {
    expect(stringifyHealth({ name: 'Test', health: healthPoints })).toBe(health);
  },
);
