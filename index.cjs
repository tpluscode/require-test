const { foo } = require('./module.cjs')

console.log(`static require: ${foo.value}`)

console.log(`dynamic require: ${require('./module.cjs').foo.value}`)
