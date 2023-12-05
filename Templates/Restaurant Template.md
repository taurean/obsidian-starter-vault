---
aliases: []
category:
  - "[[Places]]"
type:
  - "[[Restaurants]]"
city:
rating:
location: []
created: {{date}}
tags:
  - places
  - restaurants
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
