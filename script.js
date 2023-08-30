document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("authorization_code");
    const code = urlParams.get("code");

    const authCodeElement = document.getElementById("authCode");
    const codeElement = document.getElementById("code");
    const copyAuthCodeButton = document.getElementById("copyAuthCode");
    const copyCodeButton = document.getElementById("copyCode");

    authCodeElement.textContent = authCode;
    codeElement.textContent = code;

    copyAuthCodeButton.addEventListener("click", function() {
        copyToClipboard(authCode);
    });

    copyCodeButton.addEventListener("click", function() {
        copyToClipboard(code);
    });
});

function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
