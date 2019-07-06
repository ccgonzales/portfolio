---
title: "Mailrate"
company: "Personal"
thumbnailImage: mailrate-thumbnail.png
---

This app uses the USPS Rate API to retrieve data for shipping packages. It provides both commercial and retail prices as well as the zone in which the package will be delivered. The prices and zone are retrieved based off of the origination and destination zip code and the weight.

Construction
This app was bootstrapped using the create-react-app boilerplate. I liked this approach because, as a beginner, I'm able to quickly create code and try it out without much initial setup involved. The architecture is pretty straightforward. I wanted to be able to separate the API calls out to it own component so it could be used in another app, an e-commerce site, for example.

Design
The goal was to keep the app simple and focus mostly on the React code and API call. I wanted to use this app as an opportunity to experiment with frameworks or tools that were new to me, so this site uses Semantic-UI for React package module. Semantic-UI provides custom React components that will render it's own CSS. I wanted to use as much as the base CSS as I could with minimal CSS overriding it. It should be noted that it's currently in beta, so there are CSS issues. While I'm sure this is fine for quickly creating mockups, I wouldn't use this for a production code. It does the one thing you should do in front-end web dev: tightly couple the apps HTML structure to it's style. In my opinion this is worst than, Bootstrap because, with Bootstrap at least you are controlling the tag structure. With Semantic-UI however, the component will be define as whichever tag their developers think is the most appropriate. Semantic-UI does offer a way to theme, but if I'm spending time theming I might as well start from scratch.

API
This API comes from the USPS and it is quite cumbersome to work with. I'm mostly familiar with REST APIs and unfortunately this API only accepts and responses with XML. However, this isn't a SOAP/WSDL. In order to get a proper response, a correctly constructed XML tree must be appended as a string to the API url. The order of tags must be preserved according to the documentation. The errors are pretty vague and can lead to spontaneous outbursts confusion.
