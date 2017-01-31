---
layout: page
lang: en
permalink: "/new/filters/"
title: Filters
ref: new-filters
weight: 1
userOnly: true
---

# Filters

## What are the filters ?

Filters allow to take into account the specific situation of different users relating to some elements in an eRegulations procedure. 

The notion of "filter" in eRegulations is the same as "determinants" in eRegistrations. Filters are defined as a catalog and linked to elements in a system.

Example : a user visits the TradePortal system of Kenya, thinking the following: 

<p class="text-white" style="background-color: #999;">I, exporter, want to export flowers to Amsterdam going though the JKIA airport</p>

The user would land on the homepage of the TradePortal and use the following selectors:

<a class="item" href="/images/news/filter1.png"><img src="/images/news/filter1.png" style="max-width: 800px;"></a>

to set it according to his/her interest :

<a class="item" href="/images/news/filter2.png"><img src="/images/news/filter2.png" style="max-width: 800px;"></a>

A click on "Search" button would link to the expected procedure of "Export flowers to the European Union through JKIA airport".


Other examples of procedures that people search in eRegulations are: 

<p class="text-white" style="background-color: #999;">(Bhutan) I, individual trader, want to register a company of asset inferior to 100'000 US$ outside of Thimphu on a private land.</p>

<p class="text-white" style="background-color: #999;">(Vietnam) I, legal representative, want to register a company with simple office lease in Hanoï in the Ho-Loa industrial Park.</p>


We can extract some patterns out of those sentences, and rank them in filters:

<table class="table table-bordered">
	<thead>
		<tr>
			<th>Filter</th>
			<th>Example in Kenya</th>
			<th>Example in Bhutan</th>
			<th>Example in Vietnam</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Operation (verb,action)</td>
			<td>Import / export</td>
			<td>Business creation</td>
			<td>Business creation</td>
		</tr>
		<tr>
			<td>Object/quality (of the operation)</td>
			<td>Flower, cement, petrol, etc.</td>
			<td>Size of the company (with or without environmental certificate)</td>
			<td>Simple office lease / land lease</td>
		</tr>
		<tr>
			<td>Location 1</td>
			<td>Exit point / Entry point</td>
			<td>Inside Thimphu, Outside Thimphu, In industrial Estate</td>
			<td>Hanoi, Da Nang, etc. </td>
		</tr>
		<tr>
			<td>Location 2</td>
			<td>Destination / Origin</td>
			<td>Private land / governmental land</td>
			<td>Inside industrial zone /outside industrial zone/ho-loa park</td>
		</tr>		
		<tr>
			<td>Operator</td>
			<td>Transport/carrier/customs</td>
			<td>Lawyer/representative/individual-trader</td>
			<td>Lawyer/representative/individual-trader</td>
		</tr>						
	</tbody>
</table>

In those cases, the filters are similar among 3 eRegulations systems, but they could be totally different among the systems.


## Changes expected in eRegulations systems

The changes brought by the filters feature will be the following:

1. As mentioned above, the way user access to the procedure will be through the selectors or the homepage. We will keep the traditional menu of the top (under Procedures) but we hope that it will not be the main way visitors arrive to the procedures. 

2. The selectors will be on all the pages of the public interface, allowing direct jumps from one procedure to an other.

3. The menu pages as we know them will become less important. Their function was to list all the available procedure for a given objective, and provide explanation texts to the visitors about each procedure.<br>
This function will be replaced by dynamic pages where user will be given a choice of links to procedure if his/her search results in more than one procedure.

4. We give access to the procedures of the objective tree in the traditional menu of the top (under Procedures), so this menu seamlessly display all the procedures available in the system.<br>If we prefer to display the old menus, an option is available to do so.


## Testing the filters

### How to configure the filters in an eRegistrations system ?


