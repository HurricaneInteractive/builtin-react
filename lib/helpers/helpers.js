const basefontsize = '16px';

export const calculateEM = (size, context = basefontsize) => {
    size = parseInt(size.replace('px', ''));
    context = parseInt(context.replace('px', ''));

    let em = parseFloat((size / context) * 1).toFixed(3);
    return em + 'em';
};