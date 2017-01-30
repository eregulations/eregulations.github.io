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

A click on the button "Search" would link to the expected procedure of "Export flowers to the European Union through JKIA airport".


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

4. We give access to the procedures of the objective tree in the traditional menu of the top (under Procedures), so this menu seamlessly display what are the procedures available in the system. An option is also given to display the legacy menu links there too.


## Testing the filters

### How to configure the filters in an eRegistrations system ?

For now, we configure the filters from the administrative interface. In several weeks, we will be able to do it from the public interface, once connected to an admin account.

The filters are configured for each objective or sub-objective, in the procedures tree.

<a class="item" href="/images/news/filter3.png"><img src="/images/news/filter3.png" style="max-width: 800px;"></a>




### What to see on the public interface ?





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
