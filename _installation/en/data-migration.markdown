---
layout: inst-pages
lang: en
permalink: "/installation/data-migration/"
title: Data migration
ref: data-migration
weight: 4
---

# Data migration

<h2>Presentation of data</h2>
<p>The eRegulations Data is stored in several SQL Server Database instances and Hard Disk. <p>
	<p>We are listing below each of them and also the persistence location :</p>
	<ol>
		<li><strong>Country specific data</strong>, persisted in the SQL Server 2012 (30-dbe-CountryName) holds the following type of data:
			<ul>
				<li>procedures repository</li>
				<li>requirements repository</li>
				<li>laws repository</li>
				<li>contact repository</li>
				<li>translation of all these data</li>
				<li>country specific parameters: cost variables, etc</li>
				<li>public site related info like: procedures menu tree, feedback</li>
				<li>media files references :holds the name of the files used throughout the system</li>
			</ul>
		</li><li><strong>User accounts data</strong>, persisted in SQL Server 2008 in an instance (00-dbe-Global) centralizing the user authentication & authorization information
	</li><li><strong>Consistency review data</strong>, persisted in the SQL Server 2008 in an instance  (00-dbe-Consitency) centralizing the information for several systems located on the same server:
	<ul>
		<li>consistency review tickets & comments</li>
		<li>consistency status of steps</li>
	</ul>
</li><li><strong>System usage statistics</strong>, persisted in the SQL Server 2008 in an instance (00-dbe-Statistics) holding the statistics for several systems located on the same server
</li><li><strong>Media files</strong>, persisted on the HardDisk (Media folder) containing all the physical files in three folders: media, upload, ftp
</li><li><strong>Public site content</strong>, persisted on the HardDisk (folder Config & content) being present within the public web application in the above mentioned folders. They contain:
<ul>
<li>config - the home page information saved in json format, a file for each language of the system</li>
<li>content - holds the styles (css), images of the public site. we keep here all the personalization of the site esthetic</li>
</ul>
</li>
</ol>

<h2>Migration transport packages</h2>
<p>For migrating the data, we will use different packaging strategy to correctly apply to the specificity of each type of data.</p>
<ul>
<li>Country specific data - we will produce a file holding a full backup of the current database instance with the SQL Server tools. It will be labeled:
<span class="label label-warning">30-dbe-CountryName.bak.zip</span></li>
<li>User accounts data, Consistency review data, System usage statistics - for each of the database we will produce a script file listing INSERTs statements for the data. They will be packaged in an archive labeled:
<span class="label label-warning">00-dbe-CentralData.sql.zip</span><br>
Inside you will find 3 script files, one for each database instance:
<span class="label label-success">00-dbe-Global.sql</span>, <span class="label label-success">00-dbe-Consistency.sql</span>, <span class="label label-success">00-dbe-Statistics.sql</span></li>
<li>Media files - we will package the "Media, upload, ftp" folders content in an archive, labeled:
<span class="label label-warning">Media.zip</span></li>
<li>Public site content -  we will package the 2 folders "Config" and "content" in an archive labeled:
	<span class="label label-warning">PublicSite.zip</span>	</li>
</ul>

<h2>Migration procedures on local server</h2>
Here below the procedure to be followed in order to extract the data from the migration packages into the correspondent persistence locations on the local server.
Please proceed in the indicated order:
<h3>1. Central Data:</h3>
<ul>
	<li>extract the archive 00-dbe-CentralData.sql.zip in a findable place</li>
	<li>execute the script 00-dbe-global.sql in the context of the current 00-dbe-Global database instance, already present </li>
	<li>execute the script 00-dbe-consitency.sql in the context of the current 00-dbe-Consistency database instance, already present </li>
	<li>execute the script 00-dbe-statistics.sql in the context of the current 00-dbe-Statistics database instance, already present </li>
</ul>
<h3>2. Country Data:</h3>
<ul>
	<li>extract the 30-dbe-CountryName.bak.zip in a findable place</li>
	<li>restore the country database using the 30-dbe-CountryName.bak backup file</li>
</ul>
<h3>3. Media files: </h3>
<ul>
	<li>extract the Media.zip in a findable place</li>
	<li>locate the present eRegulations Admin WebApplication </li>
	<li>delete the current Media file in the Admin web application root folder of the eRegulations system </li>
	<li>copy the extracted media, upload, ftp folders into the Admin web application root folder</li>
</ul>
<h3>4. Public site content: </h3>
<ul>
	<li>extract the PublicSite.zip in a findable place</li>
	<li>locate the present eRegulations Public WebApplication</li>
	<li>overwrite the folders content, Config with the folders in the extracted archive</li>
</ul>

<h2 id="p4">Update the configuration files</h2>
<p>Update all the config files to reflect the systemId from the migrated data:</p>
<p>In the case of Nicaragua, SystemId is 23</p>
<p>You will have config files for the following applications:</p>
<ul>
	<li>Admin WebApp </li>
	<li>Public WebApp </li>
	<li>CRAlerts CLI</li>
	<li>Statistics CLI</li>
</ul>