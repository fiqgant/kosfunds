/**
 * Formats a number into a human-readable Rupiah string with comma separators.
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string.
 */

const formatNumber = (num) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);
};

export default formatNumber;
