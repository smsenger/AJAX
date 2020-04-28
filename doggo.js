const button = document.getElementsByTagName("button") [0];
            button.onclick = function(event){
                button.textContent = "Generating Doggo";
                $.get('https://dog.ceo/api/breeds/image/random')
                    .then(function(data) {
                const image = document.createElement('img');
                // message property specific to this API -- can see it on home page, in Postman, and in console.log() can have more than one level of address: data.message.doggos.doggo3 if that was how the API structured data
                image.setAttribute("src", data.message);
                const imageDiv = document.getElementsByClassName("image")[0];
                imageDiv.innerHTML = "";
                imageDiv.appendChild(image);
                button.textContent = "Generate Doggo"
                }); };

const dropDown = document.getElementsByTagName("select")[0];

$.get(" https://dog.ceo/api/breeds/list")
    .then(function(data){
        dropDown.innerHTML = "";
        const breed = document.createElement("option");
        for(i = 0; i < data.message.length; i++) {
            breed.setAttribute('value', data.message[i]);
            dropDown.appendChild(breed);   
            dropDown.innerHTML =    
        }
    });

dropDown.addEventListener( 'change', function(){
    .get("/api/breed/{breed name}/images/random (replacing {breed name}");
})