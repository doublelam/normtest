export class G964 {

    public static perimeter = (n) => {
        // your code
        const fibon: any = (n, arr) => {
      // your code
      const arra = arr || [];
      if (n === 0 || n === 1) {
        arra[n] = 1;
        return [1, arra];
      }

      const fibo = fibon(n - 1, arra)[0] + fibon(n - 2, arra)[0]
      arra[n] = fibo;
      return [fibo, arra];
    }
    return fibon(n)[1].reduce((a, b) => a + b) * 4
        
    }
}
