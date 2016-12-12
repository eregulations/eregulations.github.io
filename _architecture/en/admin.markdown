---
layout: archi-pages
lang: en
permalink: "/architecture/admin-web-app/"
title: Admin Web App
ref: architecture-admin-web-app
weight: 2
---

# Admin Web Application

<p>The eRegulations Admin WebApp allows a user with the correct credentials to enter the back office space of the system and to update the eRegulations content.</p>
<p>The management of information is built on three main pillars that target the main areas of the application:</p>
<ol>
	<li><strong>eRegulation Content</strong><br>
		Here below the principal repositories:
		<ul>
			<li>procedures, blocks of steps, steps and recourses</li>
			<li>contacts (entities, units and persons in charge)</li>
			<li>requirements</li>
			<li>laws</li>
			<li>media library</li>
		</ul>
	</li>
	<li><strong>Public Interface (public web pages)</strong><br>
		The admin application is also responsible for the information displayed on the public web site of e-regulations. We identified the following editable elements:
		<ul>
			<li>layout home page</li>
			<li>the procedure menus that assures not only direct linking with the procedures in the eRegulations content but supplementary visual information to be displayed in the public pages</li>
			<li>about us page</li>
		</ul>
	</li>
	<li>
		<strong>Country parameters (system utility-belt)</strong><br>
		In this are the system groups several utility modules that helps the administrator manage auxiliary information present within the system:
		<ul>
			<li>user management</li>
			<li>feedbacks listing</li>
			<li>country settings (cost variables catalogue, foreign currencies used in the public system, third parties catalogue)</li>
			<li>label translation for the admin/public web pages</li>
			<li>history tracking of eRegulations content modifications</li>
			<li>files maintenance (possibility of file name changing into more web friendly names for uploaded documents or images)</li>
		</ul>
	</li>
</ol>

<h2>1. Application architecture</h2>
<p>The architecture of the Admin Web Application follows a 3-tiers design : Data, Business, Presentation.</p>
<p>We implemented the Interface Segregation Principle for decoupling the Data Access Layer implementation from the contract definition allowing in the future for easy update in case of more powerful technologies. Also the Data Access Layer was designed to implement the Repository pattern and Unit of Work pattern to assure the transactional action of persisting the data.</p>
<p>Also for the web application we implemented the Model View Presenter pattern and define the views as interfaces gaining in flexibility of implementing the view interfaces as ASPX pages or as customized views for Ajax requests.</p>
<p>The domain modeling respects the Domain Design Driven principles by defining several Root Aggregate Model responsible for the persistence of all their collections of composite models.</p>
<p>We illustrate in the following diagram the layered architecture of the solution :</p>
<a class="item" href="/images/installation/eRegulations_Admin_Architecture.png">
	<img src="/images/installation/eRegulations_Admin_Architecture.png" title="eRegulations_Admin_Architecture.png" border="0" width="589" height="600"/>
</a>

<h2>2. Data-concepts and states</h2>
<p>The system is built around the following main concepts:</p>
<ul>
	<li>Objective  – a concrete investment operation presented as a ordered list of blocks</li>
	<li>BlockOfSteps – a ordered list of steps with a high level of cohesion</li>
	<li>Step – any interaction necessary to achieve the objective</li>
</ul>
<p>The Objectives are organized in a tree-way, in the sense that first there can be defined a list of main objectives, further permitting a detailed filtration of them in sub-objectives.</p>
<p>A Block of steps can be qualified as optional therefore all the contained steps will be treated as optional within the objective. Also a block is responsible for setting the order of steps and also the relation of each step with the previous one (either parallel, alternative or sequential) </p>
<p>A Step is described with several categories of info:</p>
<ul>
	<li>general info</li>
	<li>results of steps</li>
	<li>contact</li>
	<li>requirements</li>
	<li>costs</li>
	<li>timeframe</li>
	<li>legal frame</li>
	<li>additional info</li>
	<li>recourse</li>
</ul>
<p>The system is also the manager of several repositories that are highly linked to the description of one step. They are self-manageable repositories </p>
<ul>
	<li>Entities in charge</li>
	<li>Units in charge</li>
	<li>Persons in charge</li>
	<li>General requirements ( downloadable forms,  sample forms, online form links, documents, etc)</li>
	<li>Laws (articles, full laws - either web links for online bookmarking or uploaded documents)  </li>
	<li>Media library (all the documents uploaded are stored in media library in logical objects that decouples the media file from the database reference for easy maintenance)</li>
</ul>
<p>All the eRegulations content follows the principle of internationalization by providing the data in one principal language, usually the country official language and in a secondary language, usually an international language. </p>
<p>All the data-entry form will assure the persistence of data in the principal language leaving to special graphical interfaces for translation of content. There is also a special "external admin interface" called the Translator Admin WebApp that will allow an authorized translator to enter a specialized backoffice and update/request for publication of translation of content.</p>

