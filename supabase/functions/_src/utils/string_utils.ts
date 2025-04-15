/**
 * Reverse a string.
 * 
 * @param {string} text 
 * @returns {string} Reversed trimmed string.
 */
export function reverseString(text: string) : string {
  const trimmedText: string = text.trim();
  
  if (trimmedText.length <= 1) {
    return trimmedText
  }

  return trimmedText.split('').reverse().join('')
}