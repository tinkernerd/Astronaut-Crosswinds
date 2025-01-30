---
title: Markdown 2.0 
category: Aviation
excerpt: This file contains examples of all commonly used Markdown elements. Use it to test your CSS styles.
status: Active
dateCreated: 2025-01-26T10:00:00
type: Dashboard
outline: deep
tags:
  - markdown
  - testing
topics: 
  - Markdown
---


## Headings

### Level 3 Heading

#### Level 4 Heading

##### Level 5 Heading

###### Level 6 Heading

---

## Text Styles

**Bold text**

*Italic text*

~~Strikethrough text~~

`Inline code`

---

## Lists

### Unordered List
- Item 1
  - Sub-item 1.1
    - Sub-item 1.1.1
- Item 2

### Ordered List
1. First item
2. Second item
   1. Sub-item 2.1
   2. Sub-item 2.2
3. Third item

---

## Links and Images

[This is a link](https://example.com)

![Alt text for an image](https://via.placeholder.com/150)

---

## Blockquotes

> This is a blockquote.  
> It spans multiple lines.  

---

## Code Blocks
javascript
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('World'));
```
Fucking Python
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

---

## Tables

| Header 1    | Header 2    | Header 3    |
|-------------|-------------|-------------|
| Row 1 Cell  | Row 1 Cell  | Row 1 Cell  |
| Row 2 Cell  | Row 2 Cell  | Row 2 Cell  |

---

## Horizontal Rules

---

---

## Checklists

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

---

## HTML Elements

<div style="border: 1px solid black; padding: 10px; margin: 10px;">
  This is a custom HTML block.
</div>

---

## Emojis

:smile: :rocket: :tada:

---

## Footnotes

Here is a footnote reference[^1].

[^1]: This is the footnote text.

---

## Callouts (Blockquotes with variations)

> **Note**: This is a callout for additional information.

> **Warning**: This is a callout for warnings.

---

## Embedded Media

### YouTube Video
[![Video Placeholder](https://via.placeholder.com/200x150)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

---

## Formatted Text

<kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text.  
<kbd>Alt</kbd> + <kbd>Tab</kbd> to switch windows.

---

## Math (if supported)

Inline equation: $E = mc^2$

Block equation:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

---

## Advanced: Collapsible Sections

<details>
<summary>Click to expand</summary>
This is hidden text revealed on click.
</details>

---

## Special Characters

Here are some special characters: © ® ™ ✓ ✗ ♥ ♠ ♦ ♣

---

## Nested Elements

> **Nested Blockquote**:  
> > A blockquote inside a blockquote.
>
> - Nested list inside a blockquote:
>   1. First item
>   2. Second item
> 
> ```css
> /* Nested code block inside blockquote */
> body {
>   font-family: Arial, sans-serif;
> }
> ```

---

## Conclusion

Test all these elements thoroughly to ensure your CSS handles them well.
