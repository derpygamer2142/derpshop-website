async function buttonStuff(e) {
    console.log(e.srcElement)
    const itemClicked = e.srcElement.querySelector("h3").innerText // this is a war crime that barely works
    const encodedItemClicked = encodeURIComponent(itemClicked)

    let url = `./offer?item=${encodedItemClicked}`
    console.log(url)
    window.location.replace(url);

}



function genItemElement(itemList,i,side) {
    let heldItem = document.createElement("button") // item button surrounding thing
    heldItem.style.borderRadius = "5px"
    if (side != null){
        heldItem.style.float = side
        heldItem.style.position = "relative"
        heldItem.style[side] = "10%"
    }

    let heldElement = document.createElement("img")
    heldElement.src = itemList[i].imagePath
    heldElement.alt = itemList[i].itemName
    heldElement.style.width = "55%"

    heldItem.appendChild(heldElement) // item image

    heldElement = document.createElement("h3")
    heldElement.textContent = itemList[i].itemName
    heldElement.id = "itemName"
    
    heldItem.appendChild(heldElement) // item name

    let heldElement2 = document.createElement("div")
    heldElement2.style.fontSize = "20px"

    heldElement = document.createElement("b")
    heldElement.textContent = "Asking value: "
    heldElement2.appendChild(heldElement) // first part of the cost

    heldElement = document.createElement("b")
    heldElement.textContent = itemList[i].cost
    heldElement.style.color = "darkgreen" // cost amount
    heldElement2.appendChild(heldElement)
    
    heldItem.appendChild(heldElement2)

    heldElement = document.createElement("p")
    heldElement.textContent = "Click to send an offer"
    heldItem.appendChild(heldElement)

    heldItem.addEventListener("click",buttonStuff)
    return heldItem
}

//button.addEventListener("click",buttonStuff)

let response = await fetch("./itemList.txt")
response = await response.text()
const itemList = JSON.parse(response)

const itemListElement = document.getElementById("itemList")


for (let i = 0; i < itemList.length; i++) {
    if ((i+1) < itemList.length) {
        // multiple of 2, can do a goup
        let heldGroupElement = document.createElement("div")
        heldGroupElement.appendChild(genItemElement(itemList,i,"left"))
        i++
        heldGroupElement.appendChild(genItemElement(itemList,i,"right"))
        let heldElement = document.createElement("div")
        heldElement.id = "spacer0"
        heldGroupElement.appendChild(heldElement)

        itemListElement.appendChild(heldGroupElement)

        heldElement = document.createElement("div")
        heldElement.id = "spacer1"
        itemListElement.appendChild(heldElement)

    }
    else {
        itemListElement.appendChild(genItemElement(itemList,i,null))
    }
}