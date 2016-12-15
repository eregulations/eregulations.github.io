---
layout: inst-pages
lang: fr
permalink: "/fr/installation/"
title: Installation
ref: installation
weight: 1
---

# Installation du système eRegulations

Le système eRegulations est composé de plusieurs applications interconnectées qui coordonnent l’entrée des données, l’organisation des informations et leur présentation en ligne.

Les principales applications composant le système eRegulations sont décrites ci-après :  

<ul>
	<li><strong>Admin WebApp</strong> - Application fonctionnant avec Windows Server, .NET Framework, Internet Information Services (IIS) and SQL Server.</li>
	<li><strong>Public WebApp</strong> - Application fonctionnant avec Windows Server, .NET Framework, Internet Information Services (IIS) and SQL Server.</li>
	<li><strong>API Server</strong> - Application fonctionnant à la fois avec Windows Server et Internet Information Services (IIS) ou OSX/*nix Server</li>
	<li><strong>CRAlerts CLI</strong> - Application fonctionnant avec Windows Server et SQL Server</li>
	<li><strong>Statistics CLI</strong> - Application fonctionnant avec Windows Server et SQL Server</li>
</ul>

Toutes les applications composant eRegulations peuvent être exécutées dans un seul environnement Windows ou distribuées dans un environnement où chaque application se connecte à un serveur central avec une base de données SQL. Ceci permet un maximum de flexibilité pour déployer le serveur pour l’application web et le serveur SQL sur une même machine ou sur des machines séparées, et dans le cadre d’installations plus grandes, de configurer plusieurs serveurs pour les applications/web de manière à équilibrer la charge et obtenir une meilleure connexion en ligne.

<div class="row" style="margin-top:20px;">
	<div class="col-md-4">
		<a href="/fr/installation/hebergement/" type="button" class="btn btn-outline btn-primary">Besoins techniques en matière d'hébergement</a>
	</div>

	<div class="col-md-4">
		<a href="/fr/installation/sur-serveur-local/" type="button" class="btn btn-outline btn-primary">Installation sur un serveur local</a>
	</div>

	<div class="col-md-4">
		<a href="/fr/installation/migration-des-donnees/" type="button" class="btn btn-outline btn-primary">Migration des données</a>
	</div>

</div>