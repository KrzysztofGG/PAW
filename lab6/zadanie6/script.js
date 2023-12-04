const showBtn = document.getElementById('show');
showBtn.addEventListener('click', showPassw);

const showRepeatBtn = document.getElementById('show-re');
showRepeatBtn.addEventListener('click', showRepeatPass);

let pwdInput = document.getElementById('password');
pwdInput.addEventListener('input', checkConditions);

let rePwdInput = document.getElementById('re-password');

rePwdInput.addEventListener('keyup', ({key}) =>{
    if (key === "Enter"){
        comparePwds();
    }
})

function showPassw(){
    showText(showBtn, 'password', showPassw, hidePassw)
}
function hidePassw(){
    hideText(showBtn, 'password', showPassw, hidePassw)
}
function showRepeatPass(){
    showText(showRepeatBtn, 're-password', showRepeatPass, hideRepeatPassw);
}
function hideRepeatPassw(){
    hideText(showRepeatBtn, 're-password', showRepeatPass, hideRepeatPassw);
}

function showText(btn, id, showFun, hideFun){
    btn.innerHTML = '<img src="eye_not_visible.png">'
    input = document.getElementById(id);
    input.setAttribute('type', 'text');

    btn.removeEventListener('click', showFun);
    btn.addEventListener('click', hideFun);
}

function hideText(btn, id, showFun, hideFun){
    btn.innerHTML = '<img src="eye_open.png">';
    input = document.getElementById(id);
    input.setAttribute('type', 'password');

    btn.removeEventListener('click', hideFun);
    btn.addEventListener('click', showFun);
}

function comparePwds(){
    identity = document.getElementById('identity');
    identity.style.visibility = "visible";
    pwd = document.getElementById('password');
    pwdRe = document.getElementById('re-password');

    if (pwd.value === pwdRe.value){
        identity.innerHTML = "Passwords are equal";
        identity.style.color = "green";
    }
    else{
        identity.innerHTML = "Passwords not equal";
        identity.style.color = "red";
    }
}
function hasSpecial(password) {
    const specials = "!@#$%^&*/?"

    for (const char of password)
        if (specials.includes(char))
            return true
    
    return false
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase()
}

function isUpper(c) {
    return isLetter(c) && c.toUpperCase() == c
}

function hasCapital(password) {
    const specials = "!@#$%^&*/?"

    for (const char of password)
        if ( isUpper(char) )
            return true
    
    return false
}

function toAsci(c) {
    return c.charCodeAt(0)
} 
function isNumeric(c) {
    return toAsci(c) >= toAsci('0') && toAsci(c) <= toAsci('9')
}

function hasDigit(str) {
    for (const char of str)
    if ( isNumeric(char) )
        return true
    return false
}

function updateCondition(id, isValid){

    condition = document.getElementById(id);
    img = condition.children[0];
    condition.style.display = "block";
    if (isValid)
        img.src = "ok.png";
    else
        img.src = "wrong.png";

}

function checkConditions() {

    let val = this.value;

    if (val.length >= 8)
        updateCondition("length", true)
    else
        updateCondition("length", false)

    if (hasSpecial(val))
        updateCondition("has-special", true)
    else
        updateCondition("has-special", false)

    if (hasCapital(val))
        updateCondition("has-capital", true)
    else
        updateCondition("has-capital", false)

    if (hasDigit(val))
        updateCondition("has-digit", true)
    else
        updateCondition("has-digit", false)

}