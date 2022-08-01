# feature

- check array is null or not
- check object is null or not
- undefined, NaN, null will be retrun false
- infinity will be return true

> example

```javascript
const { condition } = require("condition-module")

const data = []
condition(data, (data) => {
  // this will not run
}).catch(err => {
  // this will be run
  console.log(err); // this 'boolean' is not true
})
```

# how to use

## installation

```shell
npm install condition-module --save
```

## basic

```javascript
const { condition } = require("condition-module")
condition(true) // return true
condition([]) // return false
```

## using callback

```javascript
const { condition } = require("condition-module")

condition(true, (data) => {
  // this run if condition true
  console.log(`${data} is true`);
}).catch(err => {
  // do if condition false
  console.log(err); // this 'boolean' is not true
})
```
