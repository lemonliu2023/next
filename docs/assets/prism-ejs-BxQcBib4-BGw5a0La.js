(function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",function(a){var n=/<%(?!%)[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(a,"ejs",n)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")}),e.languages.eta=e.languages.ejs})(Prism);