const panels = {
    loading: document.getElementById("loading-state"),
    live: document.getElementById("live-state"),
    empty: document.getElementById("empty-state"),
    error: document.getElementById("error-state")
};

const stateBadge = document.getElementById("state-badge");
const description = document.getElementById("component-description");
const stateButtons = document.querySelectorAll("[data-state]");
const retryButton = document.getElementById("retry-button");

const stateContent = {
    loading: {
        badge: "Loading",
        description: "Loading component data..."
    },
    live: {
        badge: "Live",
        description: "Live data loaded successfully."
    },
    empty: {
        badge: "0 Items",
        description: "Data loaded successfully."
    },
    error: {
        badge: "Error",
        description: "Unable to load component data."
    }
};

function showState(state) {
    Object.entries(panels).forEach(([name, panel]) => {
        panel.hidden = name !== state;
    });

    stateButtons.forEach((button) => {
        const isActive = button.dataset.state === state;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    stateBadge.textContent = stateContent[state].badge;
    description.textContent = stateContent[state].description;

    stateBadge.classList.toggle("error-badge", state === "error");
}

stateButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showState(button.dataset.state);
    });
});

retryButton.addEventListener("click", () => {
    showState("loading");
});

showState("loading");