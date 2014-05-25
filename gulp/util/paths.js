// Handy file paths
module.exports = {
	dist: "./_site/",
	scss: "./static/scss/",
	css:  "./static/css/",
	img:  "./static/img/",
	js:   "./static/js/",
	bower: "./bower_components/",
	copyvendor: [
		"./bower_components/jquery/dist/jquery.min.js",
		"./bower_components/html5shiv/dist/html5shiv.js",
		"./bower_components/prism/prism.js",
		"./bower_components/prism/themes/prism.css"
	],
	jekyll: [
		"./*.md",
		"./_includes/*.html",
		"./_layouts/*.html",
		"./_posts/*.md"
	]
};