
//check to see whether the input from the user is a valid
//hex color

//1. #000000 or 000000
// if has #, remove the #
//2. check the length - should be either 3 or 6 characters

const isValidHex = (hex) => {
  if (!hex) return false;
  const strippedHex = hex.replace('#', '');
  return strippedHex.length === 3 || strippedHex.length === 6;
};
