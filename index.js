function initPage() {

    let state = {
        rover: "",
        sol: 0
    }

    document.getElementById("rover-selector").addEventListener("change", (event) => {
        state.rover = event.target.value;
    });

    document.getElementById("sol-input").addEventListener("input", (event) => {
        state.sol = event.target.value;
    });

    document.getElementById("button_load").addEventListener("click", (event) => {
        const photosBlock = document.getElementById("photos_block");
        Array.from(photosBlock.children).forEach((el) => {el.remove();});
        console.log(state);
        loadImage(state.rover, state.sol)
        .then((value) => {
            const {photos} = value;
            
            for (const photo of photos) {
                let img = document.createElement("img");
                img.alt = "Фото с марса";
                img.src = photo.img_src;
                photosBlock.appendChild(img);
            }
        })
        .catch((error) => {
            console.warn(error.message);
        });
        event.preventDefault();
    });
}

async function loadImage(rover, sol) {
    const responce = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=DEMO_KEY`);

    if (responce.status === 200) {
        return responce.json();
    } else {
        throw new Error("Не удалось загрущить картинку!");
    }
    return {photos:[]};
}

initPage();