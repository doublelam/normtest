class Test{
    field: number;
    method(){
        console.log('method')
    }
}

class ChiTest extends Test{
    newM(){
        this.method();
    }
}

