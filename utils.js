// Presentation layer



export function copyidentity() {
    var copyText = document.getElementById("identity");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

export function copysecret() {
    var copyText = document.getElementById("secret");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

export function copydomain() {
    var copyText = document.getElementById("domain");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

export function ShowHide() {
    var x = document.getElementById("secret");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}