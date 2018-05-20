const basefontsize = 16;

/**
 * 
 * @param {number} size - Target px size
 * @param {number} [context=16] - Current Context.
 */
export const calculateEM = (size: number, context: number = basefontsize) => {
    let em = ((size / context) * 1).toFixed(3);
    return em + 'em';
};