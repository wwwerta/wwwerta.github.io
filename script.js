// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1SCjUwXZhfTHcj3z6bMc1cPoWD98yUZUvhlvx6E2_Zg0/edit#gid=0';

// Compile the Handlebars template for HR leaders.
var HRTemplate = Handlebars.compile($('#entradas-template').html());

// Load top five HR leaders.
$('#entradas').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E",
  labels: ['fecha','usuarix','nombre','url','notas'],
  rowTemplate: HRTemplate
});
