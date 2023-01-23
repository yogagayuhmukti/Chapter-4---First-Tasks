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

// Ada fungsi yg menghasilkan nilai akhir
document.write('1. Ada fungsi yg menghasilkan nilai akhir' + '<br />' + operation.getFinalValue() + '<br />' + '<br />' + '<br />');

// Ada fungsi yang bisa print informasi setiap index apakah decrement atau increment
document.write('2. Ada fungsi yang bisa print informasi setiap index apakah decrement atau increment' + '<br />' + operation.showIndexValue() + '<br />' + '<br />' + '<br />');