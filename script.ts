const toggleButton = document.getElementById("toggleSkills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLDivElement;

skillsSection.classList.remove("hidden");
toggleButton.textContent = "Hide Skills";

toggleButton.addEventListener("click", function() {

  skillsSection.classList.toggle("hidden");

  if (skillsSection.classList.contains("hidden")) {
    toggleButton.textContent = "Show Skills";
  } else {
    toggleButton.textContent = "Hide Skills";
  }
});
