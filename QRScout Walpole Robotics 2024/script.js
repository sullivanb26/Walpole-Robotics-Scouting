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
      
        default:
          break;
      }
    }
  }
}

function newSection(name) {
  $("body").append(`<section id="${name}"><h1>${name}</h1></section>`);
}
function newText(title, required, sectionID) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  $(`#${sectionID}`).append(`<div class="text">${title}  <input type="text" name="${title}"${isRequired}></input></div>`);
}

function newNumber(title, required, sectionID) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  $(`#${sectionID}`).append(`<div class="number">${title}  <input type="number" name="${title}"${isRequired}></input></div>`);
}
