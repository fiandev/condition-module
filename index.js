const condition = (any, next) => {
  if (typeof any === "boolean" && !any) return false
  if (typeof any === "number" && !any) return false
  if (typeof any === "string" && !any) return false
  if (!any) throw new Error("Require parameter at least 1")
  if (!next || typeof next !== "function") return any == true
  
  
  let message
  if (any) {
    /* object check */
    if (typeof any === "object") {
      /* check object null or not */
      if (Object.entries(any).length !== 0) {
        return Promise.resolve(next(any))
      }
      
      /* check array null or not */
      if (Array.isArray(any)) {
        if (any.length !== 0) {
          return Promise.resolve(next(any))
        }
        message = "this array is null"
      }
      
      message = "this object is null"
    }
    
    /* check if not object */
    if (typeof any !== "object") {
      return Promise.resolve(next(any))
    }
  }
  message = message ? message : `this '${ typeof any }' is not true`
  return Promise.reject(message)
}

module.exports = {
  condition
}