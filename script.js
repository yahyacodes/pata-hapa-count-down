const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#closeModal");
const cancelModal = document.querySelector("#cancelModal");

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = minutes + ":" + seconds;

    if (--timer < 0) {
      modal.style.display = "block";
      closeModal.onclick = function () {
        modal.style.display = "none";
      };

      cancelModal.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }

        timer = duration;
      };
    }
  }, 1000);
}

window.onload = () => {
  let tenMinutes = 60 * 0.03;
  display = document.querySelector("#timer");
  startTimer(tenMinutes, display);
};
