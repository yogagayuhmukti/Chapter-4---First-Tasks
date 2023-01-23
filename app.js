class Row {
    constructor(makeRow) {
        this.rows = makeRow;
    }
    getIndexOf(array){
        return array.map((num) => this.rows.indexOf(num));
    }
    getValue(index){
        return this.rows[index];
    }
    sortDescending(){
        return this.rows.sort((a,b) => b-a);
    }   
}

const makeRow = () => {
    let arr = [];
    for (let i = 1; i <= 500; i++){
        arr.push(i * 2 - 1);
    }
    return arr;
};

const numArray = new Row(makeRow());

// Ada array [52, 55, 57, 68, 77]. Class tersebut bisa menampilkan index dari nilai-nilai tersebut
document.write( '1. Ada array [52, 55, 57, 68, 77]. Class tersebut bisa menampilkan index dari nilai-nilai tersebut' + '<br />' + numArray.getIndexOf([52,55,57,68,77]) + '<br />' + '<br />' + '<br />');

// Ada fungsi yg bisa menampilkan nilai dr deret berdasarkan index tertentu
document.write('2. Ada fungsi yg bisa menampilkan nilai dr deret berdasarkan index tertentu' + '<br />' + numArray.getValue(250) + '<br />' + '<br />' + '<br />');

// Ada fungsi yg bisa printing deret dari nilai tertinggi
document.write('3. Ada fungsi yg bisa printing deret dari nilai tertinggi' + '<br />' + numArray.sortDescending() + '<br />' + '<br />' + '<br />');