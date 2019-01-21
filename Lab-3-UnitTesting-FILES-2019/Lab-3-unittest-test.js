//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.


function test__checkHumbrId(valueIn,expected){
	//"use strict";
	let result = checkHumbrId(valueIn);
    let messagebox = document.getElementById("data");


    let msg ="";
	if (result === expected){

	msg = "Value tested: "+ valueIn + " Expected result: " + expected + "<span style=\"color:green\">" + " ==PASSED== </span><br/>";
    messagebox.innerHTML += msg;

	} else{

	msg = "Value tested: "+ valueIn + " Expected result: " + expected + "<span style=\"color:red\">"+" xxFAILEDxx</span><br/>";
    messagebox.innerHTML += msg;


	}
    

    

}


test__checkHumbrId("n01269796",true);//test to pass
test__checkHumbrId(01269796,false);//test to fail
test__checkHumbrId("a01269796",false);//test to fail
test__checkHumbrId("A01269796",false);//test to pass
test__checkHumbrId("N01269796",true);//test to fail
test__checkHumbrId("N01269",false);//test to fail
test__checkHumbrId("N012697969898",false);//test to pass

