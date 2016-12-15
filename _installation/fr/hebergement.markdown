---
layout: inst-pages
lang: fr
permalink: "/fr/installation/hebergement/"
title: Hébergement du système
ref: hosting
weight: 2
---

# Moyens techniques en terme d'hébergement du système

## Caractéristiques minimales côté serveur 

<ul>
	<li>Windows Server 2008, 2008 R2, 2012, Windows Vista Home Premium/Business/Enterprise/Ultimate or Windows 7 (à la fois 32bit et 64bit) ou Windows 8 (à la fois 32bit et 64bit)
</li>
	<li>Microsoft .NET Framework 4.0 ou versions ultérieures</li>
	<li>Microsoft Internet Information Services (IIS) 7.0, 7.5, 8.0 ou Visual Studio/Visual Web Developer 2008/2010/2012 configuré pour web-server</li>
	<li>Node.js version 0.8 or ou versions ultérieures
</li>
	<li>Microsoft SQL Server 2012 (including free SQL Server Express Edition)</li>
	<li>MongoDB version 2.0 or ou versions ultérieures</li>
</ul>


## Besoins techniques en matière de sécurité

La stratégie sécurité est basée sur les axes suivants : La stratégie sécurité est basée sur les axes suivants.
Assurer un haut niveau de sécurité pour le serveur implique deux actions au moins:

<ul>
	<li>Permettre au service ce Pare-feu du serveur Windows de contrôler  à la fois le trafic entrant et sortant (ce qui est le cas par défaut)
</li>
	<li>Installer un logiciel anti-virus (suggestion : Kaspersky)
</li>
</ul>

La sécurité des données est assurée par un processus de sauvegardes régulières de toutes les données utilisées par les systèmes eRegulations.

Un exemple de ce qui peut être utilisé :

<ul>
	<li>installation d’un outil de sauvegarde de données SQL (suggestion http://sqlbackupandftp.com/) pour procéder à des sauvegardes quotidiennes des bases de données eRegulations</li>
</ul>


## Besoins techniques en matière de disque dur et d’espace disque

<h3>3.1. Un seul serveur – installation a minima
</h3>
Les besoins minimum en matière de disque dur sont un serveur physique ou virtuel pour héberger toutes les applications.
<table class="table">
	<tbody>
		<tr>
			<td>Processeur :	2GHz
</td>
			<td>2GHz</td>
		</tr>
		<tr>
			<td>Mémoire (RAM) </td>
			<td>4GB recommandé</td>
		</tr>
		<tr>
			<td>Disque dur </td>
			<td>100 GB</td>
		</tr>
		<tr>
			<td>Vitesse Disque dur </td>
			<td> 10000rpm</td>
		</tr>
	</tbody>
</table>
<div class="alert alert-success"><strong>A noter </strong>: L’espace disque requis pour les fichiers des applications eRegulations  :
	<ul style="margin-bottom: 2px !important;">
		<li>Fichiers d’installation - 100MB</li>
		<li>Fichiers Média (documents, images) - 1 GB</li>
		<li>Fichiers Bases de données - 5GB</li>
	</ul>
</div>
<h3>3.2. Un seul serveur – installation optimale</h3>
<table class="table">
	<tbody>
		<tr>
			<td>Processeur</td>
			<td>2 processeurs Quad Core Intel Xeon
E 5520 @ 2.27Ghz
</td>
		</tr>
		<tr>
			<td>Mémoire (RAM) </td>
			<td>16 GB</td>
		</tr>
		<tr>
			<td>Disque dur</td>
			<td> 2 Disques 1 TB</td>
		</tr>
		<tr>
			<td>Vitesse Disque dur </td>
			<td>15000rpm</td>
		</tr>
	</tbody>
</table>
<h3>3.3. Architecture distribuée - installation optimale
</h3>
<h4 style="margin-top: 10px;">Serveur Base de données SQL
</h4>
<table class="table">
	<tbody>
		<tr>
			<td>Processeur </td>
			<td>Processeur Quad Core Intel Xeon
			E 5520 @ 2.27Ghz
</td>
		</tr>
		<tr>
			<td>Mémoire (RAM) </td>
			<td>8 GB</td>
		</tr>
		<tr>
			<td>Disque dur</td>
			<td>	2 Disques 1 TB</td>
		</tr>
		<tr>
			<td>Vitesse Disque dur</td>
			<td>15000rpm
</td>
		</tr>
	</tbody>
</table>

<h4>Serveur Web Windows</h4>

<table class="table">
	<tbody>
		<tr>
			<td>Processeur</td>
			<td>Processeur Quad Core Intel Xeon
			E 5520 @ 2.27Ghz
</td>
		</tr>
		<tr>
			<td>Mémoire (RAM)</td>
			<td>16 GB</td>
		</tr>
		<tr>
			<td>Disque dur</td>
			<td>2 Disques 1 TB</td>
		</tr>
		<tr>
			<td>Vitesse Disque dur</td>
			<td>15000rpm</td>
		</tr>
	</tbody>
</table>

<h4>Serveur API</h4>

<table class="table">
	<tbody>
		<tr>
			<td>Processeur</td>
			<td>Processeur	Quad Core Intel Xeon 
			E 5520 @ 2.27Ghz</td>
		</tr>
		<tr>
			<td>Mémoire (RAM)</td>
			<td>8 GB</td>
		</tr>
		<tr>
			<td>Disque dur</td>
			<td>2 Disques 1 TB</td>
		</tr>
		<tr>
			<td>Vitesse Disque dur</td>
			<td>15000rpm</td>
		</tr>
	</tbody>
</table>

## Bande passante et limitation en matière de transfert

<strong>Bandwidth</strong> La bande passante déterminera la vitesse de chargement du site eRegulations. Les pages HTML, les images, les vidéos se chargeront rapidement si la bande passante est adéquate.  

Le minimum de bande passante recommandé est 3Mbps.  

<strong>Le volume de transfert </strong>, mesuré en GB (gigabytes) par mois, est calculé sur la base du nombre de visiteurs accédant au site web. Ce volume ne devrait pas être inférieur à 10 GB pour autoriser une moyenne de 700 visiteurs journaliers sur le système eRegulations.
