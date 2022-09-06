function recursion(thing,num,other){
  if(num)
    return thing(recursion(thing,num-1));
  else 
    return num
}
