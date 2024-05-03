function firstButton(){
    //Take button element
    const firstButton = document.getElementById("first-button")

    // Take mainsection element 
    const mainSectionElement = document.querySelector("main")

    //Take h1 element
    h1Element = document.getElementById("h1")

    firstButton.addEventListener("click", () => {
        const firstStepElement = document.getElementById("first-step")
        
        if (firstStepElement.style.display == "block") {
            firstStepElement.style.display = "none"
            // mainSectionElement.scrollIntoView({behavior: "smooth", duration: 5000})
        } else {
            firstStepElement.style.display = "block"
            // firstStepElement.scrollIntoView({behavior: "smooth", duration: 5000})
            scrollTo(firstStepElement, 5000)
        }

        firstStepElement.classList.add("first-step")
        
        
        console.log("okay");
    })


}