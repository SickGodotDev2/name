function recursion(thing,num,other){
  if(num)
    return thing(recursion(thing,num-1));
  else 
    return num
}

setInterval(console.log(recursion(number=>Math.round(Math.random()*number),1000,1000),1000)