<h4>Managing the State of a Data</h4>
<div class="row-fluid">
	<div class="span8">
		<p>Procedure, BlockOfSteps and Step are stateful objects in the sense that at any time any of it can have only one state.</p>
		<p>The possible states are:</p>
		<ul>
			<li>MODIFIED</li>
			<li>PUBLISHED</li>
		</ul>
		<p>The following diagram describe the lifecycle of a Step, and the actions which will change its present state :</p>
	</div>
	<div class="span4">
		<a class="item" href="/images/installation/eRegulations_Admin_Architecture.png"><img src="/images/installation/eRegulations_Admin_Architecture.png" width="156" height="232"/></a>
	</div>
</div>
<p>When published the data is stored in a different format that is less normalized, still highly optimized for data-consumption systems.</p>
<p>The system is capable of storing a complete snapshot of a procedure at a specified moment in time. A procedure can have several snapshots that will allow us to reconstruct the full version of that procedure at that particular time. When taking this snapshot the system crawls through the full graph of domain model in order to retrieve the information for root objects as well as for all the dependencies.</p>
<p>The snapshots are persisted in special tables in the database, tables that are prefixed with "snapshot_".</p>
<p>The snapshots tables have been designed for fast retrieval and query operations and are a less-normalized replica of the eRegulations content. A special record of the snapshots data is the current snapshot which responds to the need of frequent publish actions of the current eRegulations data. </p>
<p>Each time we publish a stateful object the correspondent snapshot data is reconstructed.  </p>
<hr>
<h2 id="p3">3. Domain model</h2>
<h4>Step context diagram</h4>
The diagram below will illustrate as example the domain modeling of the Step as the Root Aggregate Class and all the collection of bound classes.
<a class="item" href="http://help.eregulations.org/wp-content/uploads/2013/06/StepContextDiagram.png"><img src="http://help.eregulations.org/wp-content/uploads/2013/06/StepContextDiagram.png" alt="StepContextDiagram" title="StepContextDiagram.PNG" border="0" width="600" height="496" class="img2"/></a>

The entire model of the eRegulations system has been implemented following a Domain Driven Design approach.

<h4>eRegulations data structure</h4>
The structure of the data is <a href="http://help.eregulations.org/?p=5680#p1" target="_blank">here</a>.
<hr>
<h2 id="p4">4. Code execution flow</h2>
<p>We will illustrate in this section the code execution flow for two possible cases of user interaction with the admin web application.</p>
<ul>
	<li>requesting a new page</li>
	<li>triggering an action on the page (update information, publish, change the order of elements, etc)</li>
</ul>
<h4>Requesting a new page</h4>
<a class="item" href="http://help.eregulations.org/wp-content/uploads/2013/06/Page_Get_Sequence_Diagram.png"><img src="http://help.eregulations.org/wp-content/uploads/2013/06/Page_Get_Sequence_Diagram.png" alt="Page Get Sequence Diagram" title="Page_Get_Sequence_Diagram.png" border="0" width="600" height="477" class="img2" /></a>
<p>Requesting a new page will involve the creation of a new instance of System.Web.UI.Page. Depending on the page requested the Asp.Net Page must implement the correspondent IView interface.</p>
<div class="alert alert-success" >We will exemplify for viewing the details page of one step:<br/>
1. User makes a request in the browser by clicking on a hyperlink. The request will send as a query parameter the ID of the requested step.</div>
Here the sequence of code:
<ol>
	<li>IIS identifies the requested resource as "StepGeneral.aspx" inside the admin application, so it forwards the request to our application</li>
	<li>Asp.Net creates a new instance of the object "Views_Regulation_StepGeneral"</li>
	<li>Asp.Net trigger the event "Page_Load"</li>
	<li>Inside the "Page_Load" we create a new instance of the presenter sending in the constructor the current instance of Views_Regulation_StepGeneral as this class implements the interface IStepView and the AppContext which is an application context that travels through all the layers. The AppContext is created each time a request is intercepted by our application. It is cached through the duration of the request in the HttpContext</li>
	<li>the newly created presenter will call the method InitView send the stepId as parameter</li>
	<li>the presenter holds all the presentation logic. It has a reference of the "IView" interface which will use for displaying the information. Still is not aware of how this interface is implemented (in our case is the System.Web.UI.Page)</li>
	<li>the presenter will create a new instance of the BusinessObjectAPI related to our need (in our case StepBO)</li>
	<li>the BusinessObjectAPI holds a reference to the Root Aggregate Class (in our case Step). the presenter creates a new instance of the model, it sets the Id of the model  and it attaches it to the BusinessObjectAPI.</li>
	<li>the presenter demand the BusinessObjectAPI to load the model</li>
	<li>the BusinessObjectAPI will call the RepositoryFactory in order to retrieve an instance of IRepository that will use for talking to the DataLayer (it will return an instance of LiqRepository)</li>
	<li>the BusinessObjectAPI uses the IRepository instance and load the model from the data (the repository will call a SQL query that will be executed against the SQL Server DB and the load the model with the db data)</li>
	<li>the BusinessObjectAPI holds a collection of errors in case any operation performed raised an error</li>
	<li>the presenter verifies if the load of model was ended successfully and if so it tells the IView (in our case the  Regulation) to display the details of the model . If the process of loading the data failed, the presenter calls the "ShowErrors" method of the IView to display the errors</li>
	<li>inside the System.Web.UI.Page methods/properties of the IView implementation we set the data to html elements</li>
	<li>the System.Web.UI.Page finishes the cycle and display the html output</li>
