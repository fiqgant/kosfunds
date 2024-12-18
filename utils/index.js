/**
 * Formats a number into a human-readable Rupiah string with comma separators.
 * Handles edge cases for invalid inputs and negative numbers.
 * 
 * @param {number|string} num - The number to format. Can be a numeric string.
 * @returns {string} - The formatted number as a string in IDR currency.
 */
const formatNumber = (num) => {
  const parsedNum = Number(num);
  if (isNaN(parsedNum)) {
    return "Rp0";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(parsedNum);
};

export default formatNumber;
