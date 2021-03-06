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

	
	
// Handlebars.js Review
	
	Review
Great work you now know the fundamentals of using Handlebars! Let’s recap a few key points:

Handlebars is an external library used to create templates which are a mix of HTML, text, and expressions.
Handlebars uses expressions which are wrapped inside double braces like: {{someVariable}}
A script tag with a type of "text/x-handlebars-template" is used to deliver a template to the browser.
Handlebar.compile() returns a templating function from a template script intended for Handlebars.
A template created from .compile() will take an object as an argument and use it as context to generate a string containing HTML.
Handlebars has built in block helpers which can be included in a Handlebars script.
Block helpers have a starting expression and an ending expression. The starting expression will have a # appears before a keyword. The ending expression will have the same keyword but with a / character to denote the end.
The {{if}} will conditionally render a block of code.
An {{else}} expression can be inserted into an if helper block and used as part of the conditional statement.
{{each}} is another built-in helper expression which accepts an array to iterate through.
In the block helper functions, the {{this}} expression gives context and serves as a placeholder for the current value.
