export function plural(num, postfixes) {
    if (!num) {
        console.warn('[plural] Wrong Number ', num);
        return '';
    }

    let n = Math.abs(num);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return postfixes[2];
    }
    n %= 10;
    if (n === 1) {
        return postfixes[0];
    }
    if (n >= 2 && n <= 4) {
        return postfixes[1];
    }
    return postfixes[2];
}

export function lockBody() {
    document.body.style.paddingRight = `${
        window.innerWidth - document.documentElement.clientWidth
    }px`;
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
}

export function unlockBody() {
    document.body.style.height = '';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
}
