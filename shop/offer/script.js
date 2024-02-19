async function buttonStuff() {
    const form = new FormData()
    form.append("content","uhhhh")
    const response = await fetch("https://discord.com/api/webhooks/1208875958157705237/vih84fRSS-lhSjwDlAsgKmGpIlS4W3uYy_2Un2eZkaBVLWZ_IbtvMOmxsprDiMKY2Wr4",{
        "method": "POST",
        "mode": "cors",
        "cache": "no-cache",
        "credentials": "same-origin",
        "headers": {
            "Content-Type": "application/json",
          },
        "body": JSON.stringify({
            "content": "uhhhh"
        })

    })
    let data = await response.text();
    console.log(`Request responded with \"${data}\"`)
    console.log("click")

}