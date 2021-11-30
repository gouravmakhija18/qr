
let btn = document.querySelector(".button");

btn.addEventListener("click", () => {
    let input_url = document.querySelector("#url");
    if(document.querySelector(".qr-code").childElementCount == 0){
        generate(input_url);
    } else{
        document.querySelector(".qr-code").innerHTML = "";
        generate(input_url);
    }
})

function generate(input_url){

    document.querySelector(".qr-code").style = "";

    var qrcode = new QRCode(document.querySelector(".qr-code"), {
        text: `${input_url.value}`,
        width: 180, //128
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    console.log(qrcode);

    let download = document.createElement("button");
    document.querySelector(".qr-code").appendChild(download);

    let download_link = document.createElement("a");
    download_link.setAttribute("download", "qr_code_linq.png");
    download_link.innerText = "Download";

    download.appendChild(download_link);

    if(document.querySelector(".qr-code img").getAttribute("src") == null){
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector(".qr-code img").getAttribute("src")}`);
        }, 300);
    }

}