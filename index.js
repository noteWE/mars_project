function initPage() {

    document.getElementById("button_load").onclick = () => {
        document.getElementById("img_src").src = null;
    };
}

function loadImage(rover, sol) {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/${rover}/curiosity/photos?sol=${sol}&api_key=DEMO_KEY`)
}