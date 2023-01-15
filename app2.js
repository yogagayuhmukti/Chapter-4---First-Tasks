class FinalValue {
    constructor(value) {
        this.value = value;
    }
    getFinalValue(){
        const arr = this.value;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === `x--` || arr[i] === `--x`){
                count--;
            } else {
                count++;
            }
        }
        return count; 
    }
    showIndexValue(index){
    const arr = this.value;
    const result = 
        arr [index] === `x--` || arr[index] === `--x` ? `decrement` : `increment`;
    return result;
    }
}

const operation = new FinalValue([`x++`,`++x`,`--x`, `++x`, `x--`, `x++`]);

document.write(operation.getFinalValue() + '<br />');
document.write(operation.showIndexValue() + '<br />');