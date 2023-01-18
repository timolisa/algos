function spinWords(string){
    const strArray = string.split(" ");
    return strArray.map(element => {
      const length = element.length;
      if (length >= 5) {
        let reverseStr = "";
        for (let i = length - 1; i >= 0; i--) {
          reverseStr += element[i]
        }
        return reverseStr;
      } else {
        return element;
      }
    }).join(" ");
  }

  // for words greater than or equals to 5 it reverses their order.

//   spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 