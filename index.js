function generatePoem(response) {
  //   alert("Generate Poem");
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "🥃",
    delay: 20,
  });
}

function tellPoem() {
  event.preventDefault(); // event.preventDefault stops you submitting the form if you haven't put any text in. A pop up will say "Please fill this in"

  let userPrompt = document.querySelector("#userPrompt");
  let apiKey = "a3co8cfc69t20f3a05200f0a3ac4b3e8";
  let context =
    "You are a expert AI cocktail assistant. Format the response in HTML without using backticks or extra code syntax.";
  let prompt = `Please generate a whisky cocktail recipe with ${userPrompt.value},  formatted in basic HTML elements only. Sign the receipe at the end with '<strong>SheCodes AI</strong>'. Do not include backticks or other code symbols.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `SheCodes AI is generating a whisky cocktail for you using ${userPrompt.value}...`;

  console.log(apiUrl);
  console.log("Generating a poem");
  console.log(`${prompt}`);
  console.log(`${context}`);

  axios.get(apiUrl).then(generatePoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", tellPoem);

// Build the API URL
// Make the call to the API using axios
// Display the generated poem
