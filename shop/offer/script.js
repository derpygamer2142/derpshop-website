const form = document.getElementById("inputStuff")


async function buttonStuff() {
    let username = document.getElementById("usernameInput").value
    let offer = document.getElementById("offerInput").value
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('item');
    let item = decodeURIComponent(myParam)
    console.log("button clicked")
    const response = await fetch("https://discord.com/api/webhooks/1208875958157705237/vih84fRSS-lhSjwDlAsgKmGpIlS4W3uYy_2Un2eZkaBVLWZ_IbtvMOmxsprDiMKY2Wr4",{
        "method": "POST",
        "mode": "cors",
        "cache": "no-cache",
        "credentials": "same-origin",
        "headers": {
            "Content-Type": "application/json",
          },
        "body": JSON.stringify({
            "content": `<@816743268707860511> \"${username}\" is offering the following for **\"${item}\"**:\n${offer}`,
            "username": "Offer bot",
            "allowed_mentions": {
                "parse": ["everyone"],
                "users": ["816743268707860511"]
              }
        })

    })
    let data = await response.text();
    console.log(`Request responded with \"${data}\"`)
    console.log("click")

}

const button = document.getElementById("submitButton")
button.addEventListener("click",buttonStuff)