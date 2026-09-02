function describeValue(x){
    let type=typeof x;
    let y;
    if(x){
        y="truthy";
    }else{
        y="falsy";
    }
    return type+"|"+y;
    
}

// Testing
console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue("0"));
console.log(describeValue(NaN));