---
layout: archi-pages
lang: en
permalink: "/architecture/stats-cli/"
title: Statistics CLI
ref: stats-cli
weight: 8
---

# Statistics CLI

<p>The Statistics Review Command Line Interface (CRAlerts CLI) is a console executable program that queries the eRegulations content, computes a series of statistical data related to eRegulations content.</p>

<p>The program is intended to be executed daily from tuesday (early hours) until saturday (early hours) by setting a task in the stask scheduler. It calculates all the indicators and stores them in the database flagging them with the date of the previous calendaristical day.</p>

<h2 id="p1">1. Application architecture</h2>

<p>The Statistics BusinessObject API stores data calculated for the followind indicators:</p>
<ul>
<li>Total Number of published procedures</li>
<li>Total number of procedures</li>
<li>Total number of certified procedures</li>
<li>Total number of published steps</li>
<li>Total number of entities in charge</li>
<li>Total number of units in charge</li>
<li>Total number of persons in charge</li>
<li>Total number of laws</li>
<li>Total number of generic requirements</li>
<li>Total number of results of steps</li>
<li>Total number of feedbacks</li>

</ul>

<p>All the indicators implement the interface IIndicatorSet that has only one method:</p>

```
public void SaveStatistics(List<StructuredProcedure> data, SystemInfo system, ERegAppContext ctt);
```

<h2 id="p2">2. Config file</h2>

<p>The Statistics program uses a similar config file like CRAlerts CLI in order to retrieve a list of eRegulations systems for which the job must be executed.</p> 
<p>See:  <a href="/architecture/cr-alerts-cli/">7.2. Config file</a></p>

<hr>

<h2 id="p3">3. Data structure</h2>

The statistics data structure is <a href="/architecture/data-structure/">here</a>.
