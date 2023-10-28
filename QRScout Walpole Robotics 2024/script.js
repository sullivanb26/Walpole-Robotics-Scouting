function loadConfig() {
  configOutput = JSON.parse(startingConfig);
  for (var sectionOffset in configOutput.sections) {
    currentSection = configOutput.sections[sectionOffset];
    currentSectionName = currentSection.name;
    currentSectionFields = currentSection.fields
    newSection(currentSectionName);
    for(var sectionField in currentSectionFields) {
      currentField = currentSectionFields[sectionField];
      switch (currentField.type) {
        case "text":
          newText(currentField.title, currentField.required, currentSectionName)
          break;
        case "number":
          newNumber(currentField.title, currentField.required, currentSectionName)
          break;
        case "select":
          newSelect(currentField.title, currentField.required, currentSectionName, currentField.choices, currentField.defaultValue)
          break;
        default:
          break;
      }
    }
  }
  $("#mainForm").append(`<input type="submit" value="Submit">`);
}

function newSection(name) {
  $("#mainForm").append(`<section id="${name}"><h1>${name}</h1></section>`);
}
function newText(title, required, sectionID) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  $(`#${sectionID}`).append(`<div class="text">${title}  <input type="text" name="${title}" id="${title}"${isRequired}></input></div>`);
}

function newNumber(title, required, sectionID) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  $(`#${sectionID}`).append(`<div class="number">${title}  <input type="number" name="${title}"${isRequired}></input></div>`);
}

function newSelect(title, required, sectionID, choices, defaultChoice) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  $(`#${sectionID}`).append(`<div class="number">${title}  <select name="${title}" id="${sectionID}Select"${isRequired}></input></div>`);
  for (var term in choices) {
    if (choices.hasOwnProperty(term)) {
      var preSelected = "";
      if (defaultChoice == term) {
        preSelected = " selected";
      }
      $(`#${sectionID}Select`).append(`<option value="${term}"${preSelected}>${choices[term]}</option>`);
    }
  }
}