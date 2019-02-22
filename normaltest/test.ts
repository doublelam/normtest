@cD
class S {
  @test1()
  public test(a: number, b: number): number {
    console.log("test", a, b);
    return a + b;
  }
}

function test1() {
  return (a, b, c) => {
    console.log("test1", a, b, c);
  };
}

function cD(c) {
  console.log("class dec", c);
  c.prototype.w = () => {
    console.log("cd w˝");
  };

}
console.log("start__", S);
const s = new S();
s.test(1, 3);
((s as any).w as any)();

