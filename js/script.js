let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');


searchBtn.addEventListener("click", (e) => {
    let userText = searchUser.value;
    if (userText != "") {
        // fetch api 
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                if (data.message = "Not found") {
                    // show alert 
                }
                else {
                    // show profile 
                }
            })

    }
    else {
        // clear profile 
    }
})