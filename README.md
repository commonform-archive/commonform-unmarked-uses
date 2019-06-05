```javascript
var unmarked = require('commonform-unmarked-uses')
var assert = require('assert')

assert.deepEqual(
  unmarked({
    content: [
      { definition: 'Agreement' },
      'Agreement is an agreement'
    ]
  }),
  [
    {
      level: 'info',
      message: '"Agreement" is an unmarked defined-term use.',
      path: ['content', 1],
      source: 'commonform-unmarked-uses',
      url: null
    }
  ]
)
```
