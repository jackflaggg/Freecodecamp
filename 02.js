function persistence(num) {
    let count = 0;

    while (num >= 10) {
        let product = 1;
        const digits = String(num).split('');

        for (let i = 0; i < digits.length; i++) {
            product *= parseInt(digits[i], 10);
        }

        num = product;
        count++;
    }

    return count;
}