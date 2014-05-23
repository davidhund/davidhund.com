---
layout: post
title: Gulp, Jekyll &amp; Github FTW!
summary:
  Front-end development is a lot of fun nowadays.
category: front-end
---

Get ready for some tech geekery.

I am writing this post as [Markdown](http://daringfireball.net/projects/markdown/) in Sublime Text. To the left of my Sublime Text window is a browser window running this website locally through a [Gulp](http://gulpjs.com) workflow.

## Gulp Magic

The moment I hit save gulp re-generates the Jekyll site and my browser-window refreshes to show the new content. The same goes for my Sass `.scss` or JavaScript files: when I update them Gulp goes and does its magic.

*Magic*, in this context, is a whole load of tasks: combining various `.scss` files, compiling those to `.css`, minifying them and moving them to the `/css` folder. Various `.js` files are combined, minified and moved too. Images are optimized. Jekyll Markdown files converted to HTML and minified. And. So. On.

But this is not all: I also have my local site open in my phone's web browser. Whenever my site refreshes, my phone does too. No manual action required. No <kbd>&lt;ALT&gt;+&lt;TAB&gt;</kbd>. No <kbd>&lt;CMD&gt;+&lt;R&gt;</kbd>. One <kbd>Save</kbd> in my text editor. Magic.

## Github Magic

I keep all the files for this weblog in a [Git repository](https://github.com/davidhund/davidhund.com). When I'm done writing this post (soon, I promise!) I'll commit the updated files and *push* them to a Github `gh-pages` branch.

The moment Github receives my Jekyll files it *recognizes* this is a Jekyll website and *automatically generates the complete site, serving it at a domain I configured*. One `git push` and my site will be deployed. No FTP. Not even a hosting account needed. Magic.

## Fun-end development

This is nothing new. Most front-end developers I know use tools like Grunt and Gulp. If you are not yet using a VCS like Git you should stop reading this post and start using it. Come back when you're done.

Sure, we should obsess over *tools* too much. KISS and all that. The point I am trying to make is that front-end development is *So. Much. Fun* these days!