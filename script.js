const retryButton = document.getElementById("retry-button");
const errorState = document.getElementById("error-state");
const loadingState = document.getElementById("loading-state");
const description = document.getElementById("component-description");

retryButton.addEventListener("click", () => {
    errorState.hidden = true;
    loadingState.hidden = false;

    description.textContent = "Retrying data request...";
});