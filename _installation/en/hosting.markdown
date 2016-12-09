---
layout: inst-pages
lang: en
permalink: "/installation/hosting/"
title: Hosting requirements
ref: hosting
weight: 2
---

# Hosting requirements

<h2 id="p2">Server-side requirements</h2>
<ul>
	<li>Windows Server 2008, 2008 R2, 2012, Windows Vista Home Premium/Business/Enterprise/Ultimate or Windows 7 (both 32bit and 64bit) or Windows 8 (both 32bit and 64bit)</li>
	<li>Microsoft .NET Framework 4.0 or higher</li>
	<li>Microsoft Internet Information Services (IIS) 7.0, 7.5, 8.0 or Visual Studio/Visual Web Developer 2008/2010/2012 built-in web server</li>
	<li>Node.js version 0.8 or higher</li>
	<li>Microsoft SQL Server 2012 (including free SQL Server Express Edition)</li>
	<li>MongoDB version 2.0 or higher</li>
</ul>

<h2 id="p3">Security requirements</h2>
The security strategy is based on the following pillars: securing the server and securing the data.
Assuring a high security of the server involves two actions:
<ul>
	<li>enabling the firewall service on the Windows Server to control both inbound and outbound traffic (it comes with predefined rules)</li>
	<li>installing an anti-virus software of choice (suggestion: Kaspersky)</li>
</ul>
The security of data is resolved by backing up regularly all the data used by the eRegulations systems.
Here you can use :
<ul>
	<li>set-up a sql data back-up tool (suggestion http://sqlbackupandftp.com/) to produce daily back-ups of eRegulations Database</li>
</ul>

<h2 id="p4">Hardware and disk space requirements</h2>
<h3>3.1. One server - minimum requirements</h3>
The minimum hardware requirements assumes one physical or virtual server that will hosts all the applications.
<table class="table">
	<tbody>
		<tr>
			<td>Procesor</td>
			<td>2GHz</td>
		</tr>
		<tr>
			<td>Memory (RAM)</td>
			<td>4GB recommended</td>
		</tr>
		<tr>
			<td>Hard Disk</td>
			<td>100 GB</td>
		</tr>
		<tr>
			<td>Hard Disk Speed</td>
			<td>10000rpm</td>
		</tr>
	</tbody>
</table>
<div class="alert alert-success"><strong>Note</strong>: The hard disk space required for all the eRegulations applications files :
	<ul style="margin-bottom: 2px !important;">
		<li>Installation files - 100MB</li>
		<li>Media files (uploaded documents, images) - 1 GB</li>
		<li>Database files - 5GB</li>
	</ul>
</div>
<h3>3.2. One server - optimal requirements</h3>
<table class="table">
	<tbody>
		<tr>
			<td>Procesor</td>
			<td>2 x Quad Core Intel Xeon Processors
			E 5520 @ 2.27Ghz</td>
		</tr>
		<tr>
			<td>Memory (RAM)</td>
			<td>16 GB</td>
		</tr>
		<tr>
			<td>Hard Disk</td>
			<td>2 x 1 TB disk</td>
		</tr>
		<tr>
			<td>Hard Disk Speed</td>
			<td>15000rpm</td>
		</tr>
	</tbody>
</table>
<h3>3.3. Distributed architecture - optimal requirements</h3>
<h4 style="margin-top: 10px;">SQL Server Database Server</h4>
<table class="table">
	<tbody>
		<tr>
			<td>Procesor</td>
			<td>Quad Core Intel Xeon Processor
			E 5520 @ 2.27Ghz</td>
		</tr>
		<tr>
			<td>Memory (RAM)</td>
			<td>8 GB</td>
		</tr>
		<tr>
			<td>Hard Disk</td>
			<td>2 x 1 TB disk</td>
		</tr>
		<tr>
			<td>Hard Disk Speed</td>
			<td>15000rpm</td>
		</tr>
	</tbody>
</table>
<h4>Windows Web Server</h4>
<table class="table">
	<tbody>
		<tr>
			<td>Procesor</td>
			<td>Quad Core Intel Xeon Processor
			E 5520 @ 2.27Ghz</td>
		</tr>
		<tr>
			<td>Memory (RAM)</td>
			<td>16 GB</td>
		</tr>
		<tr>
			<td>Hard Disk</td>
			<td>2 x 1 TB disk</td>
		</tr>
		<tr>
			<td>Hard Disk Speed</td>
			<td>15000rpm</td>
		</tr>
	</tbody>
</table>
<h4>API Server</h4>
<table class="table">
	<tbody>
		<tr>
			<td>Procesor</td>
			<td>Quad Core Intel Xeon Processor
			E 5520 @ 2.27Ghz</td>
		</tr>
		<tr>
			<td>Memory (RAM)</td>
			<td>8 GB</td>
		</tr>
		<tr>
			<td>Hard Disk</td>
			<td>2 x 1 TB disk</td>
		</tr>
		<tr>
			<td>Hard Disk Speed</td>
			<td>15000rpm</td>
		</tr>
	</tbody>
</table>

<h2 id="p5">Bandwith &amp; transfer limits</h2>
<strong>Bandwidth</strong> will determine how fast something loads on the eRegulations site. HTML pages, Images, videos, will all load quickly with the right amount of bandwidth.

The minimum recommended bandwidth is 3Mbps.

<strong>Transfer volume</strong>, measured now in GB (gigabytes) per month is a calculated value based on the number of users accessing the site. It should not be less than 10 GB in order to assure an average 700 users visiting daily the eRegulations system.