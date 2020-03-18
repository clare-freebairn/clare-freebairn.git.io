let widths = [25, 15, 8, 10, 20, 50, 60, 80];
let setWidth;
let setColour;
let inp, button, gen;
let genText = "";

let cat1_shortSweet = false;
let cat2_bland = false;
let cat3_natureDescriptive = false;
let cat4_loveSexAndEmotion = false;
let cat5_digitalTechModern = false;
let cat6_RomanticPoetic = false;
let cat7_shortAndBoring = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  submitButton();
}

function submitButton() {
  inp = createInput(["enter text from transformer"], ["text"]);
  inp.position(windowWidth / 2 - inp.width / 2, windowHeight / 2);

  button = createButton("submit");
  button.position(inp.x + inp.width, windowHeight / 2);
  // button.mousePressed(generate);
  button.mousePressed(tokeniseInputString);
}

function analyseText(strArr) {
  console.log(strArr);

  if (
    strArr.length <= 50 &&
    cat5_digitalTechModern == false &&
    cat3_natureDescriptive === false
  ) {
    for (i = 0; i < strArr.length; i++) {
      if (
        strArr[i].indexOf(
          "love" ||
            "Love" ||
            "wisdom" ||
            "wise" ||
            "dreams" ||
            "Sleeping" ||
            "Death" ||
            "King" ||
            "Sleep" ||
            "dark" ||
            "beautful" ||
            "Deep" ||
            "happy" ||
            "tears" ||
            "Marriage" ||
            "Sing" ||
            "sing" ||
            "song" ||
            "Songs"
        ) != -1
      ) {
        cat1_shortSweet = true;
      }
    }
  }

  if (
    cat5_digitalTechModern == false &&
    cat3_natureDescriptive === false &&
    cat1_shortSweet == false
  ) {
    for (i = 0; i < strArr.length; i++) {
      if (
        strArr[i].indexOf(
          "love" ||
            "Love" ||
            "wisdom" ||
            "wise" ||
            "dreams" ||
            "Sleeping" ||
            "Death" ||
            "King" ||
            "Sleep" ||
            "dark" ||
            "beautful" ||
            "Deep" ||
            "happy" ||
            "tears" ||
            "Marriage" ||
            "Sing" ||
            "sing" ||
            "song" ||
            "Songs"
        ) != -1
      ) {
        cat6_RomanticPoetic = true;
      }
    }
  }

  if (
    cat6_RomanticPoetic === false &&
    cat5_digitalTechModern == false &&
    cat1_shortSweet == false &&
    cat4_loveSexAndEmotion == false &&
    cat2_bland === false &&
    cat7_shortAndBoring == false
  ) {
    for (i = 0; i < strArr.length; i++) {
      if (
        strArr[i].indexOf(
          "tree" ||
            "grass" ||
            "flower" ||
            "breez" ||
            "greene" ||
            "environment" ||
            "ecolog" ||
            "natural" ||
            "landscape" ||
            "cave" ||
            "ocean" ||
            "lake"
        ) != -1
      ) {
        cat3_natureDescriptive = true;
      }
    }
  }

  if (
    strArr.length >= 50 &&
    cat6_RomanticPoetic === false &&
    cat3_natureDescriptive === false
  ) {
    for (i = 0; i < strArr.length; i++) {
      if (
        strArr[i].indexOf(
          "https" ||
            ".com" ||
            "domain" ||
            "tech" ||
            "game" ||
            "write" ||
            "knowledge" ||
            "feedback" ||
            "information" ||
            "contact" ||
            "product" ||
            "advertising" ||
            "smartphone" ||
            "phone" ||
            "email" ||
            "user" ||
            "Javascript"
        ) != -1
      ) {
        cat5_digitalTechModern = true;
      }
    }
  }

  if (
    strArr.length >= 50 &&
    cat6_RomanticPoetic === false &&
    cat5_digitalTechModern == false
  ) {
    for (i = 0; i < strArr.length; i++) {
      if (
        strArr[i].indexOf(
          "love" ||
            "happy" ||
            "happiness" ||
            "sex" ||
            "penis" ||
            "vagina" ||
            "bulge" ||
            "boyfriend" ||
            "girlfriend" ||
            "intense" ||
            "eyes" ||
            "breasts" ||
            "chest" ||
            "breath"
        ) != -1
      ) {
        cat4_loveSexAndEmotion = true;
      }
    }
  }

  if (
    strArr.length <= 50 &&
    cat1_shortSweet === false &&
    cat6_RomanticPoetic === false &&
    cat5_digitalTechModern == false &&
    cat1_shortSweet == false &&
    cat4_loveSexAndEmotion == false &&
    cat2_bland === false
  ) {
    cat7_shortAndBoring = true;
  }

  if (
    strArr.length >= 50 &&
    cat1_shortSweet === false &&
    cat3_natureDescriptive === false &&
    cat4_loveSexAndEmotion === false &&
    cat5_digitalTechModern === false &&
    cat6_RomanticPoetic === false &&
    cat7_shortAndBoring == false
  ) {
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
    setWidth = random(20, 21);
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

function draw() {
  createInput();
  noLoop();
}

function generate(strArr) {
  analyseText(strArr);
  for (h = 0; h < windowHeight; h = h + setWidth) {
    for (let i = 0; i < windowWidth; i = i + setWidth) {
      categorySet();
      rect(i, h, setWidth, setWidth);
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
