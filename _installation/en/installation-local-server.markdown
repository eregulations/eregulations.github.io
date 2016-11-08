---
layout: inst-pages
lang: en
permalink: "/installation/on-local-server"
title: Installation on local server
ref: local-server
weight: 3
---

# Installation on local server

<h2>About</h2>
eRegulations Installer is a program that can be executed in console line interface which installs eRegulations suite:
<ul>
	<li><strong>Admin Web App</strong> : web application allowing data entry by authorized user</li>
	<li><strong>Public Web App</strong> : web application displaying the data in HTML format</li>
	<li><strong>CRAlerts CLI</strong> : program that sends email alerts regarding consistency reviews tickets or status changes</li>
	<li><strong>Statistics CLI</strong> : program that computes statistical data and saves it to the database</li>
</ul>

<h2 id="markdown-header-system-prerequisites">System Prerequisites</h2>
In order for the installer to run properly, following components need to be installed:
<ul>
	<li><strong>.NET Framework 4.0</strong> (or later)</li>
	<li><strong>Sql Server 2008</strong> (or later)</li>
	<li><strong>IIS 7</strong> (or later)</li>
</ul>

<h2>Installation Process</h2>
Once started, the eRegulations Installer does the following:
<ul>
	<li>creates needed databases</li>
	<li>extracts application files in provided path under following structure
			<pre>- eRegulations
				    |__ CLI
				        |__ ereg-alerts
				        |__ ereg-statistics
				    |__ Web
				        |__ ereg-admin
			|__ ereg-public</pre>
	</li>
	<li>creates, if needed, Translation Central Repository (folder which contains the system translation modules - shared between eRegulations systems)</li>
	<li>configures web applications in IIS (Admin Web App and Public Web App)</li>
</ul>

<h2>Environment Configuration</h2>
The installer specific settings file is <strong>Config/config.json</strong>, found in main path of application. Please configure the file with the following options:
<ul>
	<li><strong>database</strong> - database related parameters
		<ul>
			<li><strong>instanceName</strong> : database server name</li>
			<li><strong>username</strong> : username for database connection ( please note that the user must have write access on master db)</li>
			<li><strong>password</strong> : password</li>
		</ul>
	</li>
	<li><strong>webServer</strong> - IIS configuration related parameters
		<ul>
			<li><strong>adminAppBinding</strong> : url of the admin application which will be configured in IIS (eg. admin.eregulationsSystem.org)</li>
			<li><strong>publicAppBinding</strong> : url of the public application which will be configured in IIS (eg. eregulationsSystem.org)</li>
		</ul>
	</li>
	<li><strong>application</strong> - application related parameters
		<ul>
			<li><strong>country</strong> - country specific parameters
				<ul>
					<li><strong>name</strong> : current system country name</li>
					<li><strong>id</strong> : current system country code (ISO 3)</li>
					<li><strong>city</strong> : (optional) current system city</li>
					<li><strong>region</strong> : (optional) current system country region</li>
					<li><strong>currency</strong> : current system currency code (ISO 3)</li>
					<li><strong>primaryLang</strong> : current system main language code (ISO 639-1:2002)</li>
					<li><strong>secondLang</strong> : current system second language code (ISO 639-1:2002)</li>
				</ul>
			</li>
			<li><strong>googleCodes</strong> - parameters used in public web app for google monitoring and translation plugin
				<ul>
					<li><strong>googleAnalyticsAcc</strong>: (optional) google analytics account</li>
					<li><strong>googleTranslateContent</strong>: (optional) google translate plugin code</li>
				</ul>
			</li>
			<li><strong>email</strong> - parameters used for feedback and alert sending functionalities
				<ul>
					<li><strong>smtpServer</strong> : smtp server host</li>
					<li><strong>useSmtpAuthentication</strong> : use authentication for smtp server (true/false)</li>
					<li><strong>smtpUsername</strong> : (optional) smtp server username (if authentication on)</li>
					<li><strong>smtpPassword</strong> : (optional) smtp server password (if authentication on)</li>
				</ul>
			</li>
			<li><strong>feedbackAlerts</strong> - parameters used for feedback and alert sending functionalities
				<ul>
					<li><strong>sendFrom</strong> : the address from which the feedback receivers will get the alerts/feedback messages</li>
					<li><strong>sendToList</strong> : list of email addresses which will receive feedback messages by default</li>
				</ul>
			</li>
			<li><strong>installationPath</strong> : the path in which the applications will be installed (please use the escaped form of the path)</li>
			<li><strong>multilangCentralRepositoryPath</strong> : the path to the translation central repository (if already exists - please provide the escaped path to it, if not, please provide the desired escaped path - including the folder name )</li>
		</ul>
	</li>
</ul>

<h2 id="markdown-header-further-information">Further Information</h2>
If shared database 00-dbe-global does not exist, the installer will create by default an admin user with the following credentials: admin/1234. If database exists, all master users will have admin access to the newly created system.

The eRegulations CRAlerts and Statistics applications are designed to be executed on a regular basis in task scheduler. For regular job execution, please program the execution of execStatistics.bat/execCRAlerts.bat files found in main path of each CRAlerts/Statistics application in task scheduler.

The Admin Web App also offers the option of being synchronized with an eRegulations API Server: <a href="https://github.com/egovernment/eRegulations-api">https://github.com/egovernment/eRegulations-api</a>. For setting up the communication between Admin App and API Server, please complete the Admin Web App web.config file as follows:
<ul>
	<li>uncomment the childs of configuration&gt;Unity&gt;container "ApiPublishers" element</li>
	<li>fill the settings found in configuration&gt;applicationSettings&gt;Unctad.eRegulations.APIPublisher.Properties.Settings section
		<ul>
			<li><strong>eRegApiBaseURI</strong> : API root url</li>
			<li><strong>CountryCode</strong> : the current system name</li>
			<li><strong>APIUsername</strong> : username for api authentication</li>
			<li><strong>APIPwd</strong> : password for api authentication</li>
		</ul>
	</li>
</ul>
