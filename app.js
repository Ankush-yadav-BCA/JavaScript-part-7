/*---------------------For Question no. 1-------------------*/
let arr = [10,20,30,40,50];

function getAverage(array){
    let length = array.length;
    let sum = 0;
    
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    let average = sum/length;
    return average
}
//----------- or --------------//
const arrayAverage = (array) => {
    let total = 0;
    for(let el of array){
        total+=el;
    }
    return total/array.length
};

/*---------------------For Question no. 2 -------------------*/
const isEven = (n) => (n%2==0);

/*---------------------For Question no. 3-------------------*/
const printMsg = {
    message : 'Hello, World',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(printMsg.logMessage(),5000);