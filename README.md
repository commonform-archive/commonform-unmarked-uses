```javascript
import unmarked from 'commonform-unmarked-uses'
import assert from 'assert'

assert.deepStrictEqual(
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
