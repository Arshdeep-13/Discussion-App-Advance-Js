// Get references to DOM elements
let SubmitButton = document.getElementById("formSubmit");
let responseSubmit = document.querySelector("#responseSubmit");
let resolveButton = document.querySelector("#resolve");

// Event listener for the "Submit" button in the right panel
SubmitButton.addEventListener("click", async () => {
    // Get form data
    let formData = document.getElementById("formData");
    let RightTitle = document.getElementById("subject").value;
    let RightText = document.getElementById("Question").value;

    // Create elements and set their content
    let leftTitle = document.createElement("h1");
    leftTitle.setAttribute("id", "leftTitle");
    let leftText = document.createElement("p");
    leftText.setAttribute("id", "leftText");
    let hr = document.createElement("hr");
    leftTitle.innerText = RightTitle;
    leftText.innerText = RightText;

    // Create a new space div and append elements to it
    let newSpaceDiv = document.createElement("div");
    newSpaceDiv.style.cursor = "pointer";
    newSpaceDiv.appendChild(leftTitle);
    newSpaceDiv.appendChild(leftText);
    newSpaceDiv.appendChild(hr);

    // Append the new space div to the left panel
    let leftSpace = document.querySelector(".space");
    leftSpace.appendChild(newSpaceDiv);

    // Add an event listener to the new space div
    newSpaceDiv.addEventListener("click", () => {
        let interactiveDiv = document.querySelector(".interactiveDiv");
        let normalDiv = document.querySelector(".normalDiv");
        interactiveDiv.style.display = "block";
        normalDiv.style.display = "none";

        // Update question title and text in the interactive div
        let questionTitle = document.querySelector("#questionTitle");
        let questionText = document.querySelector("#questionText");
        questionTitle.innerText = newSpaceDiv.querySelector("#leftTitle").textContent;
        questionText.innerText = newSpaceDiv.querySelector("#leftText").textContent;
    });

    // logic for resolve button
    resolveButton.addEventListener("click", () => {
        let innerDiv = document.querySelector(".inner");
        innerDiv.remove();
        leftSpace.removeChild(newSpaceDiv);
    })
});

// Event listener for the "Submit" button in the response form
responseSubmit.addEventListener("click", () => {
    let responseName = document.getElementById("responseName").value;
    let responseComment = document.getElementById("responseQuestion").value;

    // Create elements and set their content
    let responseTitle = document.createElement("h1");
    responseTitle.setAttribute("id", "responseTitle");
    let responseText = document.createElement("p");
    responseText.setAttribute("id", "responseText");
    let hr = document.createElement("hr");
    responseTitle.innerText = responseName;
    responseText.innerText = responseComment;

    // Create a new space div and append elements to it
    let newSpaceDiv = document.createElement("div");
    newSpaceDiv.style.cursor = "pointer";
    newSpaceDiv.appendChild(responseTitle);
    newSpaceDiv.appendChild(responseText);
    newSpaceDiv.appendChild(hr);

    // Append the new space div to the left panel
    let responsediv = document.querySelector(".DivCollection");
    responsediv.appendChild(newSpaceDiv);
});

