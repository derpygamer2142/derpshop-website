const bountyList = [
    {
        "itemName": "Efficiency 5 book",
        "bounty": "2 shop items, excluding gear kits",
        "imagePath": "/assets/Enchanted_Book.gif"
    },
    {
        "itemName": "1 Slimeball ",
        "bounty": "1 shop item, excluding gear kits",
        "imagePath": "/assets/slimeball.webp"
    }

] // i don't edit this by hand, whatever could you mean

const bountyListElement = document.getElementById("bountyList")

for (let i = 0; i < bountyList.length; i++) {
    if ((i+1) < bountyList.length) {
        let heldBountySection = document.createElement("div")
        let heldBounty = document.createElement("div")

        let heldElement = document.createElement("img")
        heldElement.src = bountyList[i].imagePath
        heldElement.style.width = "75%"
        heldBounty.appendChild(heldElement) // bounty image

        heldElement = document.createElement("div")
        heldElement.id = "spacer1"
        heldBounty.appendChild(heldElement) // spacer

        heldElement = document.createElement("p") 
        heldElement.textContent = bountyList[i].itemName // item name
        heldBounty.appendChild(heldElement)

        heldElement = document.createElement("p")
        let heldElement2 = document.createElement("b")
        heldElement2.innerText = `Bounty: ${bountyList[i].bounty}`
        heldElement.appendChild(heldElement2)
        heldBounty.appendChild(heldElement)

        heldBounty.style.outline = "4px solid #919191"
        heldBounty.style.borderRadius = "2rem"
        heldBounty.style.float = "left"
        heldBounty.style.position = "relative"
        heldBounty.style.left = "10%"

        heldBountySection.appendChild(heldBounty)
        

        // there is most definitely an easier way to do this than copying and pasting the code, but i can't be bothered doing anything else
        i++


        heldBounty = document.createElement("div")

        heldElement = document.createElement("img")
        heldElement.src = bountyList[i].imagePath
        heldElement.style.width = "75%"
        heldBounty.appendChild(heldElement) // bounty image

        heldElement = document.createElement("div")
        heldElement.id = "spacer1"
        heldBounty.appendChild(heldElement) // spacer

        heldElement = document.createElement("p") 
        heldElement.textContent = bountyList[i].itemName // item name
        heldBounty.appendChild(heldElement)

        heldElement = document.createElement("p")
        heldElement2 = document.createElement("b")
        heldElement2.innerText = `Bounty: ${bountyList[i].bounty}`
        heldElement.appendChild(heldElement2)
        heldBounty.appendChild(heldElement)

        heldBounty.style.outline = "4px solid #919191"
        heldBounty.style.borderRadius = "2rem"
        heldBounty.style.float = "right"
        heldBounty.style.position = "relative"
        heldBounty.style.right = "10%"

        heldBountySection.appendChild(heldBounty)

        heldElement = document.createElement("div")
        heldElement.id = "spacer0"
        heldBountySection.appendChild(heldElement)



        bountyListElement.appendChild(heldBountySection)
        
        heldElement = document.createElement("div")
        heldElement.id = "spacer1"
        bountyListElement.appendChild(heldElement)
    }

    else {
        console.log(i)
        let heldBountySection = document.createElement("div")
        let heldBounty = document.createElement("div")

        let heldElement = document.createElement("img")
        heldElement.src = bountyList[i].imagePath
        heldElement.style.width = "75%"
        heldBounty.appendChild(heldElement) // bounty image

        heldElement = document.createElement("div")
        heldElement.id = "spacer1"
        heldBounty.appendChild(heldElement) // spacer

        heldElement = document.createElement("p") 
        heldElement.textContent = bountyList[i].itemName // item name
        heldBounty.appendChild(heldElement)

        heldElement = document.createElement("p")
        let heldElement2 = document.createElement("b")
        heldElement2.innerText = `Bounty: ${bountyList[i].bounty}`
        heldElement.appendChild(heldElement2)
        heldBounty.appendChild(heldElement)

        heldBounty.style.outline = "4px solid #919191"
        heldBounty.style.borderRadius = "2rem"
        heldBounty.style.float = "left"
        heldBounty.style.position = "relative"
        heldBounty.style.left = "38%" // this isn't center aligned lol

        heldBountySection.appendChild(heldBounty)

        heldElement = document.createElement("div")
        heldElement.id = "spacer0"
        heldBountySection.appendChild(heldElement)


        bountyListElement.appendChild(heldBountySection)
        
        heldElement = document.createElement("div")
        heldElement.id = "spacer1"
        bountyListElement.appendChild(heldElement)
    }
}