let Name = document.getElementById('name');
let Email = document.getElementById('email');
let Password = document.getElementById('password');
let Confirm = document.getElementById('confirm');
/* ---------------------------------------- */
let spanName = document.getElementById('spanName');
let spanEmail = document.getElementById('spanEmail');
let spanPassword = document.getElementById('spanPassword');
let spanConfirm = document.getElementById('spanConfirm');
/* ---------------------------------------- */
let login = document.getElementById('login');
/* ---------------Regex------------------------- */
let NameRegex = /^[a-zA-Z]/;
let EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let PasswordRegex = /^[a-zA-Z0-9]{6,}$/;
/* -------------------test regex--------------------- */

login.addEventListener('click', function() {
    if (NameRegex.test(Name.value) == false) {
        spanName.innerHTML = 'Name must be at least 3 characters';
        login.style.backgroundColor = 'grey';
    } else {
        spanName.innerHTML = '';
    }
    if (EmailRegex.test(Email.value) == false) {
        spanEmail.innerHTML = 'Email must be valid';
        login.style.backgroundColor = 'grey';
    } else {
        spanEmail.innerHTML = '';
    }
    if (PasswordRegex.test(Password.value) == false) {
        spanPassword.innerHTML = 'Password must be at least 6 characters';
        login.style.backgroundColor = 'grey';
    } else {
        spanPassword.innerHTML = '';
    }
    if ((Confirm.value !=Password.value) ) {
        spanConfirm.innerHTML = 'Passwords do not match';
        login.style.backgroundColor = 'grey';
    } else {
        spanConfirm.innerHTML = '';
    }
    if (NameRegex.test(Name.value) && EmailRegex.test(Email.value) && PasswordRegex.test(Password.value) && (Confirm.value == Password.value)) {
        savecookie('Myuser',Name.value);
        window.open('../Mainhtml/page2.html');
    }
});
/* ----------------cookies------------------ */
function savecookie(key,value) {
    document.cookie = key + '=' + value+';path=/';
}
localStorage.removeItem('cart');

