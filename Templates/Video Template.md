---
category:
  - "[[Videos]]"
genre: []
publisher:
year:
rating:
created: {{date}}
tags:
  - videos
  - to-watch
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
