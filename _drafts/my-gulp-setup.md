---
layout: post
title: My Gulp Setup
summary:
  JavaScript task runners are pretty neat. I personally like Gulp. This is my (current) setup.
category: Gulp, Workflow
---

Gulp or Grunt: whatever

http://travismaynard.com/writing/no-need-to-grunt-take-a-gulp-of-fresh-air
http://travismaynard.com/writing/getting-started-with-gulp
http://blog.ponyfoo.com/2014/01/09/gulp-grunt-whatever

## JavaScript Task Runners

.. what they do and when-and-why to use them

## Gulp versus Grunt

.. some differences.

- Gulp: Streams
- Gulp: Code over config
- Gulp: Async tasks

"Get in a flow with streams"

Gulp seems to be picking up steam (meaning more plugins are available/ported to Gulp from Grunt). Also: it seems just a bit cleaner, faster and the concept of 'streaming' a file through a series of 'pipes' clicks conceptually …

.. But YMMV and "let's not get religious here"

## My Current Setup

### Installing Gulp

- Install NodeJS & NPM
- `npm init` -› package.json (explain what it is)
- Install Gulp -g
- Install packages
- run!

Not all the times, but often..

- Sass compilation
- Autoprefixer
- CSS Minification
- Browser Sync
- Javascript concatenation
- Javascript minification uglify
- (Browserify)
- Image optimization
- SVG minification
- Jekyll or grunt-bake
- HTML minification

- CSSlint (scss-lint FTW!)
- lint, hint, test

Don't crash on errors with gulp-plumber

### What Do I Miss?

Do you use another setup? What could I improve? What must-have tools am I missing?

## KISS With `Make` or `npm run`

.. why most of the times less is actually more. 
[Something on huge `node_module/` folders, dependencies on NPM etc etc]

Often a simple Bash script could do what you need. Take a look at

- Makefiles (yes smiling old-timers :-)
- `npm run`