</ol>
<br/>
<h4>Trigger an action on the page (update)</h4>
<a class="item" href="http://help.eregulations.org/wp-content/uploads/2013/06/Page_Post_Sequence_Diagram.png"><img src="http://help.eregulations.org/wp-content/uploads/2013/06/Page_Post_Sequence_Diagram.png" alt="Page Post Sequence Diagram" title="Page_Post_Sequence_Diagram.png" border="0" width="600" height="590" class="img2" /></a>
<p>Sending a post request to the server is 99% made through an Ajax call (with a XMLHttpRequest). The end point is a static method in the aspx page having the attribute [WebMethod].</p>
<p>Inside this static method we create an instance of the custom view that implements our IView interface (IStepView). We will use the same presenter (StepPresenter) together with our custom view in order to achieve our updating purpose. The difference is the transport of all the data that the browser will exchange with the server. In the case of the Ajax call we encapsulate the data in Data Transfer Objects (DTO) which are light objects holding only property fields. In the case of classic Http post request the transport would have been the form input collection send either encoded in the url as query string or send as payload inside the body of the http request message.</p>
<p>
All the custom views are extended from a base class called BaseWebView that holds all utilities needed by all the custom views.</p>
<p>
The AppContext is also created each time a request is handled. It is also cached in the current HtppContext managed by the Asp.Net framework.</p>
<div class="alert alert-success">
We will exemplify for updating the details page of one step:
1. User clicks on the "SAVE" button inside the step page. The client side code will wrap all the data from the editable fields in a JSON object and the sends a new XMLHttpRequest to the endpoind " StepGeneral.aspx/Update" with the payload the newly JSON object that will deserialize into a DTO C# Object and a ID parameter with the value equal to the StepID.
</div>
<p>Here the sequence of code:</p>
<ol>
<li>IIS identifies the requested resource as "StepGeneral.aspx/Update" inside the admin application, so it forwards the request to our application</li>
<li>Asp.Net searches for the static method "Update" having the [WebMethod] attribute inside the class behind the "StepGeneral.aspx" page and calls this method
</li>
<li>we retrieve the AppContext
</li>
<li>create a new instance of our custom view that implements the interface IStepView (in our case UpdateView). Send in the constructor the DTO received
</li>
<li>create a new instance of the presenter sending the instance of our custom view and the AppContext
</li>
<li>the newly created presenter will call the method Update send the stepId as parameter
</li>
<li>the presenter holds all the presentation logic. It has a reference of the "IView" interface which will use for retrieval of all the necessary information to update the model. Still is not aware of how this interface is implemented (in our case is the instance of CustomView)
</li>
<li>the presenter will create a new instance of the BusinessObjectAPI related to our need (in our case StepBO)
</li>
<li>the BusinessObjectAPI holds a reference to the Root Aggregate Class (in our case Step). the presenter creates a new instance of the model, it sets the Id of the model  and it attaches it to the BusinessObjectAPI.
</li>
<li>the presenter demand the BusinessObjectAPI to load the model
</li>
<li>the BusinessObjectAPI will call the RepositoryFactory in order to retrieve an instance of IRepository that will use for talking to the DataLayer (it will return an instance of LiqRepository)
</li>
<li>the BusinessObjectAPI uses the IRepository instance and load the model from the data (the repository will call a SQL query that will be executed against the SQL Server DB and the load the model with the db data)
</li>
<li>if no errors encountered the presenter will ask the view to update the model. As our custom view received through the constructor the DTO sent by the user it will use it to update the model.
</li>
<li>then the presenter will ask the IRepository instance to persist the modifications
</li>
<li>the BusinessObjectAPI holds a collection of errors in case any operation performed raised an error
</li>
<li>the presenter verifies if the update of model was ended successfully and if so it raises an event called SavedSuccessfully. (normally in the custom view you will write an SavedSuccessfullyHandler where you will have a flag holding the operation response. If the process of loading the data failed, the presenter calls the "ShowErrors" method of the IView to display the errors (the custom view will hold the errors inside a collection of errors)
</li>
<li>the webMethod then verifies if the success flag of the custom view is true and sends a ok message to the browser. If custom view has errors inside its collection, the webMethod will throw an ApplicationException with the message holding the serialized version of all the view errors.</li></ol>
<hr>
<h2 id="p5">5. Procedure snapshots</h2>
<p>As already mention the system allows you to register a full snapshot replica of one procedure. The snapshot is saved in specialized tables that are less normalized and holds the data in both the principal and secondary languages.</p>
<p>Each time a user clicks on "Save snapshot" button in the admin interface the system makes a deep copy of the data for one procedure.</p>
<p>The data saved for one procedure is:</p>
<ul>
<li>objective full data</li>
<li>blocks of steps full data</li>
<li>steps full data (and for each element used form the Repositories it copies the current full data: full data for GenericRequirement, Law, EntityInCharge, UnitInCharge, PersonInCharge)</li>
</ul>
<p>The last undated snapshot, called also the "current snapshot" is used for keeping the current published data of eRegulations procedures content.</p>
<p>Also the eRegulations Data API Publisher retrieves the information for one procedure from the current snapshot and send it to the eRegulations Data API Server.</p>
<p>The reconstruction of the current snapshot of one procedure is triggered by each of the following events:</p>
<ul>
<li>publish an objective
</li><li>publish a block
</li><li>publish a step
</li><li>publish a recourse
</li><li>update an item in GenericRequirement repository for all the procedures where that GenericRequirement is used
</li><li>update an item in Law repository repository for all the procedures where that Law is used
</li><li>update an item in EntityInCharge repository repository for all the procedures where that EntityInCharge is used
</li><li>update an item in UnitInCharge repository repository for all the procedures where that UnitInCharge is used
</li><li>update an item in PersonInCharge repository repository for all the procedures where that PersonInCharge is used </li></ul>
<div class="alert alert-success">
<strong>Note:</strong>
The tables do not have a strong link between them, there are no foreign keys that enforce the restriction for the data, as the data is automatically generated through the execution of special stored procedures easily identied as they all holder the "snapshot" word in their names:
<ul style="margin-bottom:2px !important;">
<li>sp_snapshot_get…</li>
<li>sp_take_snapshot…</li>
</ul>
</div>
The table of the structure of the snapshots is <a href="http://help.eregulations.org/?p=5680#p2" target="_blank">here</a>.
<hr>
<h2 id="p5">6. History tracking of eRegulations content modifications</h2>
<p>The eRegulations domain model is fully aware of "dirty" properties and right before updating the model into the database it iterates through all the models registered in the DataContext (RootAggregate object and all the aggregate/composite objects) and stores the modifications of those updated properties.</p>
<p>A "dirty property" of an object is that property that changed its original value, the original value being the one retrieved from the database.</p>
<p>
As described earlier in the document the process of updating a model in the database implies the first loading of the current data from the database , update only a precise list of properties from that model (depending in which context you are) and then ending by persisting the modifications in the database.</p>
<p>
The implementation of IRepository is capable of having this low-level verification the moment before throwing all the updates in the database. It is based on the DataContext that assures the Unit of Work action of persisting the data. </p>
<p>We will list <a href="http://help.eregulations.org/?p=5680#p3" target="_blank">here</a> the structure of the audit tables that hold the original and modified value of each field of the model. It also takes account the root aggregate object and the relations of dependent objects to that root aggregate object.
<hr>
<h2 id="p5">7. Label translation</h2>
<p>The eRegulation Admin Interface & Public Interface static texts are fully managed by the eRegulations system . All the titles, all the messages, all the labels are updatable through the "Country parameters -> System translation" page.</p>
<p>The texts are stored in sequential files organized in a tabular manner:</p>
labelId | labelTranslationInLang1 | labelTranslationInLang1 | ...
<p>The texts are organized in several files following a logical separation of contextual ussage. The totality of files gives as the translation dictionary used by the system.</p>
<p>One system works with two dictionnaries: Local and Central. A central dictionary can be used by several admin systems installed on the same server. When looking up a certain label the system will look first if the translationModule (file) exists in the local dictionary and if the module contains a local translation of that label. If found the system will return that translation. If the translation is not found in the local dictionary the system will look it up in the central repository and it will return the translation found.</p>
<p>The call for the translation of a label is:</p>
<pre>GetMultilangValue("labelKey", "default translation text", "translationModule")</pre>
