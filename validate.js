/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createValidateCollection() {
    var collectionContainer = document.getElementById('form');
    var validateCollection = {};
    for (var i = 0; i < collectionContainer.length - 1; i++) {
        var id = collectionContainer.elements[i].id;
        var inputText = collectionContainer.elements[i].value.toString().trim();
        validateCollection[id] = inputText;
    }
    console.log(validateCollection);
    return validateCollection;
}

function emptyValidation(validateCollection,color) {
    var count = 0;
    for (var id in validateCollection) {
        if (validateCollection[id] === "") {
            document.getElementById(id).style.background = "url('assets/images/login/" + id.replace(/.*password.*/i,"password") + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
            if (/.*password.*/i.test(id)){
                document.getElementById(id).style.backgroundPositionX = "7%, 95%";
            }
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

function passwordQuantityValidation(validateCollection,color){
    var count = 0;
    for (var id in validateCollection) {
        if (validateCollection[id].length < 6 && /.*password.*/i.test(id)) {
            document.getElementById(id).style.background =  "url('assets/images/login/" +id.replace(/.*password.*/i,"password")+"_"+color+"-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
            document.getElementById(id).style.backgroundPositionX = "7%, 95%";      
            count++;
        }else if(/.*password.*/i.test(id)){
            document.getElementById(id).style.background =  "url('assets/images/login/" +id+"_"+color+"-edited.svg') no-repeat left,url('assets/images/login/correct-edited.svg') no-repeat right";
            document.getElementById(id).style.backgroundPositionX = "7%, 95%"; 
        }
    }
    if (count) {
        return false;
    }
    return true;
}

function emailFormatValidation(color,email=""){
    email = document.getElementById('email').value;
    if(/\w+\@(tippin\.com)/.test(email)){
        document.getElementById('email').style.background =  "url('assets/images/login/email_"+color+"-edited.svg') no-repeat left,url('assets/images/login/correct-edited.svg') no-repeat right";
        document.getElementById('email').style.backgroundPositionX = "6%, 95%";
        return true;
    }
    else{
        document.getElementById('email').style.background = "url('assets/images/login/email_"+color+"-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
        document.getElementById('email').style.backgroundPositionX = "6%, 95%";
        return false;
    }
}

function eventValidation(color) {
    var input = document.getElementsByTagName('input');
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("keydown", function (event) {
            if (event.key === "Tab") {
                //console.log('ok');
                if (this.value === "") {
                    document.getElementById(this.id).style.background = "url('assets/images/login/" + this.id.replace(/.*password.*/i, "password") + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
                    if (/.*password.*/i.test(this.id)) {
                        document.getElementById(this.id).style.backgroundPositionX = "7%, 95%";
                    } else {
                        document.getElementById(this.id).style.backgroundPositionX = "6%, 95%";
                    }
                }else{
                    switch (this.id) {
                        case 'name':
                            if(/([a-z])+/giu.test(this.value)){
                                document.getElementById(this.id).style.background = "url('assets/images/login/" + this.id + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/correct-edited.svg') no-repeat right";
                                document.getElementById(this.id).style.backgroundPositionX = "6%, 95%";
                            }else{
                                document.getElementById(this.id).style.background = "url('assets/images/login/" + this.id + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
                                document.getElementById(this.id).style.backgroundPositionX = "6%, 95%";
                            }
                            break;
                        case 'email':
                            emailFormatValidation(color);
                            break;
                        case 'phone':
                            if (/\d+/.test(this.value)) {
                                document.getElementById(this.id).style.background = "url('assets/images/login/" + this.id + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/correct-edited.svg') no-repeat right";
                                document.getElementById(this.id).style.backgroundPositionX = "6%, 95%";
                            }else{
                                document.getElementById(this.id).style.background = "url('assets/images/login/" + this.id + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
                                document.getElementById(this.id).style.backgroundPositionX = "6%, 95%";
                            }
                        case 'password':
                            if (/.*password.*/i.test(this.id) && this.value.length < 6) {
                                this.id = "password";
                                document.getElementById(this.id).style.background = "url('assets/images/login/" + this.id + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
                                document.getElementById(this.id).style.backgroundPositionX = "7%, 95%";
                            }                            
                            break;
                        case 'confirmPassword':
                            if (/.*password.*/i.test(this.id) && this.value.length < 6) {
                                document.getElementById('confirmPassword').style.background = "url('assets/images/login/" + this.id.replace(/.*password.*/i,'password') + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
                                document.getElementById('confirmPassword').style.backgroundPositionX = "7%, 95%";
                            }      
                            break;
                        default:
                            
                            break;
                    }
                }
//                if (this.id === "email") {
//                    emailFormatValidation(color);
//                } else {
//                    if (this.value !== "" && /.*password.*/i.test(this.id) && this.value.length < 6) {
//                        id = "password";
//                        document.getElementById(this.id).style.background = "url('assets/images/login/" + this.id + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
//                        document.getElementById(this.id).style.backgroundPositionX = "7%, 95%";
//                    }
//                    if (this.value === "") {
//                        document.getElementById(this.id).style.background = "url('assets/images/login/" + this.id.replace(/.*password/i, "password") + "_" + color + "-edited.svg') no-repeat left,url('assets/images/login/wrong-edited.svg') no-repeat right";
//                        if (/.*password.*/i.test(this.id)) {
//                            document.getElementById(this.id).style.backgroundPositionX = "7%, 95%";
//                        } else {
//                            document.getElementById(this.id).style.backgroundPositionX = "6%, 95%";
//                        }
//                    }
                }
        },false);
    }
}


function autoInputValidate(color){
    var input = document.getElementsByTagName('input');
    for (var i = 0; i < input.length; i++) {
        if(input[i].id === "email"){
            input[i].addEventListener('input' , function(event){
                if(/\w+\@(tippin\.com)/.test(this.value)){
                    document.getElementById(this.id).style.background =  "url('assets/images/login/email_"+color+"-edited.svg') no-repeat left,url('assets/images/login/correct-edited.svg') no-repeat right";
                    document.getElementById(this.id).style.backgroundPositionX = "6%, 95%";
                }
                else{
                    document.getElementById(this.id).style.background =  "url('assets/images/login/" +this.id+"_"+color+"-edited.svg') no-repeat left";
                    document.getElementById(this.id).style.backgroundPositionX = "6%"; 
                }
            },false);
        }
        else if(/.*password.*/i.test(input[i].id)){
            input[i].addEventListener('input', function(event){
                if (this.value.length > 6) {
                    document.getElementById(this.id).style.background =  "url('assets/images/login/" +this.id.replace(/.*password/i,"password")+"_"+color+"-edited.svg') no-repeat left,url('assets/images/login/correct-edited.svg') no-repeat right";
                    document.getElementById(this.id).style.backgroundPositionX = "7%, 95%";                                        
                }
                else{
                     document.getElementById(this.id).style.background =  "url('assets/images/login/" +this.id.replace(/.*password/i,"password")+"_"+color+"-edited.svg') no-repeat left";
                     document.getElementById(this.id).style.backgroundPositionX = "7%"; 
                }
            },false);
        }
        else{
            input[i].addEventListener('input',function(event){
                document.getElementById(this.id).style.background =  "url('assets/images/login/" +this.id+"_"+color+"-edited.svg') no-repeat left";
                document.getElementById(this.id).style.backgroundPositionX = "6%"; 
            },false);
        }
    }
 }

function validation() {
    var validateCollection = createValidateCollection();
    return Boolean(passwordQuantityValidation(validateCollection,color)
              & emailFormatValidation(color) 
              & emptyValidation(validateCollection,color));
}
switch (document.title) {
    case "Login":
        var color = "white";
        break;

    default:
        var color = "red";
        break;
}
autoInputValidate(color);
window.addEventListener("load" , eventValidation(color) , false);





