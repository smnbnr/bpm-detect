const button = document.querySelector("#tap-button");
const bpmOutput = document.querySelector("#bpm-output");

let tapTimes = [];

button.addEventListener("click", () => {
  const currentTime = Date.now();
  tapTimes.push(currentTime);

  // Calculate BPM if at least two taps have been registered
  if (tapTimes.length > 1) {
    const timeBetweenTaps =
      tapTimes[tapTimes.length - 1] - tapTimes[tapTimes.length - 2];
    const bpm = 60000 / timeBetweenTaps;
    bpmOutput.textContent = Math.round(bpm);
  }
});
