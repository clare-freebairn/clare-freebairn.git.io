// Define word lists for each mood
let short_sweet_words = ["love", "wisdom", "wise", "dream", "Sleeping", "Death", "King", "Queen", "dark", "beautiful", "Deep", "happy", "tears", "sing", "song"]
let nature_descriptive_words = ["tree", "grass", "flower", "breeze", "green", "environment", "ecology", "grow", "natural", "landscape", "cave", "ocean", "lake", "sea", "growing", "soil", "dirt", "petal", "leaf", "autumn", "winter"]
let tech_words = ["https",".com","domain","tech","game","knowledge","feedback","information","contact","product","advertising","phone","smartphone","email","user","Javascript","java","Java","C++","computer","system","click","subcribe","youtube"]
let sexy_words = ["love","Love","sex","porn","nsfw","penis","vagina","breasts","attractive","handsome","flirt","boyfriend","girlfriend","wife","husband","eyes","thrust","moan","groan","hot",
"sexy"]
 
// GUI parameters
let widths = [25, 15, 8, 10, 20, 50, 60, 80];
let setWidth;
let setColour;
let inp, button, gen;
let genText = "";
 
// Emotion booleans
let cat1_shortSweet = false;
let cat2_bland = false;
let cat3_natureDescriptive = false;
let cat4_loveSexAndEmotion = false;
let cat5_digitalTechModern = false;
let cat6_RomanticPoetic = false;
let cat7_shortAndBoring = false;
 
let showButton = true;
 
function setup() {
    setTimeout(function() {
        window.focus()
    }, 500);
    createCanvas(windowWidth, windowHeight);
    noStroke();
    submitButton();
    createInput();
}
 
function submitButton() {
    if (showButton === true) {
        inp = createInput(["enter text from transformer"], ["text"]);
        inp.position(10, 10);
        button = createButton("submit");
        button.position(inp.x + inp.width, inp.y);
        button.mousePressed(tokeniseInputString);
    }
}
 
function stringContainsList(strArray, wordArray) {
  let wordFound = false;

  // Loop through all positions and words and
  // check if there is a match. If so, end the loop.
  for (i = 0; i < strArray.length; i++) {
      for (j = 0; j < wordArray.length; j++) {
          if (strArray[i].toUpperCase().indexOf(wordArray[j].toUpperCase()) != -1) {
              wordFound = true;
              break;
          }
      }
      if (wordFound) {
          break;
      }
  }

  // Return whether we found a word.
  return wordFound;
}
 
// input string array split into words
function analyseText(strArr) {
    console.log(strArr);
 
    // Reset the matching variables
    cat1_shortSweet = false;
    cat2_bland = false;
    cat3_natureDescriptive = false;
    cat4_loveSexAndEmotion = false;
    cat5_digitalTechModern = false;
    cat6_RomanticPoetic = false;
    cat7_shortAndBoring = false;
 
    // Any lists matched so far
    let listMatched = false;
 
    let cat1_shortSweet_wordcheck = stringContainsList(strArr, short_sweet_words);
 
    if (cat1_shortSweet_wordcheck && strArr.length <= 50){
    cat1_shortSweet = true;
    listMatched = true;
    }
    else{
    if (cat1_shortSweet_wordcheck){
        cat6_RomanticPoetic = true;
        listMatched = true;
    }
    }
 
    if (!listMatched){
    if (stringContainsList(strArr, nature_descriptive_words)){
        cat3_natureDescriptive = true;
        listMatched = true;
    }
    }
 
    if (!listMatched){
    if (stringContainsList(strArr, sexy_words)){
        cat4_loveSexAndEmotion = true;
        listMatched = true;
    }
    }
 
    if (!listMatched){
    if (stringContainsList(strArr, tech_words)){
        cat5_digitalTechModern = true;
        listMatched = true;
    }
    }
 
    if (strArr.length <= 50 && cat1_shortSweet === false && cat6_RomanticPoetic === false && cat5_digitalTechModern == false && cat1_shortSweet == false && cat4_loveSexAndEmotion == false) {
        cat7_shortAndBoring = true;
    }
 
    if (strArr.length > 50 && cat1_shortSweet === false && cat3_natureDescriptive === false && cat4_loveSexAndEmotion === false && cat5_digitalTechModern === false && cat6_RomanticPoetic === false) {
        cat2_bland = true;
    }
}
 
function categorySet() {
    if (cat1_shortSweet === true) {
        setWidth = 80;
        fill(random(0, 255), random(0, 255), random(0, 255));
    }
    if (cat2_bland === true) {
        fill(random(coloursBland));
    }
 
    if (cat3_natureDescriptive === true) {
        fill(random(coloursNature));
    }
 
    if (cat4_loveSexAndEmotion === true) {
        fill(random(coloursSexy));
    }
 
    if (cat5_digitalTechModern === true) {
        fill(random(coloursTech));
        setWidth = 15;
    }
 
    if (cat6_RomanticPoetic === true) {
        setWidth = 15
        fill(random(coloursSweet));
    }
 
    if (cat7_shortAndBoring === true) {
        fill(random(0, 255));
    }
}
 
function tokeniseInputString() {
    setWidth = random(widths);
    console.log(setWidth);
 
    console.log(inp.value());
    genText = inp.value();
 
    // console.log(genText);
 
    let wordsArr = genText.split(" ");
 
    // console.log(wordsArr);
 
    generate(wordsArr);
}
 
