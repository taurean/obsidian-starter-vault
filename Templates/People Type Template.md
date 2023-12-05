---
tags:
  - people/types
---

## People

```dataview
table without id
	file.link as Name
where
	contains(category, [[People]]) and
	!contains(file.name,"Template")
sort file.name asc
```
