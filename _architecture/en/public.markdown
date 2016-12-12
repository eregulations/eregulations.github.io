---
layout: archi-pages
lang: en
permalink: "/architecture/public-web-app/"
title: Public Web App
ref: public-web-app
weight: 4
---

# Public Web Application

<p>The eRegulations Public Web Application is responsible for displaying the published version of eRegulations content. </p>

<p>The information structure can be divided in the following categories of pages:</p>

<ul>
	<li>home page</li>
	<li>about us page</li>
	<li>repositories pages : entities in charge, laws, generic requirements</li>
	<li>procedures: summary of procedure, details of step within a procedure</li>
	<li>feedback pages</li>
</ul>

<p>For authorized user the public system will display additional information:</p>
<ul>
	<li>consistency review tickets and statuses</li>
	<li>statistical report of the system </li>
</ul>

<p>The eRegulations Public web application is built on top of the ASP.Net MVC framework. For responding to ajax calls the system uses the Asp.Net Web API framework.</p>


<h2 id="p1">1. Application architecture</h2>

<p>The architecture of the Admin Web Application follows a 3-tiers design : Data, Business, Presentation. The Presentation implements a Model-View-Controller design pattern.</p>


<a class="item" href="/images/architecture/eRegulations_Public_Architecture.png"><img src="/images/architecture/eRegulations_Public_Architecture.png" alt="ERegulations Public Architecture" title="eRegulations_Public_Architecture.png" border="0" width="600" class="img2"/></a>


<p>The business layer is occupied by the reusable business library described in the Admin Web Application chapter.</p>
<p>As earlier written the public version of one procedure is retrieved from the snapshot tables. For this we added a new BusinessObjectAPI called the SnapshotBuilder that has the main responsability of loading into the domain model the data from snapshot tables. It also uses a IRepository instance to access the data layer.</p>
<p>The controllers used for displaying the data of Repositories and Consistency Tickets use the basic BusinessObjectAPI for those models.</p>

<hr>

<h2 id="p2">2. Consistency review - data structure</h2>

The data structure of the Consistency Review is <a href="/architecture/data-structure/">here</a>.
