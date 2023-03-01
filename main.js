const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");


function prev() {

    let inName = document.getElementById("inName").value;
    let inBirth = document.getElementById("inBirth").value;
    let inField = document.getElementById("inField").value;

    let inNum = document.getElementById("inNum").value;

    const name = document.getElementById("name");
    const birth = document.getElementById("birth");
    const fieldYear = document.getElementById("fieldYear");
    const num = document.getElementById("num");

    name.innerHTML = inName;
    birth.innerHTML = inBirth;
    fieldYear.innerHTML = inField;

    num.innerHTML = inNum;

    ctx.fillStyle = "#0000FF";
    ctx.fillRect(0, 0, 300, 56);


    // ctx.rect(0, 0, 300, 56);
    // ctx.drawImage(logo1, 3, 20, 50, 50);

    ctx.fillStyle = "#fff";

    ctx.fillText("Technoriti", 10, 25);
    ctx.font = "12px Arial";
    ctx.fillText("BCE Bhagalpur", 15, 45);
    ctx.drawImage(logo, 230, 3, 50, 50);
    ctx.fillStyle = "#000";




    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 56, 300, 366);

    ctx.fillStyle = "#000000";



    ctx.fillText("Name:-" + name.innerHTML, 110, 90);
    ctx.fillText("College Name:-" + birth.innerHTML, 110, 115);
    ctx.fillText("Event:-" + fieldYear.innerHTML, 110, 140);
    ctx.fillText("Designation- " + num.innerHTML, 110, 165);






    ctx.drawImage(image, 10, 65, 80, 110);
}

function loadImage(event) {
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
}

const download = document.getElementById("down");
download.addEventListener("click", function() {

    if (window.navigator.msSaveBlob) {

        window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
    } else {

        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = "Card.png";
        a.click();
        document.body.removeChild(a);
    }
});