// Get references to DOM elements
let SubmitButton = document.getElementById("formSubmit");
let responseSubmit = document.querySelector("#responseSubmit");
let resolveButton = document.querySelector("#resolve");
let newFormButton = document.querySelector(".buttons-nav");
let normalDiv = document.querySelector(".normalDiv");
let interactiveDiv = document.querySelector(".interactiveDiv");
let leftSpaceDiv = document.querySelector(".space");
let searchBar = document.querySelector("#question_search");
let spaceh2 = document.querySelector("#spaceh2")
let input1 = document.getElementById("subject");
let text1 = document.getElementById("Question");

// Event listener for the "Submit" button in the right panel
SubmitButton.addEventListener("click", () => {
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
        // upvote and downvote logic
        let upvote = document.querySelector("#upvote");
        let downvote = document.querySelector("#downvote");
        let up = 1, down = 1;
        upvote.addEventListener("click", () => {
            upvote.innerHTML = '<i class="fa-solid fa-thumbs-up">';
            upvote.innerHTML += '&nbsp';
            upvote.innerHTML += up++;
        })
        downvote.addEventListener("click", (e) => {
            downvote.innerHTML = '<i class="fa-solid fa-thumbs-down">';
            downvote.innerHTML += '&nbsp';
            downvote.innerHTML += down++;
        })
    });

    // logic for resolve button
    resolveButton.addEventListener("click", () => {
        let innerDiv = document.querySelector(".inner");
        innerDiv.remove();
        leftSpace.removeChild(newSpaceDiv);
        upvote.innerHTML = 'UpVote';
        downvote.innerHTML = 'DownVote';
        up = 1, down = 1;
    })

    // // clear the input fields
    // leftTitle.innerText = "";
    // leftText.innerText = "";
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

    // // clear the input div's
    // responseTitle.innerText = "";
    // responseText.innerText = "";
});

// functionalities to render new form from left pannel
newFormButton.firstElementChild.addEventListener("click", () => {
    interactiveDiv.style.display = "none";
    normalDiv.style.display = "block";
})

// functionalities for the search bar input
searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();

    // Loop through the questions and filter based on the search term
    let count = 0;
    Array.from(leftSpaceDiv.children).forEach((questionDiv, index) => {
        const questionTitleElement = questionDiv.querySelector("h1");

        // Check if questionTitleElement is not null before accessing textContent
        if (questionTitleElement) {
            const questionTitle = questionTitleElement.textContent.toLowerCase();
            const matchFound = questionTitle.includes(searchTerm);

            // Toggle the display property based on the match
            questionDiv.style.display = matchFound ? "block" : "none";
            if (matchFound) {
                count++;
            }
        }
    });

    // Check if no matches were found and show/hide spaceh2 accordingly
    if (count === 0) {
        spaceh2.style.display = "block";
    } else {
        spaceh2.style.display = "none";
    }
});



