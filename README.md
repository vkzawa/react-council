## Introduction

This is a single page app built in React for use as a front-end to neighborhood council websites with a custom WordPress back-end to manage content. It includes a custom WordPress theme and plugins to make sure the data retrieved from the WP JSON API is in the shape needed for the React app. 

## Caching API responses on the server side

We use Redux both on the server and the client to cache the site content provided by Wordpress in memory.  This is a very simple approach but it works quite well in practice.  The first time a client requests a server rendered copy of a page, Node serves the contents of the `build` folder, without waiting for the asynchronous calls to the WP REST API.  But, this first call populates the in-memory Redux store - therefore any consecutive requests by clients to the same server rendered page will automatically pull from the Redux store - and will automatically populate the data from WP.

## Folder Structure

**client/**: The `client` directory hold the React application.

**api/**: The `api` directory holds the neccessary WordPress code needed to make WordPress and the React app work together.
