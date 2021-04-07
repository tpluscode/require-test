import { foo } from './module.js'

console.log(`static import: ${foo.value}`)

import('./module.js')
    .then(({ foo }) => console.log(`dynamic import: ${foo.value}`))
