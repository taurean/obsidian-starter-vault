---
category:
  - "[[Quest Lines]]"
  - "[[Quests]]"
status: 
created: {{date}}
tags:
  - quest-line
  - quest
  - todo
---

```ad-important
title: Quest Description
Quest description here
```

- 

```dataview
table without id
	file.link as Sub-Quest
where
	contains(category,[[Quests]]) and
	contains(quest-line,this.file.link)
sort file.ctime asc
```

```dataview
table without id
	file.link as Mentions
where
	contains(file.outlinks, this.file.link) and
	!contains(file.name, "Template") and
	!contains(category,[[Quests]])
sort file.ctime asc
limit 20
```
