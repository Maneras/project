/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createValidateCollection() {
    var collectionContainer = document.getElementById('loginForm');
    var validateCollection = {};
    for (var i = 0; i < collectionContainer.length - 1; i++) {
        var id = collectionContainer.elements[i].id;
        var inputText = collectionContainer.elements[i].value.toString().trim();
        validateCollection[id] = inputText;
    }
    console.log(validateCollection);
    return validateCollection;
}
function emptyValidation(validateCollection) {
    var count = 0;
    for (var id in validateCollection) {
        if (validateCollection[id] === "") {
            document.getElementById(id).style.background = "url('assets/images/login/" + id + "_white-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
            if (id === "password")
                document.getElementById(id).style.backgroundPositionX = "7%, 95%";
            else {
                document.getElementById(id).style.backgroundPositionX = "6%, 95%";
            }
            count++;
        }
    }
    if (count)
        return false;
    return true;
}
function passwordQuantityValidation(validateCollection){
    var count = 0;
    for (var id in validateCollection) {
        if (validateCollection[id].length < 6 && /password+/.test(id)) {
            document.getElementById(id).style.background =  "url('assets/images/login/" +id+"_white-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
            document.getElementById(id).style.backgroundPositionX = "7%, 95%";      
            count++;
        }else{
            document.getElementById(id).style.background =  "url('assets/images/login/" +id+"_white-edited.svg') no-repeat left,url('assets/images/login/correct-edited.svg') no-repeat right";
            document.getElementById(id).style.backgroundPositionX = "7%, 95%"; 
        }
    }
    if (count) {
        return false;
    }
    return true;
}

function emailFormatValidation(email=""){
    email = document.getElementById('email').value;
    if(/\w+\@(tippin\.com)/.test(email)){
        document.getElementById('email').style.background =  "url('assets/images/login/email_white-edited.svg') no-repeat left,url('assets/images/login/correct-edited.svg') no-repeat right";
        document.getElementById('email').style.backgroundPositionX = "6%, 95%";
        return true;
    }
    else{
        document.getElementById('email').style.background = "url('assets/images/login/email_white-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
        document.getElementById('email').style.backgroundPositionX = "6%, 95%";
        return false;
    }
}

function eventValidation(){
    var input = document.getElementsByTagName('input');
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("keydown", function (event) {
            if (event.key === "Tab") {
                //console.log('ok');
                emailFormatValidation();
            }
        } , false);
    }
}

function validation() {
    var validateCollection = createValidateCollection();
    return Boolean(passwordQuantityValidation(validateCollection)
              & emptyValidation(validateCollection)
              & emailFormatValidation());
}
window.addEventListener("load" , eventValidation() , false);





