---
layout: logs-pages
lang: vn
permalink: "/vn/log"
ref: changelog
weight: 100000
visible: true
---

# Change log vn

{% assign logs = site.log | where: "lang", page.lang | where: "category", "changelog" | where: "visible", true | sort: "weight" | reverse %}

{% for log in logs %}
### v {{ log.number }}  <small class="{{ log.status }} {{ log.lang }}">{{ log.update }} [detail]({{ log.permalink }}){: .btn.btn-default.btn-sm.pull-right.log-detail-button}</small>

<ul class="changelog">
	{% assign updates = log.updates %}
	{% for update in updates %}
	<li class="ch-{{ update.status }} {{ log.lang }}">{{ update.title }}</li>
	{% endfor %}
</ul>

{% endfor %}
