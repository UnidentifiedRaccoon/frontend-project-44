import crypto from 'crypto';

/**
 * Generates a cryptographically secure random integer between min and max (inclusive)
 * Uses crypto.getRandomValues() instead of Math.random() for better security
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (inclusive)
 * @returns {number} Random integer between min and max
 */
const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  const maxUint32 = 0xFFFFFFFF;
  const randomBuffer = new Uint32Array(1);
  crypto.getRandomValues(randomBuffer);
  const randomValue = randomBuffer[0];
  return Math.floor((randomValue / maxUint32) * range) + min;
};

export default getRandomNumber;
