
function saveLetter() {
    let letter = document.getElementById("letter").value;
    let date = document.getElementById("date").value;
    
    if (letter.trim() === "" || date === "") {
        alert("Please write a letter and select a date.");
        return;
    }

    // Save data to localStorage (can be modified to store in a database)
    localStorage.setItem("futureLetter", JSON.stringify({ letter, date }));

    document.getElementById("message").innerText = "Letter saved! You'll receive it on " + date;
}
