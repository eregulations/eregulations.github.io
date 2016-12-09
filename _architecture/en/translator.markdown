---
layout: archi-pages
lang: en
permalink: "/architecture/translator-web-app/"
title: Translator Web App
ref: translator-web-app
weight: 3
---

# Translator Web Application


<p>
The eRegulations Translator Web Application is accessible at the same location as the Admin Web Application and behaves like a special sub-module that is activated only if the authenticated user has the "Admin-Regulation-Translator" role.
The interface is completely different from the Admin Web Application and it is built to serve to a authorized translator to update the datra of the eRegulation content in a secondary language. Here below the categories of eReegulation content that can be translated through this interface:</p>
<ul>
<li>objectives</li>
<li>blocks</li>
<li>steps</li>
<li>recourses</li>
<li>generic requirements</li>
<li>laws</li>
<li>entities in charge</li>
<li>units in charge</li>
<li>persons in charge</li>
<li>menus</li>
</ul>

<p>The translator interface access a replica version of the content that is recorded in special tables after an explicit action from the admin interface. The explicit action is "Send to translator".</p> 
<p>The idea behind this specialized interface is to create a decoupled working space to external users of the system. Their work will not directly affect the eRegulation content. The translator can work in a parallel space and only when their work is fully completed they can commit the translation at which time the data is copied back into the " _i18n" tables in the admin space. The administrator can then validate (publish) the translation or can directly make some final corrections.
When the administrator is sending an element to translator the system makes a full copy of that object and also its current translation data, it serializes it into XML format ans saves that data in specialized tables : "XMLSerializedItem" and "XMLSerializedItem_i18n".</p>

<p>It is worth mentioning an important rule that was introduces as a need of assuring a better organization of work: translator can work on one element only at one particular moment in time. The system implements this rule by demanding the explicit actions from the translator for :</p>

<ul>
	<li>start working on element</li>
	<li>stop working on element</li>
</ul>

In order to take into account the time implications of the translation activity the system records the version of the data in the original language and also a version of the translation: 

<ul>
	<li>the version of the original data is incremented each time the administrator "re-demands" a translation after a previous translation has been commited or it has the status "working in progress".</li>
	<li>the version translation is incremented with each commit</li>
</ul>

The translation can be in one status at one time:

<ul>
	<li>inexistent</li>
	<li>work in progress</li>
	<li>already commited ( a first commit exists)</li>
	<li>not commited (never commited)</li>
</ul>

<h2 id="p1">1. Application architecture</h2>

<p>The architecture of the Translator Web Application follows a 3-tiers design : Data, Business, Presentation. You can have a look at the diagram here 2.1. Application architecture.</p>

<p>The architecture follows the same Model View Presenter pattern and define the views as interfaces gaining in flexibility of implementing the view interfaces as ASPX pages or as customized views for Ajax requests. The update of translation follows the same sequence described in the previous chapters. (see 2.4. code execution flow)</p>
<p>The challenge of this application was to isolate the working of the translator from the main repository. Keep the admin data to fuel the public and the snapshot tables and also have a version of the data that the translator can focus on. Also all the eRegulations applications must share the domain model.</p>  
<p>We illustrate in the static diagram below translation contracts used for this module :</p>

<img src="/images/architecture/Translator_Static_Diagram.png" alt="Translator Static Diagram" title="Translator_Static_Diagram.png" border="0" width="570" height="600" class="img2" />

<p>For assuring the independent working space we used the idea of storing a serialized version of the model and reconstruct it for the translator application only.</p> 
<p>The translator admin application is working with only 4 tables:</p>
<ul>

<li>XMLSerializedItem</li>
<li>XMLSerializedItem_i18n</li>
<li>Workspace</li>
<li>ProcedureContext</li>
</ul>

<p>We used the same principle of interface segregation for assuring a shared contract for all the models that will force the consistency of implementation across all the models that must be translated. One key concept was the need of keeping track of the property accessors that are capable of having translated data.</p>


<hr>

<h2 id="p2">2. Presenter logic - code flow</h2>

<p>We will explain the logic inside the presenter for loading the page inside the translator space :</p>
<ol>
<li>The presenter method "InitView" is called with the parameter Id (parameter that refers to the id of the object inside the translator space)</li>
<li>A new instance of the XMLSerialializedItemBO (BusinessObjectAPI) is called</li>
<li>the businessObject API loads the XMLSerializedItem from the dabase using the correspondent IRepository instance (in our case LinqXMLSerializedItemRepository)</li>
<li>verifies the status of the current user Workspace (if the item is activ, the ask teh view to set that flag, or show a message). If another object is activ in the current user Workspace retrieve the name of that element and trigger an "ItemLocked" event passing the activ element in evenArguments</li>
<li>verify if a newer version of the same element exists and trigger an OnNewVersionReleased event if found</li>
<li>deserialize the XMLData and XMLTranslationData into Model object</li>
<li>if the original data has a new version (step 5 resulted in true) the display for the current modification the number of words added / deleted in rapport to the current version. ask the view tp display the data of latest version </li>
</ol>
<div class="alert alert-success">Note:<br/>
The client side code is capable of passing a "diff" algorithm to all the fields in case there were changes in the original data.</div>

<hr>

<h2 id="p3">3. Data structure</h2>

The translator data structure is <a href="/architecture/data-structure/">here</a>.

