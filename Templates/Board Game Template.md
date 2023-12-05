---
category:
  - "[[Board Games]]"
rating:
min-players:
max-players:
created: {{date}}
tags:
  - games
  - board-games
  - to-play
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
