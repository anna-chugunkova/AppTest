$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("f.feature");
formatter.feature({
  "line": 2,
  "name": "Proof of concept",
  "description": "",
  "id": "proof-of-concept",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test",
  "description": "",
  "id": "proof-of-concept;test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigated to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click enabled",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click somewhere else",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.I_navigated_to_the_website()"
});
formatter.result({
  "duration": 88118534,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_click_enabled()"
});
formatter.result({
  "duration": 52470,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_click_somewhere_else()"
});
formatter.result({
  "duration": 69453,
  "status": "passed"
});
});