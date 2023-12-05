---
category:
  - "[[Movies]]"
genre: []
director:
cast: []
year:
imdbId:
rating:
created: {{date}}
tags:
  - movies
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
