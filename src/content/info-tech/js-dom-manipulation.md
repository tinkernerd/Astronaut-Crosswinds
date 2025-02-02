---
title: DOM Manipulation
excerpt: The **DOM** (Document Object Model) is how you can interact with and manipulate web pages using JavaScript.
type: Resource
topic: 
  - Javascript
  - Programming
categories:
  - Info Tech
dateUpdated: 2025-01-31T22:04:34
dateCreated: 2025-01-31T22:04:34
---

## Selecting Elements
  ```javascript
  const element = document.getElementById('myElement');
  ```
  or
  ```javascript
  const element = document.querySelector('.myClass');
  ```
## Changing Content
  ```javascript
  element.textContent = 'New Content';
  ```

## Modifying Styles
  ```javascript
  element.style.color = 'blue';
  ```
