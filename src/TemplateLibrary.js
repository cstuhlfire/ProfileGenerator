// Template Library to store html template text
// htmlOpen - required html header info
const htmlOpen = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <title>Team Profile Generator</title>
</head>`;

// Variables store required html open and close tags and required text
const htmlClose = `</html>`;
const bodyOpen = `<body>`;
const bodyClose = `</body>`
const heroOpen = `  <section class="hero is-danger">
    <div class="hero-body has-text-centered">
        <p class="title">`;
const heroClose = `</p>          
    </div>
  </section>`;
const boxOpen = `   <div class="box p-6">`;
const rowOpen = `     <div class="tile is-ancestor">`;
const divClose = `</div>`;

module.exports = {htmlOpen,
    htmlClose,
    bodyOpen,
    bodyClose,
    heroOpen,
    heroClose,
    boxOpen,
    rowOpen,
    divClose};