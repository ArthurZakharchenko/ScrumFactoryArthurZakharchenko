"use strict";
var MyArray = [1, 2, 3, 4, 5];
function array(MyArray) {
  for (var i = 0; i < MyArray.length; i++) {
		print('MyArray' + '[' + i + '] : ' + MyArray[i]);
	}
}
array(MyArray);