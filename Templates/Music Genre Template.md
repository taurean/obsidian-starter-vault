---
aliases: []
tags:
  - music/genres
---

```dataview
table without id
	file.link as Album,
	artist as Artist,
	genre as Genre,
	choice(rating = 1, "★☆☆☆☆",
        choice(rating = 2, "★★☆☆☆",
            choice(rating = 3, "★★★☆☆",
                choice(rating = 4, "★★★★☆",
                    choice(rating = 5, "★★★★★",
                        choice(rating = null, "—", "—")))))) AS "Rating"
where
	contains(category,[[Albums]]) and
	contains(genre,this.file.link)
sort rating desc
```