function transformerButton() {
    fill(200);
 
    var a = mouseX > 300 && mouseX < 470;
    var b = mouseY > 0 && mouseY < 40
    if (a && b) {
        fill(coloursSexy[5]);
    }
    rect(300, 10, 170, 20);
    fill(0);
    text("click here to talk to tranformer", 305, 25);
}
 
function mousePressed() {
    var a = mouseX > 300 && mouseX < 470;
    var b = mouseY > 0 && mouseY < 40;
 
    if (a && b) {
        window.open("https://talktotransformer.com/");
    }
 
    var c = mouseX > 500 && mouseX < 540;
    var d = mouseY > 0 && mouseY < 40;
 
    if (c && d) {
        cat1_shortSweet = false;
        cat2_bland = false;
        cat3_natureDescriptive = false;
        cat4_loveSexAndEmotion = false;
        cat5_digitalTechModern = false;
        cat6_RomanticPoetic = false;
        cat7_shortAndBoring = false;
        fill(255);
        rect(0, 0, windowWidth, windowHeight);
    }
 
}
 
function draw() {
    strokeWeight(65);
    stroke(0);
    noFill();
    rect(0, 0, width, height);
    noStroke();
    transformerButton();
    resetButton();
 
 
}
 
function resetButton() {
    fill(200);
 
    var a = mouseX > 500 && mouseX < 540;
    var b = mouseY > 0 && mouseY < 40;
    if (a && b) {
        fill(coloursSexy[5]);
    }
    rect(500, 10, 40, 20);
    fill(0);
    text("reset", 505, 25);
}
 
function generate(strArr) {
    analyseText(strArr);
    showButton = false;
    for (h = 0; h < windowHeight; h = h + setWidth) {
        for (let i = 0; i < windowWidth; i = i + setWidth) {
            categorySet();
            rect(i, h, setWidth, setWidth);
            stroke(0);
            noFill();
            rect(0, 0, width, height);
            noStroke();
        }
 
    }
 
}
let coloursTech = [
    "#1C2541",
    "#3A506B",
    "#0B132B",
    "#698996",
    "##0A2463",
    "#E2E2E2",
    "#27476E",
    "#FCFCFC",
    "#293241",
    "#98C1D9",
    "#ADACB5",
    "#4D5057",
    "#0F0A0A",
    "#808782",
    "#757780",
    "#A9B4C2",
    "#5E6572",
    "#131B23",
    "#816C61",
    "#B7B6C2",
    "#808080",
    "#BFD1E5"
];
 
let coloursSexy = [
    "#E5C1BD",
    "#D2D0BA",
    "#B4869F",
    "#985F6F",
    "#E8B4BC",
    "#D282A6",
    "#6E4555",
    "#D5A18E",
    "#E3BAC6",
    "#ED254E",
    "#432E36",
    "#260C1A",
    "#750D37",
    "#A3333D",
    "#96031A",
    "#DDBDD5"
];
 
let coloursSweet = [
    "#BFD1E5",
    "#D8BFAA",
    "#542344",
    "#40798C",
    "#7EA8BE",
    "#C2948A",
    "#92B4F4",
    "#DBAFC1",
    "#E7C8DD",
    "#86626E",
    "#C6B9CD",
    "#9C92A3",
    "#6B4E71",
    "#EAC9C1",
    "#D2D0BA",
    "#E5C1BD"
];
 
let coloursNature = [
    "#59656F",
    "#CCFCCB",
    "#464E47",
    "#568259",
    "#6B8F71",
    "#AAD2BA",
    "#77867F",
    "#32161F ",
    "#8B786D",
    "#BFA89E",
    "#3C1518",
    "#A44200",
    "#C7D9B7",
    "#A57F60",
    "#89023E",
    "#243E36",
    "#7D2E68",
    "#1C3A13",
    "#84732B",
    "#574F2A",
    "#36453B",
    "#C2C1A5",
    "#596869",
    "#515751",
    "#355834",
    "#14281D",
    "#6E633D",
    "#C2A878",
    "#B38D97",
    "#D5ACA9",
    "#EBCFB2",
    "#C5BAAF",
    "#4C230A",
    "#A53F2B",
    "#5DD9C1",
    "#B6D094"
];
 
let coloursBland = [
    "#3423A6",
    "#7180B9",
    "#171738",
    "#EAC5D8",
    "#295135",
    "#0E402D",
    "#5FBB97",
    "#63326E",
    "#BFACB5",
    "#444554",
    "#172121",
    "#C2EABD",
    "#E2AEDD",
    "#983628",
    "#581908",
    "#2E0E02",
    "#7286A0",
    "#7C3238",
    "#122C34",
    "#EBB3A9",
    "#795663",
    "#75BBA7",
    "#011627",
    "#F7934C",
    "#F7B05B",
    "#8B9D83",
    "#3A4E48",
    "#A28F9D",
    "#5C574F",
    "#7FB7BE",
    "#7D1538",
    "#AFCBFF",
    "#0E1C36",
    "#FFEDE1",
    "#D7F9FF",
    "#F6AE2D",
    "#503D3F",
    "#241623",
    "#FE6847",
    "#ABC798",
    "#F1DEDC",
    "#4C3549",
    "#883955",
    "#CDD6DD",
    "#CDACA1",
    "#A57982",
    "#B98EA7",
    "#89608E",
    "623B5A#",
    "#FF9B85",
    "#E2D4B7",
    "#EB5E55",
    "#E1AA7D",
    "#A7ACD9",
    "#9E8FB2",
    "#DBB4AD",
    "#A2AD91"
];