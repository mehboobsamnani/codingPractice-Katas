for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
      b = i % 5 == 0;

      console.log( b ? ( f ? "fizzbuzz" : "buzz"  ) : f ? "fizz" : i )
  }