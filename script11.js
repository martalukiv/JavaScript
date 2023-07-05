function operation (number, number2, a) {
  if (a==`+`) {
    return number + number2;
  }
  if (a==`-`) {
    return number - number2;
  }
  if (a==`*`) {
    return number * number2;
  }
  if (a==`/`) {
    return number / number2;
  }

}

operation(2,3,`+`)
operation(10,3,`-`) 
operation(4,3,`*`) 
operation(10,2,`/`) 


 
 