# how to use

```javascript
const { condition } = require("./condition")

condition(true, (data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
```

