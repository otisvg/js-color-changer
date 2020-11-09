describe('ColorChanger', () => {

  var colorChanger;

  beforeEach(() => {
    colorChanger = new ColorChanger();
  });

  describe('isValidHex', () => {
    it('returns true for a valid 6 digit hex without a hash', () => {
      expect(colorChanger.isValidHex("000000")).toBe(true);
    });

    it('returns true for a valid 6 digit hex without a hash', () => {
      expect(colorChanger.isValidHex("123123")).toBe(true);
    });

    it('returns true for a valid 6 digit hex with a hash', () => {
      expect(colorChanger.isValidHex("#000000")).toBe(true);
    });

    it('returns true for a valid 6 digit hex with a hash', () => {
      expect(colorChanger.isValidHex("#114234")).toBe(true);
    });

    it('returns true for a valid 3 digit hex without a hash', () => {
      expect(colorChanger.isValidHex("000")).toBe(true);
    });

    it('returns true for a valid 3 digit hex without a hash', () => {
      expect(colorChanger.isValidHex("134")).toBe(true);
    });

    it('returns true for a valid 3 digit hex with a hash', () => {
      expect(colorChanger.isValidHex("#142")).toBe(true);
    });

    it('returns true for a valid 3 digit hex with a hash', () => {
      expect(colorChanger.isValidHex("#234")).toBe(true);
    });

    it('returns false for a 7 digit  hex', () => {
      expect(colorChanger.isValidHex("2394234")).toBe(false);
    });

    it('returns false for a 2 digit hex', () => {
      expect(colorChanger.isValidHex("13")).toBe(false);
    });

    it('returns false for a 10 digit hex with a hash', () => {
      expect(colorChanger.isValidHex("0343004100")).toBe(false);
    });
  });
});
