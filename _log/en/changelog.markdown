---
layout: logs-pages
lang: en
permalink: "/log/"
ref: changelog
weight: 100000
visible: true
---

# Updates of the eRegulations systems

{% assign logs = site.log | where: "lang", page.lang | where: "category", "changelog" | where: "visible", true | sort: "weight" | reverse %}

{% for log in logs %}
<div class="log-excerpt">

<h3> v {{ log.number }} </h3>

<div class="{{ log.status }} {{ log.lang }} log-date">
	{% if log.status == 'applied' %}<span class="log-status-text"><i class="fa fa-check"></i></span>{% endif %}
	{% if log.status == 'planned' %}<span class="log-status-text">{{ site.translations.log.planned[page.lang] }}</span>{% endif %}
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
