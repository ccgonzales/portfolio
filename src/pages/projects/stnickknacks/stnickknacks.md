---
title: "St. Nick Knacks"
company: "Personal"
thumbnailImage: stnickknacks-thumbnail.png
demo: https://www.stnickknacks.com
featured: true
---

## Summary

A website to promote my personal side business, St. Nick Knacks, featuring handmade crafts which are then sold on Etsy

## Construction

This was build from the create-react-app boilerplate. It's very easy to get started quickly. For the initial iteration, I wanted the scope to be limited before attempting a full e-commerce site. By using Etsy's public API, I can leverage all the work I have already done in creating listings for products and redisplay them on this site. Over time I can then start to transition the user base from Etsy to our own site.

## Design

I'm not a big fan of CSS frameworks because they have a tendency of requiring major refactoring once the new specifications or adoption of those specifications are released. This site utilized BEM methodology for CSS implementation and maintenance. As stated previously, the goal was to start getting indexed quickly, so I liked the idea of simply having a gallery of photos for our products. It renders each into a responsive css grid.

## API

The Etsy API is REST-based which makes it relatively easy to work with. One downside is that it doesn't support CORS. Initially, I used a CORS wrapper by setting up a proxy site that would pass calls between my site and Etsy's. It turns out this is wildly expensive in a cloud based environment; in the neighborhood of about \$1 per call. So, unfortunately I went with the only way of wrapping the request in a callback.
