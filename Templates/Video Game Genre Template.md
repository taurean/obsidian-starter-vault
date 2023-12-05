---
aliases: []
tags:
	- genre
  - games
	- video-games
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
	contains(category,[[Video Games]]) and
	contains(genre,this.file.link)
sort rating desc
```
