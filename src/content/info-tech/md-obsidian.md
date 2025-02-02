---
title: Markdown for Obsidian
topic:
  - Documentation
  - Markdown
type: Resource
categories:
  - Info Tech
dateCreated: 2024-11-20T12:20:00
dateUpdated: 2025-01-31T22:04:34

---

# Markdown for Obsidian

Obsidian uses Markdown for note-taking with additional features to enhance interconnectivity.

## Obsidian-Specific Syntax
### Internal Links
Link to another note using `[[Note Title]]`.

### Callouts
Create styled blocks with `> [!type]`:
```markdown
> [!info] Info
> This is an information block.
```

### Embeds
Embed notes or media:
```markdown
![[filename]]
```

### Dataview Plugin
Query and display data dynamically:
```markdown
```dataview
table file.name as "File Name"
from "Notes"
```
```

Learn more at the [Obsidian Help](https://help.obsidian.md/).
