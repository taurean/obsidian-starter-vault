---
category:
  - "[[Books]]"
author: []
genre: []
length: []
isbn:
isbn13:
year:
rating:
topics: []
created: {{date}}
tags:
  - books
  - to-read
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
