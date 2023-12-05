---
category:
  - "[[Video Games]]"
maker:
genre: []
year:
platform: []
rating:
created: {{date}}
tags:
  - games
  - video-games
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