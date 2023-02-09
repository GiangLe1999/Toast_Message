const toastSection = document.getElementById("toast");
const toastButtons = document.querySelector("button");
const icon = {
  info: "fa-solid fa-circle-info",
  warning: "fa-solid fa-circle-exclamation",
  success: "fa-solid fa-circle-check",
};
function toast({ title, message, type }) {
  const toast = document.createElement("div");
  toast.classList.add("toast", `toast--${type}`);
  toast.innerHTML = `<div class="toast__border"></div>
  <div class="toast__icon">
    <i class="${icon[type]}"></i>
  </div>
  <div class="toast__body">
    <h3 class="toast__title">${title}</h3>
    <p class="toast__message">
      ${message}
    </p>
  </div>
  <div class="toast__close">
    <i class="fa-solid fa-xmark"></i>
  </div>`;
  let toastTimeout = setTimeout(() => {
    toastSection.removeChild(toast);
  }, 5000);
  toastSection.appendChild(toast);
  toast.onclick = (e) => {
    if (e.target.closest(".toast__close")) {
      toastSection.removeChild(toast);
      clearTimeout(toastTimeout);
    }
  };
}

function showToastMessageInfo() {
  toast({
    title: "Did you know?",
    message: "Here is something that you might like to know.",
    type: "info",
  });
}
function showToastMessageWarning() {
  toast({
    title: "Uh oh, something went wrong",
    message: "Sorry! There was a problem with your request.",
    type: "warning",
  });
}
function showToastMessageSuccess() {
  toast({
    title: "Yay! Everything worked!",
    message: "Congrats on the internet loading your request.",
    type: "success",
  });
}
