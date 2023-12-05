---
category:
  - "[[Comic Series]]"
genre: []
publisher:
author: []
artist: []
year:
characters: []
created: {{date}}
tags:
  - comic-series
  - to-read
---

```dataview
table without id
	file.link as Title,
	issue as Issue
where
	contains(category,[[Comic issues]]) and
	contains(comic series, this.file.link)
sort issue desc
```
