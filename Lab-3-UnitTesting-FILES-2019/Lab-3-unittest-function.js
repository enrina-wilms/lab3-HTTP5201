//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
 var pattern = /^(n|N)[0-9]{8}$/;
function checkHumbrId(valueIn){
    let validId = false;
    if (isNaN(valueIn) && pattern.test(valueIn)){
          validId = true;
    }   
    else{
        validId = false;

    }

    return validId;
  
}

