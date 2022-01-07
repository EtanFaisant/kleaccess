// Presentation layer


// Copier le nom du site
export function copysitename() {
    var copyText = document.getElementById("sitename");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
// Copier l'identifient
export function copyidentity() {
    var copyText = document.getElementById("identity");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
// Copier le mot de passe
export function copysecret() {
    var copyText = document.getElementById("secret");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
// Copier le nom de dommaine
export function copydomain() {
    var copyText = document.getElementById("domain");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
// Afficher ou Cacher le mot de passe
export function ShowHide() {
    var x = document.getElementById("secret");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


// Fonction géneration de mot de passe aléatoire
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * symbol.length)];
}
const randomFunc = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
export function randompassword(upper = true, lower = true, number = true, symbol = true, length = 16) {
    let randompassword = "";

    const typesCount = upper + lower + number + symbol;

    //console.log(typesCount);

    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            randompassword += randomFunc[funcName]();
        });
    }

    const finalPassword = randompassword.slice(0, length);


    // return finalPassword;
    document.getElementById("secret").value = finalPassword;
}
