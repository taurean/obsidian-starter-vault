---
related: "[[Lessons]]"
---

```dataview
table without id
	file.link as Course, instructor as "Instructor"
where
  contains(category,this.file.link) and
  !contains(category, "Course Lessons") and
  !contains(file.name,"Template")
sort file.name asc
```