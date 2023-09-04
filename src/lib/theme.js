export default function(mode, property, reverse) {
    if (reverse) {
        return mode === 'light' ? `var(--dark-${property})` : `var(--light-${property})`;
    }
    return mode === 'light' ? `var(--light-${property})` : `var(--dark-${property})`;
}
