function describeValue(x){
    let type=typeof x;
    let y;
    if(x){
        y="truthy";
    }else{
        y="falsy";
    }
    return type+"|"+y;
    console.log(type+"|"+y);
}