<ul class="step-text">
  <li>
    <h5>Connect to the admin interface and go to the Procedures tree</h5>
    <p>For now, we configure the filters from the administrative interface. In several weeks, we will be able to do it from the public interface, once connected to an admin account.</p>
    <p>The filters are configured for each objective or sub-objective, in the procedures tree (that you access by clicking on Content / Procedures).</p>
  </li>
  <li>
    <h5>Click on the expected objective, and go to the "Filters" tab</h5>
    <p><a class="item" href="/images/news/filter3.png"><img src="/images/news/filter3.png" style="max-width: 800px;"></a></p>
  </li>

  <li>
    <h5>Add a filter</h5>
    <p>Click on the black button "Add a filter". It opens a window with the filters that have already been created in the system. You can click on one of them to reuse it. If the expected filter is not available, click on the button "New filter".</p>
	<p><a class="item" href="/images/news/filter5.png"><img src="/images/news/filter5.png" style="max-width: 800px;"></a></p>
	
    <ul>
      <li>
        <h5>Give a name to your filter</h5>
        <p>This name is used to recognised the filters in the admin interface, it will not appear on the public interface. Whatsoever it is recommended to give it a meaningful name.</p>
      </li>
      <li>
        <h5>Add all the options of the filter</h5>
        <p>An "option" is one possibility of value of the filter. It is possible to add more options after the creation of the filter, and to re-order the options among themselves.</p>
        <p><a class="item" href="/images/news/filter6.png"><img src="/images/news/filter6.png" style="max-width: 420px;"></a></p>
      </li>
      <li>
        <h5>Save the newly created filter</h5>
        <p>If you do not save, the filter will not appear in the list. Note that we are thinking of removing all "Save" button in future versions of eRegulations, and have an "Autosave" function, as in Google Docs.</p>
      </li>
    </ul>
  </li>

  <li>
    <h5>See the filter added in the "Filters" tab and give it a contextual name</h5>
    <p>This name will be the label that will appear in the selector by default. It has to be meaningful so the user knows what to expect from the selector. It can be the same than the filters name.</p>
  </li>

  <li>
    <h5>Check what option(s) apply to the current objective</h5>
    <p>This links the procedure to one or more option(s) of the filter: when the option will be selected by the user from the public interface, this procedure will be the procedure (or one of the procedures) displayed to the user.</p>
    <p><a class="item" href="/images/news/filter7.png"><img src="/images/news/filter7.png" style="max-width: 800px;"></a></p>
  </li>
  
  <li>
    <h5>Add all the other filters needed in the branch</h5>
    <p>Repeat the steps 3, 4, 5 to add all the filters.</p>
  </li>
  
  <li>
    <h5>Browse all the objectives and sub-objectives and select the corresponding options of the filters.</h5>
    <p>If a filter is missing, you can add it from anywhere in a branch. The filter will appear in all the branch.</p>
    <p>If an option of a filter is missing, you can add it from anywhere in a branch. The option will appear for the given filter in all the branch.</p>
  </li>    
</ul>

<div class="callout callout-info" role="alert">
	<h4>Rules in the procedures tree</h4>
	<ul>
		<li>If an option is selected for a filter in an objective, the option is selected by default in the children of the objective.</li>
		<li>Any change in the filters names and options is applied in the all procedure tree.</li>
	</ul>
</div>


### What to see on the public interface ?

<div class="row">

	<div class="col-md-6 col-sm-12"><p><a class="item" href="/images/news/filter8.png"><img src="/images/news/filter8.png" style="max-width: 100%;"></a></p>
</div>

	<div class="col-md-6 col-sm-12">
		<p>The filters are not yet ready from the homepage, so unfortunately you can not play with this new feature. However, the filters are already available from the pages of each objective.</p>

		<p>So, once you have set all the filters and options that apply to each objectives and sub-objectives of the procedure tree, go to the public interface and access the page of each objective from the traditional menu under "Procedures". </p>

<p>You will see the filters, as per the example on the left. </p>

<p>You can then see if your filters configuration is right, and modify it if needed.</p>

<p>Let Vianney and Roxana know if you find bugs or things that could be improved... Thank you!</p>
	</div>


</div>








## Systems under tests.

Not all the eRegulations systems are under test. We have created new eRegulations system for countries in which we would like to test the feature. Find below the links to those systems.

You can connect to the test system with your usual credentials.

<table class="table table-bordered">

	<thead>
		<tr>
			<th>Country</th>
			<th>Type of system</th>
			<th>URL for testing the filters feature</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>El Salvador</td>
			<td>eRegulations</td>
			<td><a href="test-elsalvador.eregulations.org" target="_blank">test-elsalvador.eregulations.org</a></td>
		</tr>
		<tr>
			<td>Kenya</td>
			<td>Trade Portal</td>
			<td><a href="test-kenya.tradeportal.org" target="_blank">test-kenya.tradeportal.org</a></td>
		</tr>		
		<tr>
			<td>Rwanda</td>
			<td>Trade Portal</td>
			<td><a href="test-rwanda.tradeportal.org" target="_blank">test-rwanda.tradeportal.org</a></td>
		</tr>
		<tr>
			<td>Bhutan</td>
			<td>eRegulations</td>
			<td><a href="test-bhutan.eregulations.org" target="_blank">test-bhutan.eregulations.org</a></td>
		</tr>		
	</tbody>
</table>
