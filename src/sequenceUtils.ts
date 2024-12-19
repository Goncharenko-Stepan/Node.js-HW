export function generateFibonacci(limit: number): number[] {
  if (limit < 1) return [];

  const fibonacci: number[] = [0, 1];

  while (true) {
    const nextValue =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (nextValue > limit) break;
    fibonacci.push(nextValue);
  }

  return fibonacci;
}

// Function to generate prime numbers up to a given number
export function generatePrimeNumbers(limit: number): number[] {
  if (limit < 2) return [];

  const primes: number[] = [];
  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return primes;
}
