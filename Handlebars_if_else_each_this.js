const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {
      name: 'HTML',
      modern: true
    },
    {
      name:'CSS',
      modern: true
    }, 
    {
      name: 'JavaScript',
      modern: true
    },
    {
      name: 'COBOL',
      modern: false
    }
  ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;



// the HTML

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Languages</title>
    <link href="public/style.css" type="text/css" rel="stylesheet">
    <script src="handlebars.min.js"></script>
    <script id="languagesTemp" type="text/x-handlebars-template">
			{{#each languages}}
      	<div class="card">
          {{#if this.modern}}
        	  <p>I should learn {{this.name}}.</p>
          {{else}}
            <p>When I have time, I'll learn {{this.name}}.</p>
          {{/if}}
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
