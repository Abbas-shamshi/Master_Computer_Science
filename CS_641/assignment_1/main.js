var flag = true;

function Click() {
    let image = document.getElementById("image");
    let body = document.getElementById("abc");
    body.className = "abc";

    // image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png";
    image.style.transform += 'rotate(20deg)';
    let div = document.getElementById("a");
    div.innerHTML = "<img src='https://www.iconninja.com/files/456/900/977/browser-internet-explorer-icon.svg'>";

    let cssRef = document.getElementById("cssAddr");
    // cssRef.href="a.css";

}

function darkMode() {
    console.log("Hello Abbas")
    var rValue = document.getElementsByName("theme");
    var length = rValue.length;
    console.log(rValue);
    var button = document.getElementById("button");
    var header = document.getElementById("header");
    var headertext = document.getElementById("headertext")


    var checkedValue;
    for (var i = 0; i < length; i++) {
        if (rValue[i].checked) {
            checkedValue = rValue[i].value;
            console.log(checkedValue);

        }
    }
    if (checkedValue == "Light") {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        button.className="button"
        header.style.backgroundColor="rebeccapurple"
        headertext.className="headerText"

        console.log("red");

    } else {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        button.className="buttonDark"
        header.style.backgroundColor="grey"
        headertext.className="headerTextDark"

        console.log("green");

    }
    document.getElementById("print").innerHTML = checkedValue;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function rotateImage(browser) {
    let firefox = document.getElementById("firefox");
    let chrome = document.getElementById("chrome");
    let edge = document.getElementById("edge");


    console.log(browser);

    switch (browser) {
        case 'firefox':
            console.log("this is firefox browser");
            for (var i = 0; i < 18; i++) {
                await sleep(100);
                firefox.style.transform += 'rotate(20deg)';
                console.log("Hello there")
            }
            break;

        case 'chrome':
            console.log("this is chrome browser");
            for (var i = 0; i < 18; i++) {
                await sleep(300);
                chrome.style.transform += 'rotate(20deg)';
                console.log("Hello there")
            }
            break;

        case 'edge':
            console.log("this is edge browser");
            for (var i = 0; i < 18; i++) {
                await sleep(500);
                edge.style.transform += 'rotate(20deg)';
                console.log("Hello there")
            }
            break;

    }




    

}
function displayVideo(){
    var browserContent= document.getElementById("browserContent");
    var videoContent= document.getElementById("videoContent");
    


    if(flag){
        browserContent.style.display="none";
        videoContent.style.display="flex"

        flag=false;

    }else{
        videoContent.style.display="none"
        browserContent.style.display="flex";

        flag=true;
    }


}