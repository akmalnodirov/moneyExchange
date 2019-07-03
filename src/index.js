// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let result = {};

    if(currency <= 0){
        return result;
    }

    if(currency >= 10000){
        result["error"] = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }

    let exchangers = {
        "H":50,
        "Q":25,
        "D":10,
        "N":5,
        "P":1,
    };

    for (let x in exchangers){
        let value = parseInt(currency / exchangers[x]);

        if(value == 0){
            continue;
        }

        result[x] = value;
        currency =  currency % exchangers[x];
    }
    return result;
}
