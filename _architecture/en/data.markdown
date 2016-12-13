---
layout: archi-pages
lang: en
permalink: "/architecture/data-web-app/"
title: Data Web App
ref: data-web-app
weight: 5
---

# Data API Web Application

<p><strong>Goal</strong><br/>Opening the eRegulations data through REST web services.</p>

<p><strong>Integration within the eRegulations Global System</strong><br/>It must be considered as a satellite of the eRegulations Admin web application (henceforth eRegulations-Admin-App). Even though it is self manageable, it does rely on the eRegulations-Admin-App for data population.</p>

<p><strong>Application general solution</strong><br/>The solution is build on node.js using restify for the REST requests handling and mongodb for data persistence. Each action on the eRegulations-Admin-App that has the quality of delivering public information will trigger the correspondant request (POST/PUT/DELETE) to the API Server for assuring the syncronization of data. All requests are passed through basic authorization filter (username & password) before being handled.</p>

<h2 id="p1">1. Setup</h2>

<h3>Needed software</h3>

Application can be deployed on both OSX/*nix and Windows systems. It needs following software to be installed:

<ul>
<li>Node.js - <a href="http://nodejs.org/" target="_blank">http://nodejs.org/</a> - in v0.8 or greater version</li>
<li>MongoDB - <a href="http://www.mongodb.org/downloads" target="_blank">http://www.mongodb.org/downloads</a></li>

</ul>

<strong>Environment variable</strong>

<p>PORT num - (optional) Port on which application main server should be deployed; if not provided then port 8080 is used</p>

<h3>Application specific settings</h3>

<p>The application specific settings file is config/index.js. Fill the file with the following options :</p>

<ul>

<li><code>appPath string</code> - holds the application path in case the api is executed as a sub-application inside a more general application; leave blank in case of root application</li>
<li><code>db</code> - mongodb configuration</li>
<li><code>host</code> string - database host</li>
<li><code>port</code> num - database port</li>
<li><code>username</code> string - (optional) User name (if we're using authentication)</li>
<li><code>password</code> string - (optional) Password (if we're using authentication)</li>
<li><code>systemCollectionPrefix</code> string - the common prefix for each of the system dbs</li>
<li><code>systemsCollection</code> string - the name of db collection holding all the eRegulations systems that expose their data through API</li>
<li><code>apiUsersRepository</code> - configure the name of db and collection where all the users being authorized to consume the API</li>
<li><code>dbName</code> string - name of database collection</li>
<li><code>collectionName</code> string - name of collection holding all the users</li>

</ul>

<hr>
<h2 id="p2">2. Application</h2>

<h3>Third party libraries</h3>

All modules are placed in the node_modules folder :

<table class="table table-bordered">

<tr><td><strong>restify</strong> - <a href="" target="_blank">https://github.com/mcavage/node-restify</a><br/>restify used for building REST web services<br/></td></tr>

<tr><td><strong>mongodb</strong> - <a href="https://github.com/mongodb/node-mongodb-native" target="_blank">https://github.com/mongodb/node-mongodb-native</a> <br/>MongoDB native driver<br/></td></tr>

<tr><td><strong>mongojs</strong> - <a href="https://github.com/gett/mongojs" target="_blank">https://github.com/gett/mongojs</a><br/>wrapper for the mongodb-native, that emulates the official mongodb API as much as possible<br/></td></tr>

<tr><td><strong>underscore</strong> - <a href="https://github.com/documentcloud/underscore" target="_blank">https://github.com/documentcloud/underscore</a><br/>JavaScript's functional programming helper library<br/></td></tr>

<tr><td><strong>async</strong> - <a href="https://github.com/caolan/async" target="_blank">https://github.com/caolan/async</a><br/>Flow control helper library<br/></td></tr>

</table>

<hr>
<h2 id="p3">3. Application architecture</h2>

<h3>Integration within the eRegulations Global System</h3>

See in the diagram below the two major roles played by eRegulations API server :

<ul>
<li>responding to data requests</li>
<li>keeping a synchronized version of eRegulations data by handling all the updates triggered by data management application</li>
</ul>


<a class="item" href="/images/architecture/apidiagramm.png"><img src="/images/architecture/apidiagramm.png" alt="NewImage" title="apidiagramm.png" border="0" width="600" height="328" class="img2" /></a>


<h3>Directory structure</h3>

<pre>
- app
    |__ controllers/
    |__ routes/
    |__ server.js
- config
    |__ index.js
- middletier
    |__ businessObjects/
    |__ db/
    |__ modelPrettifiers/
    |__ util/   
- app.js
- gruntfile.js
- package.json
</pre>


<h3>Application code</h3>

<p>The design of eRegulations API server follows the principles of RESTful way. From Wikipedia :</p>

<blockquote>
<li>Application state and functionality are divided into resources</li>
<li>Every resource is uniquely addressable using a universal syntax for use in hypermedia links</li>
<li>All resources share a uniform interface for the transfer of state between client and server</li>
<p>The user progresses through an application by selecting links (state transitions), resulting in the next page (representing the next state of the application) being transferred to the user and rendered for their use</p>
</blockquote>


The application follows the 3-tier architecture, grouping the presentation layer code in the app folder and the business logic in the middletier folder.

Upon receiving a request the server does the following actions:
<ol>
<li>authenticate & authorize the request by reading the authorization header. The server implements Http Basic Auth strategy.</li>
<li>if user is authorized, then the server delegates to a specific handler based on the resource identifier and the verb in the header of the request.</li>
</ol>

<h4>app</h4>

implementation of API REST server (request handling)
<ul>
<li><strong>controllers/</strong> - all the handlers for a specific resource are grouped inside a controller</li>
<li><strong>routes/</strong> - holds all the url patterns and also the mappings for a specific action on a resource</li>
</ul>

<h4>middletier</h4>

communication with the database, exposing business objects implementing different calculations on top of models.
<ul>
<li><strong>businessObjects/</strong> - objects responsable for database operations on the specific model, the pre-processing of data before presistence or altering right after retrieval from db</li>
<li><strong>db</strong> - enum of collections, common CRUD db operations and the management of db connections</li>
<li><strong>modelPrettifier/</strong> - prepares the model prior to delivery: removes inner data from the model (ids, attributes, etc), aggregates data into a readable format (the schedule info)</li>
<li><strong>util</strong> - generic utility functions</li>

</ul>
