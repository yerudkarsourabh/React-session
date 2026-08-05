//1. Named export(can have multiple named exports per module)
export const pi = 3.14;
export function add(a, b) {
    return a + b;
}

//2. Default export(only one default export is allowed per module)
export default function multiply(a, b) {
    return a * b;
}

