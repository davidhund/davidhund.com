---
layout: post
title: Toolsplosion
category: front-end
---

Front-end development is booming. I have been doing this for a long time and never was it so much fun as these days. Front-end specialists are in high demand, browsers are updating quite rapidly and stumbling over each other to support the latest goodies.

Then there is an *explosion* of tools. We all have a hard time keeping up. Every week new JavaScript- or OOCSS frameworks and task-runners are popping up promising to make our lives easier.

## A Simple Site

I am writing this post as [Markdown](http://daringfireball.net/projects/markdown/) in Sublime Text. To the left of my editor window is a browser running this website locally through a [Gulp](http://gulpjs.com) workflow.

The moment I hit <kbd>save</kbd> gulp re-generates the Jekyll site and my browser-window refreshes to show the new content. The same goes for my Sass `.scss` or JavaScript files: when I update them Gulp goes and does its magic.

*Magic*, in this context, is a whole load of tasks: combining various `.scss` files, compiling those to `.css`, minifying them and moving them to the `/css` folder. Various `.js` files are combined, minified and moved too. Images are optimized. Jekyll Markdown files converted to HTML and minified. And. So. On.

But this is not all: I also have my local site open in my phone's web browser. Whenever my site refreshes, my phone does too. No manual action required. No <kbd>&lt;ALT&gt;+&lt;TAB&gt;</kbd>. No <kbd>&lt;CMD&gt;+&lt;R&gt;</kbd>. One <kbd>Save</kbd> in my text editor. Magic.

I keep all the files for this weblog in a [Git repository](https://github.com/davidhund/davidhund.com). When I'm done writing this post (soon, I promise!) I'll commit the updated files (but *not* the generated static `_site/`) and *push* to a Github `gh-pages` branch.

The moment Github receives my Jekyll files it *recognizes* this is a Jekyll website and *automatically generates the complete site, serving it at a domain I configured*. One `git push` and my site will be deployed. No FTP. Not even a hosting account needed. Magic.

But: all this is for *the simplest of static blogs!*

> Tools are *neat* but will not save us a lot of time *in the short-term*

## Magical Timesinks…

Most front-end developers I know use tools like Sass and Grulpt. If you are not yet using a VCS like Git you should stop reading this post and start using it. Come back when you're done.

However, we should not obsess over *tools* too much. KISS and POSH and all that. These tools are *neat* but will not save us a lot of time *in the short-term*.

Fact: while I no longer have to compile my Sass files by hand or update my navigation in multiple places I am now figuring out [how to fix flippin' Rubygem issues](https://twitter.com/valuedstandards/status/452364622830768128), where to find the best [Gulp plugins](https://www.npmjs.org/search?q=gulp-something) or [learning about Browserify](https://github.com/substack/browserify-handbook)…

Instead of figuring out how to get this rounded border working on IE6 I am fixing issues is my gazillion dependencies. Or just reading up on Gulp after I just started using Grunt.

These tools do *not* save me time. In the short-term.

## But It's Cool!

You know what? I'm totally fine with 'wasting' a lot of time fiddling around with them. I am a front-end developer, I work on the Web. This is what I do: I fiddle, I experiment. *I learn*

How about you? Do you love tinkering with these new tools or do you feel overwhelmed? [reply on Twitter](https://twitter.com/intent/tweet?text=@valuedstandards%20front-end%20development%20blog%20sucks!) or [submit an issue on Github](https://github.com/davidhund/davidhund.com/issues)

*[OOCSS]: Object Oriented CSS
*[Sass]: Syntactically Awesome Stylesheets
*[Grulpt]: You know, whatever
*[KISS]: Keep It Stupid Simple
*[POSH]: Plain Old Simple HTML
*[VCS]: Version Control System
*[CSS]: Cascading Style Sheets
*[HTML]: Hypertext Markup Language
*[FTP]: File Transfer Protocol
