export default function two_crystal_balls(breaks: boolean[]): number {
    /* My implementation
    let l = 0;
    let r = breaks.length - 1;
    let mid = Math.floor((l + r) / 2);
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (breaks[mid]) {
            break;
        }
        l = mid + 1;
    }

    let prev: number = mid;
    while (breaks[mid]) {
        prev = mid;
        mid -= Math.sqrt(breaks.length);
    }

    for (let i = mid; i <= prev; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
    */

    const hop = Math.floor(Math.sqrt(breaks.length));
    
    let i = hop;
    while (i < breaks.length) {
        if (breaks[i]) {
            break;
        }
        i += hop;
    }

    i -= hop;
    for (let j = 0; j <= hop && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
