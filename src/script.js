var checkPassword2 = function() {
    if (document.getElementById("password1").value ==
      document.getElementById("password2").value) {
      document.getElementById("different-passwords").innerHTML = "";
    } else {
      document.getElementById("different-passwords").innerHTML = "Hasła różnią się od siebie!";
    }
}

var checkPassword1 = function() {
    checkPassword2();

    function checkByRegex(regex, section, info) {
        if (regex) {
            document.getElementById(section).innerHTML = info;
        } else {
            document.getElementById(section).innerHTML = "";
        }
    }

    let text = document.getElementById("password1").value;
    checkByRegex(!/[a-z]/.test(text), "small-letter", "Min. 1 mała litera");
    checkByRegex(!/[A-Z]/.test(text), "big-letter", "Min. 1 wielka litera");
    checkByRegex(!/[^A-Za-z0-9]/.test(text), "special-charakter", "Min. jeden znak specjalny");
    checkByRegex(text.length < 8, "to-short", "Za krótkie hasło. Min. 8 znaków");
}