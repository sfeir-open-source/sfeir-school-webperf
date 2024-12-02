# Exemple

```bash
npm install -g k6
```

<!-- .element: class="fragment" data-fragment-index="1"-->

```js
// load-test.js
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: '30s',
};

export default function () {
  http.get('https://test.com');
  sleep(1);
}
```

<!-- .element: class="fragment" data-fragment-index="2"-->

```bash
k6 run load-test.js
```

<!-- .element: class="fragment" data-fragment-index="3"-->
