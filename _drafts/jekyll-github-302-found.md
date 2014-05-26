---
layout: post
title: Jekyll &amp; Github: 302 found
summary:
  Github Pages could send a `302 found` header for your Jekyll site. Here's what you can do about that.
category: Github, Jekyll
---

https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages

http://subosito.com/fix-302-redirect-response-for-github-hosted-site

http://stackoverflow.com/questions/20885695/why-is-my-github-hosted-site-responding-with-http-302-instead-of-200
https://developers.facebook.com/tools/debug/og/object?q=http%3A%2F%2Fdavidhund.com%2F

GH: "What you're running into is our DDoS mitigation. Our DDoS mitigation technology samples the HTTP traffic in order to detect bots and DDoS precursors, and issues HTTP 302 responses to smoothly redirect users that are not bots. Unfortunately, some sites get confused by this when you paste a link.

In order to avoid this issue, you could use a sub domain, e.g. blog.example.com, instead of an apex domain, e.g. example.com, as a CNAME for your GitHub Page. This sub domain will be backed by our Content Delivery Network and won't return a 302."