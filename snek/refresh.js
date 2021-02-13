var ele = document.getElementById("refresh");
ele.addEventListener("click", reload);
function reload() {
    window.location.reload(false);
}