const STYLES = `img {width:15vw; height: 30vh; margin:5px; cursor:pointer; }
                        body {text-align: center; padding: 0 20vh;}
                        button {display:block; margin:auto}
                        .active {width:60%;height:100%; margin:auto; display:block}
                        .notActive {display:none;}`
const ADDRESS = "https://img.manga24.ru/Content/pages/berserk/378/00"
addElementsToDOM();

function addElementsToDOM() {
    let styleSheet = document.createElement("style")
    let bt = document.createElement("button");
    styleSheet.innerText = STYLES
    bt.addEventListener("click", shuffle);
    bt.innerText = "SHUFFLE"
    document.head.appendChild(styleSheet)
    document.body.append(bt)
    insertImagesToDOM(fillArrayWithLinks(ADDRESS))
}

function shuffle() {
    let tempArr = Array.from(document.getElementsByTagName("IMG"))
    let newArr = [];
    while (tempArr.length !== 0) {
        if (Math.round(Math.random())) {
            if (Math.round(Math.random())) {
                newArr.push(tempArr.shift().src)
            } else {
                newArr.unshift(tempArr.pop().src)
            }
        } else {
            if (Math.round(Math.random())) {
                newArr.unshift(tempArr.shift().src)
            } else {
                newArr.push(tempArr.pop().src)

            }
        }
    }
    let images = document.getElementsByTagName("IMG");
    for (let i = 0; i < images.length; i++) {
        images[i].src = newArr[i]
    }
}

function fillArrayWithLinks(url) {
    let newArray = [];
    for (let i = 0; i < 20; i++) {
        if (i === 10) {
            url = url.slice(0, -1)
        }
        newArray.push(url + i + ".png")
    }
    return newArray
}

function insertImagesToDOM(arr) {
    let newArr = []
    arr.forEach((el) => {
        let img = document.createElement("img");
        img.src = el;
        if (img.width !== 0) {
            img.addEventListener("click", eventOnClick())
            document.body.append(img)
            newArr.push(el)
        }
    })
    return newArr;
}

function eventOnClick() {
    let count = 0;
    return (event) => {
        let el = document.elementFromPoint(event.clientX, event.clientY)
        if (el.className === "active") {
            count++;
            el.className = "notActive";
            el = el.nextSibling;
            el.className = "active"
        } else {
            count = 0;
            el.className = "active"
        }
        if (count === 0) {
            setClassNameToAllImages("notActive")
            el.className = "active"
        }
        if (el.tagName !== "IMG") {
            setClassNameToAllImages("")
            count = 0;
            console.log(el.tagName, count)

        }
    }
}

function setClassNameToAllImages(className) {
    let images = document.getElementsByTagName("IMG");
    for (let i = 0; i < images.length; i++) {
        images[i].className = className
    }
}