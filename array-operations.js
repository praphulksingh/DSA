function printingEachElement(){
    let array=[2,4,5,6,8,9,12,15,17,20]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
}
}
//printingEachElement()

function accessingElementByActualValue(){
    let array=[2,4,5,6,8,9,12,15,17,20]
    let el=8
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element==el){
        console.log(`element found at index ${i} and element = ${element}`)
        return element
    }
}
}
//accessingElementByActualValue()

function accessingElementByIndexValue(){
    let array=[2,4,5,6,8,9,12,15,17,20]
    let iv=3
if (typeof parseInt(iv)==="number" && iv<array.length && iv>0) {
    for (let i = 0; i < array.length; i++) {
    let element=array[i]
    if(iv===i){
        console.log(`Index ${i} of element ${element}`)
        return element
    }
}
}
return console.log("please, Enter valid number")
}
//accessingElementByIndexValue()

function insertingElement(el,position){
let array=[2,4,5,6,8,9,12,15,17,20]
for (let i =array.length-1; i =>0 ; i--) {
    if (position<=array.length) {
        array[i+1]=array[i]
        if (i===position) {
            array[i]=el
            console.log(array)
            return array
        }
    }
    
}
}
//insertingElement(70,5)

function deletingElementByIndex(position){
let array=[2,4,5,6,8,9,12,15,17,20]
for (let i = position; i < array.length; i++) {
    array[i]=array[i+1]  
}
array.length=array.length-1
console.log(array)

}
//deletingElementByIndex(3)

function deletingElementByValue(val){
let array=[2,4,5,6,8,9,12,15,17,20]
    let index = array.indexOf(val);
    for (let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1];
    }
    array.length -= 1;
    console.log(array)
    }
//deletingElementByValue(5)

function searchingElement(el){
 let array=[2,4,5,6,8,9,12,15,17,20]  
 let index;
 for (let i = 0; i < array.length; i++) {
    if (el==array[i]) {
        index=i
        console.log(`Element is at Index ${index}`)
        break;
    }
    
 } 
}
//searchingElement(12)

function sortingAnArray(){
let array=[52,124,15,6,8,9,122,50,1,20]
for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < array.length; j++) {
    if (array[j]>array[j+1]) {
        let temp=array[j]
        array[j]=array[j+1]
        array[j+1]=temp
    }
   }
}
console.log(array)
}
//sortingAnArray()

function mergingArrays(){
let array1=[52,124,15,6,8,9,122,50,1,20]
let array2=[2,1,5,12,50,21]
let array3=[]
for (let i = 0; i < array1.length; i++) {
    array3[i]=array1[i]  
}
for (let i = 0; i < array2.length; i++) {
    array3[array1.length+i]=array2[i]  
}
console.log(array3)
}
//mergingArrays()

function mergingAndSortingArrays(){
let array1=[52,124,15,6,8,9,122,50,1,20]
let array2=[2,1,5,12,50,21]
let array=[]
for (let i = 0; i < array1.length; i++) {
    array[i]=array1[i]  
}
for (let i = 0; i < array2.length; i++) {
    array[array1.length+i]=array2[i]  
}
for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < array.length; j++) {
    if (array[j]>array[j+1]) {
        let temp=array[j]
        array[j]=array[j+1]
        array[j+1]=temp
    }
   }
}
console.log(array)
}
mergingAndSortingArrays()

