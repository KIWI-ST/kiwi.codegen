import { slice } from "./slice"

const join = (x: any[]): string => {
    return slice(x).join('');
}

export { join }