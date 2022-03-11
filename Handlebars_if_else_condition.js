const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  opinion: false
};

const compiledHtml = template(context);

const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;









// the HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>GIF!</title>
    <link href="public/style.css" type="text/css" rel="stylesheet">
    <script src="handlebars.min.js"></script>
    <script id="ifHelper" type="text/x-handlebars-template">
      {{#if opinion}}
        <p>"The correct way to say GIF is GIF!"</p>
      {{else}}
        <p>"There's no right way to say GIF!"</p>
      {{/if}}
    </script> 
  </head>
  <body>
    <div class="bg">
      <img class="bg-convo" src="https://content.codecademy.com/courses/learn-handlebars/handlebars%20if.svg">
    </div>
    <div id="debate">
    </div>
    <script src="public/main.js" type="text/javascript"></script>
  </body>
</html>
