
// first function

function firstLast6(arr){
    var blah = "";
    if(arr[arr.length -1] == 6 || arr[0] == 6){
        blah = true;
    }else{
        blah = false;
    }
    return blah;

}


//second

function has23(arr){
    var val = "";
    val = false;
    if(arr[0] == 2 || arr[0] == 3){
        val = true;
    }
    if(arr[1] == 2 || arr[1] == 3){
        val = true;
    }
    return val;
}





// third

function fix23(arr){
    if(arr[0] == 2 && arr[1] == 3){
        arr[1] = 0;
    }
    if(arr[1] == 2 && arr[2] == 3){
        arr[2] = 0;
    }
    return arr;
}




//fourth

function countYZ(str){
    var count = 0;
    str = str.toLowerCase();
    for(var i = 0; i < str.length; i++){
        if(str[i] == " " && str[i - 1] == "z"){
            count = count + 1;
        }
        if(str[i] == " " && str[i -1] == "y"){
            count = count + 1;
        }
    }
    if(str[str.length - 1] == "y" || str[str.length -1] == "z"){
        count = count + 1;
    }
    return count;
}



//fifth

function endOther(strOne, strTwo){
    var a = strOne.toLowerCase();
    var b = strTwo.toLowerCase();
    var n = a.endsWith(b);
    var k = b.endsWith(a);
    return n || k;
}



//sixth

function starOut(str){
    var newS = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] != "*" && str[i +1] != "*" && str[i - 1] != "*"){
            newS = newS + str[i];
        }
    }
    return newS;

}



//seventh

function getSandwich(str){
    var mid = "";
    var first = str.indexOf("bread")
    var last = str.lastIndexOf("bread")
    mid = str.substring(first + 5, last);
    if(first == last){
        mid = "";
    }
    return mid;
}


//eight

function canBalance(arr){
    var outSum = 0;
    var inSum = 0;
    for(var i = 0; i < arr.length; i++) {
        outSum += arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            inSum += arr[j]
        }
        if(outSum == inSum) {
            return true;
        }
        inSum = 0;
    }

    return false;
}



//nine

function countClumps(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1] && arr[i] == arr[i -1]){
            count += 1;
        }
    }
    return count;
}




//last and tenth

function evenlySpaced(a, b, c){
    var res = "";
    if(a - b == b - c || a - b == c - b || b - a == b - c || c-a == a-c || a-c == c-b || b-a == a-c){
        res = true;
    }else{
        res = false;
    }
    return res;
}






function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += endOther(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    document.getElementById("output").innerHTML += getSandwich(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    document.getElementById("output").innerHTML += canBalance(true, false);
    document.getElementById("output").innerHTML += countClumps(true, false);
    document.getElementById("output").innerHTML += evenlySpaced(true, false);


}


