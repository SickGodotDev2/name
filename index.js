function recursion(thing,num,other){
  if(num)
    return thing(recursion(thing,num-1,other));
  else 
    return other
}

setInterval(document.write(recursion(number=>Math.round(Math.random()*number),1000,1000),1000)
