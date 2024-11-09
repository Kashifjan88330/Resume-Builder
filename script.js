// Get the button and the skills section
var toggleButton = document.getElementById("toggleSkills");
var skillsSection = document.getElementById("skills");
// Initial state setup
// Ensure the skills section is visible by default and the button shows "Hide Skills"
skillsSection.classList.remove("hidden"); // Skills section is visible initially
toggleButton.textContent = "Hide Skills"; // Button should show "Hide Skills" initially
// Add event listener to toggle skills visibility
toggleButton.addEventListener("click", function () {
    // Toggle the visibility of the skills section
    skillsSection.classList.toggle("hidden");
    // Toggle button text based on visibility of the skills section
    if (skillsSection.classList.contains("hidden")) {
        toggleButton.textContent = "Show Skills"; // Change to "Show Skills" if hidden
    }
    else {
        toggleButton.textContent = "Hide Skills"; // Change to "Hide Skills" if visible
    }
});
