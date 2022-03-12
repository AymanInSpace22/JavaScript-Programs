
const source = document.getElementById('eachHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  newArray: [1,2,3,4,5,6,7,8,9,10]
};

const compiledHtml = template(context);

const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;




//the HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Each Block[s]</title>
    <link href="public/style.css" type="text/css" rel="stylesheet">
    <script src="handlebars.min.js"></script>
    <!-- Add an {{each}} helper block in the <script> element below-->
    <script id="eachHelper" type="text/x-handlebars-template">
      {{#each newArray}}
        <div class="block">{{this}}</div>
      {{/each}}
    </script>
  </head>
  <body>
    <h1>Each Block[s]</h1>
    <div id="display">
    </div>
    <script src="public/main.js" type="text/javascript"></script>
  </body>
</html>
        
        
        
        
        
        
        
        
// part 2
const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JavaScript'}
  ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;

        
        
        
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Languages</title>
    <link href="public/style.css" type="text/css" rel="stylesheet">
    <script src="handlebars.min.js"></script>
    <!-- Add an {{each}} helper block in the <script> element below-->
    <script id="languagesTemp" type="text/x-handlebars-template">
    {{#each languages}}
      <div class="card">
          <p>I should learn {{this.name}}.</p>
      </div>
    {{/each}}

    </script>
  </head>
  <body>
    <h1>
      Thoughts on Languages:
    </h1>
    <div id="goals">
    </div>
  	<script src="public/main.js" type="text/javascript"></script>  
  </body>
</html>

