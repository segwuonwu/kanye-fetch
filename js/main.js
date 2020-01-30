document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        // prevent default html from action
        e.preventDefault();

        // storing the api in a veriable
        let requestAPI = "https://api.kanye.rest";

        //requesting a fetch
        fetch(requestAPI)
            .then(function(respondData) {
                let quotes = respondData.json();
                console.log(quotes);
                return quotes;
            })
            .then(function(display) {
                //displaying the quotes
                let result = display.quote;
                let pTag = document.createElement("p");
                pTag.append(result);
                let div = document.getElementById("result");
                div.appendChild(pTag);

                //removing qoutes after a click
                if (div.hasChildNodes()) {
                    div.removeChild(div.childNodes[0]);
                }
                //displaying the next image
                div.appendChild(pTag);
            })

    });
})