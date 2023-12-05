---
tags:
  - categories
---

```dataview
table without id
	file.link as Book,
	author as Author,
	year as Year,
	choice(rating = 1, "★☆☆☆☆",
        choice(rating = 2, "★★☆☆☆",
            choice(rating = 3, "★★★☆☆",
                choice(rating = 4, "★★★★☆",
                    choice(rating = 5, "★★★★★",
                        choice(rating = null, "—", "—")))))) AS "Rating",
	created as Added,
	genre as Genre
where
	contains(category,this.file.link) and
	!contains(file.name, "Template")
sort rating desc, date asc
```
