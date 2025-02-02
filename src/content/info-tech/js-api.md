---
title: APIs in JavaScript
topic:
  - Javascript
  - Programming
type: Resource
categories:
  - Info Tech
dateUpdated: 2025-01-31T22:04:34
dateCreated: 2025-01-31T22:04:34

---

# APIs in JavaScript

JavaScript can interact with APIs (Application Programming Interfaces) to fetch data from external services.

## Fetching Data
  ```javascript
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
  ```

## Using `async/await`
  ```javascript
  async function getData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  }
  ```

