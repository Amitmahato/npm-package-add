const add = (a, b) => {
  console.log("[info] Called ./add.js");
  return a + b;
};

// How should I export this add function so that I can use it inside index.js?
module.exports.sum = add;
/** Now the question is why module.exports and not export { sum: add } or export default add
 *  - Since this file is our local file in the client application,
 *  - it referes to the neareset `package.json`, which is in the currend directory
 *  - The `type` field being set to `commonjs`, this file will follow the `commonjs` way to handle modules
 **/

// OR
// export default add;
