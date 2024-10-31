var a1 =[1,2,3,4,5]
var a2 =[5,6,7,8,9,10]

var total = a1.concat(a2)

var a3 =[]

for(i=0; i<total.length; i++){

    
    if(total[i] == total[i+1]){
        continue
    }
    else{
        a3.push(total[i])
    }
}

console.log(a3)