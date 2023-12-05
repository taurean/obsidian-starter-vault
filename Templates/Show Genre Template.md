---
aliases: []
tags:
  - shows/genres
---

```dataview
table without id
	file.link as Show,
	choice(rating = 1, "★☆☆☆☆",
        choice(rating = 2, "★★☆☆☆",
            choice(rating = 3, "★★★☆☆",
                choice(rating = 4, "★★★★☆",
                    choice(rating = 5, "★★★★★",
                        choice(rating = null, "—", "—")))))) AS "Rating"
where
	contains(category,[[Shows]]) and
	contains(genre,this.file.link)
sort rating desc
```
