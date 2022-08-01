const { condition } = require("condition-module")

try {
  const data = []
  
  condition(true)
  condition(data, (data) => {
    //
  }).catch(err => {
    //
  })
  
  console.log("test successfully!");
} catch (e) {
  console.log(e);
}
