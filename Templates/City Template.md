---
aliases:
category:
  - "[[Places]]"
type:
  - "[[Cities]]"
country:
location:
  - "38.1041"
  - "122.2566"
created: {{date}}
tags:
  - places
  - cities
---

## Trips

```dataview
table without id
	file.link as Trip,
	start-date as Start,
	end-date as End
where
	contains(category, [[Trips]]) and
	contains(destination, this.file.link)
sort file.name desc
```

## Map

```leaflet
id: vallejo
minZoom: 8
maxZoom: 20
defaultZoom: 12
markerTag:
  - places
height: 400px
coordinates: [[Vallejo]]
```

## Places

```dataview
table without id
	file.link as Place,
	type as Type,
	choice(rating = 1, "★☆☆☆☆",
        choice(rating = 2, "★★☆☆☆",
            choice(rating = 3, "★★★☆☆",
                choice(rating = 4, "★★★★☆",
                    choice(rating = 5, "★★★★★",
                        choice(rating = null, "—", "—")))))) AS "Rating"
where
	contains(category, [[Places]]) and
	contains(city, this.file.link)
sort rating desc
```
