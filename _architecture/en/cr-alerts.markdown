---
layout: archi-pages
lang: en
permalink: "/architecture/cr-alerts-cli/"
title: CR Alerts CLI
ref: cr-alerts-cli
weight: 6
---

# Consistency review alerts CLI


<p>The Consistency Review Command Line Interface (CRAlerts CLI) is a console executable program that queries the eRegulations content, computes a series of statistical data related to the status of steps and send an email to all the consultant users of the system.</p>

<p>The program is intended to be executed on a regular basis by setting a weekely (or more frequent) task in the stask scheduler.</p>

<h2 id="p1">1. Application architecture</h2>

<a class="item" href="/images/architecture/eRegulations_CR_Alerts_Architecture.png"><img src="/images/architecture/eRegulations_CR_Alerts_Architecture.png" alt="ERegulations CR Alerts Architecture" title="eRegulations_CR_Alerts_Architecture.png" border="0" width="600" height="816" class="img2" /></a>

<p>The CRAlerts BusinessObject API uses 4 data aggregators :</p>

<ul>
	<li>GeneralReviewAggregator</li>
	<li>GeneralStatusAggregator</li>
	<li>ProcedureStatusAggregator</li>
	<li>StepStatusAggregator</li>
</ul>

<p>All the data aggregators implement the interface IDataAggegator that has only one method:</p>

```
void CalculateStatistics(ConsultantUser user, IList<StructuredProcedure> data,ref Dictionary<string, object> DataBag);
```

<p>The systems uses the <strong>Moustache</strong> template engine for building the html body of all the emails.</p>


<hr>

<h2 id="p2">2. Config file</h2>


<p>The CRAlert CLI program uses a config file to retrieve a list of eRegulations systems for which the job must be executed.</p>
<p>The config file, usually named "systems.xml" it must be written in the XML format and should have the with the following structure:</p>


<a class="item" href="/images/architecture/xml_mihai.png"><img src="/images/architecture/xml_mihai.png" alt="Xml mihai" title="xml_mihai.png" border="0" width="600" height="315" class="img2"/></a>

where:
<ul>
	<li>Id: the system Id (all the eRegulations systems are registered in a table SystemInstance)</li>
	<li>Name: the title of eRegulations system</li>
	<li>Url: the url where the eRegulations system is located</li>
	<li>ConnectionSring: a valid sql connection string used to connect to the DB where eRegulations data is sored</li>
	<li>LeftLogoUrl: the url of the image used as left logo in the home page </li>
	<li>RightLogoUrl: the url of the image used as right logo in the home page </li>
	<li>PublicSiteVersion: the value establishing the version of the public site. As for future reference to connect the URL Construction Paradigm for the hyperlinks referencing eRegulations public site pages</li>
</ul>
