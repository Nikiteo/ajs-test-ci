import stringifyHealth from './health';

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

// test('should return string name of health status', () => {
//       const expected = 'healthy';
//       const received = stringifyHealth({ name: 'Test', health: 60 });
    
//       expect(received).toBe(expected);
//     });
    
//     test('should return string name of health status', () => {
//       const expected = 'healthy';
//       const received = stringifyHealth({ name: 'Test', health: 51 });
    
//       expect(received).toBe(expected);
//     });
    
//     test('should return string name of health status', () => {
//       const expected = 'wounded';
//       const received = stringifyHealth({ name: 'Test', health: 50 });
    
//       expect(received).toBe(expected);
//     });
    
//     test('should return string name of health status', () => {
//       const expected = 'wounded';
//       const received = stringifyHealth({ name: 'Test', health: 49 });
    
//       expect(received).toBe(expected);
//     });