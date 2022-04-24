if (link == null || link == "", content == null || content == "") {
    alert("Please enter all arguments");

}
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() { // We need to wrap the loop into an async function for this to work
    for (let i = 0; 1 < 40; i++) {
        const request = new XMLHttpRequest();
        var inputVal = document.getElementById("link").value;
        request.open("POST", inputVal);
        console.log('response.status: ', request.status);
        request.setRequestHeader('Content-type', 'application/json');
        var user = document.getElementById("username").value;
        var av = document.getElementById("avatar").value;
        var msg = document.getElementById("content").value;
        const params = {
            username: user,
            avatar_url: av,
            content: msg
        }
        request.send(JSON.stringify(params));
        await timer(30); // then the created Promise can be awaited
    }
}



function sendMessage() {
    load()
}