document.addEventListener("click", getElementInfo);
getAllInfo()


function getAllInfo() {
    const doc = document.getElementsByTagName("DIV")
    console.log("Number of categories:", doc.length)
    Array.from(doc).forEach((el) => {
        console.log("---")
        let arr = el.innerText.split("\n")
        console.log("Category:", arr.shift())
        arr.sort((a, b) => b.length - a.length);
        console.log("Elements:", arr.length)
        console.log("Longest Element:", arr[0])
    })
}

function getElementInfo(event) {
    let element = document.elementFromPoint(event.clientX, event.clientY)
    switch (element.tagName) {
        case "LI": {
            element = element.parentElement.parentElement;

            break;
        }
        case "H2": {
            element = element.parentElement;
            break;
        }
        case "UL": {
            element = element.parentElement;
            break;
        }
        case "SECTION":
            alert("you need to select element")
            return
    }
    let arr = []
    Array.from(element.getElementsByTagName("LI")).forEach((el) => {
        arr.push(el.textContent)
    })
    arr.sort((a, b) => b.length - a.length);
    console.log("---")
    console.log("Category:", element.getElementsByTagName("h2")[0].innerText)
    console.log("Elements:", element.getElementsByTagName("li").length)
    console.log("Longest Element:", arr[0])
}