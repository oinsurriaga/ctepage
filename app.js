window.onload = function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    const content = document.getElementById("mainContent");
    content.classList.remove("hidden");
    content.classList.add("fade-in");
  }, 2000);
};
