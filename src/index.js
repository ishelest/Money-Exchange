// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // check for positive and not too big
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0) return {};
    
    let currencyTemp = currency;

    // H
    const h = Math.floor(currencyTemp / 50);
    currencyTemp = currencyTemp - (h * 50);
    // Q
    const q = Math.floor(currencyTemp / 25);
    currencyTemp = currencyTemp - (q * 25);
    // D
    const d = Math.floor(currencyTemp / 10);
    currencyTemp = currencyTemp - (d * 10);
    // N
    const n = Math.floor(currencyTemp / 5);
    currencyTemp = currencyTemp - (n * 5);
    // P
    const p = currencyTemp;

    //generate result object
    let result = {};
    if(h) result["H"] = h;
    if(q) result["Q"] = q;
    if(d) result["D"] = d;
    if(n) result["N"] = n;
    if(p) result["P"] = p;

    return result;
}
