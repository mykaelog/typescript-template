import { add } from '.';


describe('Test', () => {
  it('should add correctly', () => {
    expect(add(1, 2))
      .toBe(3);
  });
  it('should fail add', () => {
    expect(add(1, 2)).not.toBe(2);
  });
});
