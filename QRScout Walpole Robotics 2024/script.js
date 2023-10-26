function loadConfig() {
  configOutput = JSON.parse(startingConfig);
  for (var sectionOffset in configOutput.sections) {
    currentSection = configOutput.sections[sectionOffset];
    for(var sectionKey in currentSection) {
      console.log(currentSection[sectionKey]);
    }
  }
}

