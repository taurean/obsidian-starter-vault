---
category:
  - "[[Courses]]"
org:
instructor:
url:
rating:
created: {{date}}
tags:
  - Courses
---

## Lessons

```dataview
table without id
	file.link as Title,
	lesson as Lesson
where
	contains(category,[[Course Lessons]]) and
	contains(class, this.file.link)
sort episode desc
```
