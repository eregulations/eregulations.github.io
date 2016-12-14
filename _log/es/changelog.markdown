---
layout: logs-pages
lang: es
permalink: "/es/log/"
ref: changelog
weight: 100000
visible: true
---

# Change log es

{% assign logs = site.log | where: "lang", page.lang | where: "category", "changelog" | where: "visible", true | sort: "weight" | reverse %}

{% for log in logs %}
### v {{ log.number }}  <small class="{{ log.status }}">{{ log.update }} [detail]({{ log.permalink }}){: .btn.btn-default.btn-sm.pull-right.log-detail-button}</small>

<ul class="changelog">
	{% assign updates = log.updates %}
	{% for update in updates %}
	<li class="ch-{{ update.status }}">{{ update.title }}</li>
	{% endfor %}
</ul>

{% endfor %}
