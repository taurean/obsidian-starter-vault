---
category:
  - "[[Events]]"
type:
start-date:
end-date:
created: {{date}}
tags:
  - events
---

```dataview
table without id
	file.link as Mentions
where
	contains(file.outlinks, this.file.link) and
	!contains(file.name, "Template")
sort file.ctime asc
limit 20
```
