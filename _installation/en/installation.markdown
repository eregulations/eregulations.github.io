---
layout: inst-pages
lang: en
permalink: "/installation/"
title: Installation
ref: installation
weight: 1
---

# Installation

The eRegulations system is based on several interconnected applications being responsible for assuring data entry activities, pre-processing the information and presenting it to the internet user.
The main eRegulations applications / components are listed below:
<ul>
	<li><strong>Admin WebApp</strong> - application runs on Windows Server, .NET Framework, Internet Information Services (IIS) and SQL Server.</li>
	<li><strong>Public WebApp</strong> - application runs on Windows Server, .NET Framework, Internet Information Services (IIS) and SQL Server.</li>
	<li><strong>API Server</strong> - application runs on both Windows Server with Internet Information Services (IIS) or OSX/*nix Server</li>
	<li><strong>CRAlerts CLI</strong> - application runs on Windows Server and SQL Server</li>
	<li><strong>Statistics CLI</strong> - application runs on Windows Server and SQL Server</li>
</ul>
All the eRegulations applications can be executed inside one Windows Server environment or in a distributed manner environment with each application server connecting to a central SQL server database. This allows flexibility to deploy the web/application server and SQL server on the same or on separate machines, and in larger installations it allows multiple web/application servers to be configured in a load balanced configuration for high availability.

<div class="row" style="margin-top:20px;">
	<div class="col-md-4">
		<a href="/installation/hosting/" type="button" class="btn btn-outline btn-primary">Hosting requirements</a>
	</div>

	<div class="col-md-4">
		<a href="/installation/on-local-server/" type="button" class="btn btn-outline btn-primary">Installation on local server</a>
	</div>

	<div class="col-md-4">
		<a href="/installation/data-migration/" type="button" class="btn btn-outline btn-primary">Data migration</a>
	</div>

</div>
