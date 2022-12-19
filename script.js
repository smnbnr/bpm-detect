const button = document.querySelector("#tap-button");
const bpmOutput = document.querySelector("#bpm-output");
const resetButton = document.querySelector("#reset");

let tapTimes = [];

const getBPM = () => {
  const currentTime = Date.now();
  tapTimes.push(currentTime);

  if (tapTimes.length > 1) {
    const timeBetweenTaps =
      tapTimes[tapTimes.length - 1] - tapTimes[tapTimes.length - 2];
    const bpm = 60000 / timeBetweenTaps;
    bpmOutput.textContent = Math.round(bpm);
  }
};

button.addEventListener("click", getBPM);
resetButton.addEventListener("click", () => {
  bpmOutput.textContent = 0;
});
