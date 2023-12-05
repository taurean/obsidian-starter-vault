---
aliases: []
tags:
  - genres
  - genres/books
---

```dataview
table without id
  file.link as Book,
  author as Author,
  genre as Genre,
  choice(rating = 1, "★☆☆☆☆",
        choice(rating = 2, "★★☆☆☆",
            choice(rating = 3, "★★★☆☆",
                choice(rating = 4, "★★★★☆",
                    choice(rating = 5, "★★★★★",
                        choice(rating = null, "—", "—")))))) AS "Rating"
where
  contains(category,[[Books]]) and
  contains(genre,this.file.link)
sort rating desc
```
