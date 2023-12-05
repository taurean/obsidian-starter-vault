---
aliases: []
tags:
  - places/types
---

```leaflet
id: restaurants
linksTo: [[Restaurants]]
minZoom: 3
maxZoom: 20
defaultZoom: 3
height: 400px
```

## Places

```dataview
table without id
	file.link as Place,
	location as locationation,
	choice(rating = 1, "★☆☆☆☆",
        choice(rating = 2, "★★☆☆☆",
            choice(rating = 3, "★★★☆☆",
                choice(rating = 4, "★★★★☆",
                    choice(rating = 5, "★★★★★",
                        choice(rating = null, "—", "—")))))) AS "Rating"
where
	contains(category, [[Places]]) and
	contains(type, this.file.link)
```
