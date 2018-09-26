// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    
    if (currency > 10000) return error;
    if (currency <= 0) return result;
    let currencyTemp = currency;
    const h = Math.floor(currencyTemp / 50);
    currencyTemp = currencyTemp - (h * 50);
    const q = Math.floor(currencyTemp / 25);
    currencyTemp = currencyTemp - (q * 25);
    const d = Math.floor(currencyTemp / 10);
    currencyTemp = currencyTemp - (d * 10);
    const n = Math.floor(currencyTemp / 5);
    const p = currencyTemp;
    let result = {};
    if(h) result.H = h;
    if (q) result[Q] = q;
    if (d) result[D] = d;
    if (n) result[N] = n;
    if (p) result[P] = p;
    return JSON.stringify(result);
}
