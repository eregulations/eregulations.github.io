---
layout: logs-pages
lang: es
permalink: "/es/log/"
ref: changelog
weight: 100000
visible: true
---

# Log de cambios en los sistemas eRegulations

{% assign logs = site.log | where: "lang", page.lang | where: "category", "changelog" | where: "visible", true | sort: "weight" | reverse %}

{% for log in logs %}
<div class="log-excerpt">

<h3> v {{ log.number }} </h3>

<div class="{{ log.status }} {{ log.lang }} log-date">
	{% if log.status %}<span><i class="fa fa-check"></i></span>{% endif %}
	<span>{{ log.update }}</span>
	<a href="{{ log.permalink }}" class="btn btn-default btn-sm log-detail-button pull-right">detail</a>
</div>

<ul class="changelog">
	{% assign updates = log.updates %}
	{% for update in updates %}
	<li class="ch-{{ update.status }} {{ log.lang }}">{{ update.title }}</li>
	{% endfor %}
</ul>

{% endfor %}
</div>
