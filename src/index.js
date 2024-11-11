function showResponse(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 75,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userTopic = document.querySelector("#user-topic");

  let apiKey = "2394045tebc4f1e4ea3820407e9abod9";
  let prompt = `Please generate a four line poem about ${userTopic.value}`;
  let context =
    "You are a creative AI Assistant who loves to write poems. You create a new and unique poem every time. Generate your answer in basic HTML. Please don't mention html or HTML in your answer. Sign your poem at the bottom: SheCodes AI in a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="blink">⏳ Generating a poem about ${userTopic.value} for you</ span>`;

  axios.get(apiUrl).then(showResponse);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
