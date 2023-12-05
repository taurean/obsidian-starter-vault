---
category:
  - "[[Shows]]"
rating:
created: {{date}}
tags:
  - shows
  - to-watch
---

## Episodes

```dataview
table without id
	file.link as Title,
	season as Season,
	episode as Episode
where
	contains(category,[[Show Episodes]]) and
	contains(show,this.file.link)
sort season, episode desc
```

#```dataview
table without id
	file.link as Mentions
where
	contains(file.outlinks, this.file.link) and
	!contains(file.name, "Template")
sort file.ctime asc
limit 20
```
