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
          newSelect(currentField.title, currentField.required, currentSectionName, currentField.choices, currentField.defaultValue, currentField.code)
          break;
        case "boolean":
          newBoolean(currentField.title, currentField.required, currentSectionName, currentField.defaultValue, currentField.code)
          break;
        case "counter":
          newCounter(currentField.title, currentField.required, currentSectionName, currentField.code)
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
  $(`#${sectionID}`).append(`<div class="text">${title}<input type="text" name="${title}" id="${title}"${isRequired}></input></div>`);
  // console.log(title + " :newText");
}

function newNumber(title, required, sectionID) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  $(`#${sectionID}`).append(`<div class="number">${title}<input type="number" name="${title}"${isRequired}></input></div>`);
  // console.log(title + " :newNumber");
}

function newSelect(title, required, sectionID, choices, defaultChoice, fieldID) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  $(`#${sectionID}`).append(`<div class="select">${title}  <select name="${title}" id="${sectionID + fieldID}"${isRequired}></input></div>`);
  // console.log(title + " :newSelect" + " :" + sectionID);
  for (var term in choices) {
    if (choices.hasOwnProperty(term)) {
      var preSelected = "";
      if (defaultChoice == term) {
        preSelected = " selected";
      }
      $(`#${sectionID + fieldID}`).append(`<option value="${term}"${preSelected}>${choices[term]}</option>`);
      // console.log(term + " : " + choices[term]);
    }
  }
}

function newBoolean(title, required, sectionID, defaultValue, fieldID) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  var defaultValueIs = "";
  if (defaultValue) {
    defaultValueIs = " checked";
  }
  $(`#${sectionID}`).append(`<div class="boolean">${title}<input type="checkbox" value="true" role="switch" name="${title}" id="${sectionID + fieldID}"${defaultValueIs}></div>`);
  // console.log(title + " :newBoolean" + " :" + sectionID);
}

function newCounter(title, required, sectionID, fieldID) {
  var isRequired = "";
  if (required) {
    isRequired = " required";
  }
  $(`#${sectionID}`).append(`<div class="counter">${title}<button type="button" onclick="addTo('${sectionID + fieldID}')">+</button><span id="${sectionID + fieldID}" name="${title}" value="0">0</span><button type="button" onclick="subTo('${sectionID + fieldID}')">-</button></div>`);
  // console.log(title + " :newCounter" + " :" + sectionID);
}

function addTo(id) {
  var value = parseInt($(`#${id}`).text());
  $(`#${id}`).text(value+1);
}
function subTo(id) {
  var value = parseInt($(`#${id}`).text());
  if (value>=1) {
    $(`#${id}`).text(value-1);
  }
}

function formHandler(event, form) {
  event.preventDefault();
  for (var value in form.elements) {
    var elem = form.elements[value];
    if (elem.type == "checkbox") {
      elem.value = elem.checked;
    }
    console.log(`${elem.name}:${elem.value}:${elem.nodeName}:${elem.type}`);
  }
}