function binomial(N, k) {
	numer = factorial(N);
	nlesskfac = factorial(N - k);
	kfac = factorial(k);
	denom = kfac * nlesskfac;
	return numer / denom;
};

function factorial(n) {
	// TRY math.js FOR LARGE NUMS
	// WHY DOESN'T JS HAVE FACTORIAL LIKE PYTHON FOR BIG NUMS??
	math.config({ precision: 2000 });

	// CONFIGURE FAC AS A BIG NUMBER (NOT CLEAR THAT IT WORKS)
	var fac = math.bignumber(1000);
	fac = 1;
	if (n < 0) {
		alert('Must be a positive number.');
	}
	else if (n === 0 || n === 1)
		return 1;
	else {
		for (i = 1; i <= n; i++) {
			fac *= i;
		}
	}
	// console.log('factorial ', n, ': ', fac)
	return fac;
};

function binomialpmf(N, k, p) {
	bin = binomial(N, k);
	pmf = bin * Math.pow(p, k) * Math.pow(1-p, N-k);
	return pmf
}

