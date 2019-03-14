module.exports = function getZerosCount(number, base) {
  let primeObj = {},
		primeArr = [],
		prime = 2;
	while (prime <= base) {
		if (base % prime == 0) {
			if (prime in primeObj) {
        primeObj[prime].pow += 1;
			} else {
				primeObj[prime] = {
					prime: prime,
					pow: 1
        }
			}
      base = base / prime;
    } else prime++;
  }
	for (let key in primeObj) {
		let result = 0;
		let i = 1;
		while (Math.pow(primeObj[key].prime, i) <= number) {
			result += Math.floor(number/Math.pow(primeObj[key].prime, i));
			i++
		};
		result = Math.floor(result/primeObj[key].pow);
		primeArr.push(result);
	}
  primeArr.sort((a, b) => a - b);
	return primeArr[0];
}