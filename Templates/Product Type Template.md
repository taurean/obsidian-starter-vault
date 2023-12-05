---
aliases: []
tags:
  - products/types
---

```dataview
table without id
	file.link as Item,
	maker as Maker,
	price as Price,
	choice(rating = 1, "★☆☆☆☆",
        choice(rating = 2, "★★☆☆☆",
            choice(rating = 3, "★★★☆☆",
                choice(rating = 4, "★★★★☆",
                    choice(rating = 5, "★★★★★",
                        choice(rating = null, "—", "—")))))) AS "Rating"
where
	contains(category, [[Products]]) and
	contains(type,this.file.link)
sort
	rating desc,
	file.mtime desc
```
