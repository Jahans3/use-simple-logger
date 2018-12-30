# Use Simple Logger
A tiny (2kb) state inspector for [Use Simple State](https://github.com/Jahans3/use-simple-logger), based on Redux Logger.

Logs action, time (HH:MM:SS:MS), previous state and next state:
<img src="https://raw.githubusercontent.com/Jahans3/use-simple-logger/master/log.png" width="250">

Also handles async actions (intermediate state is ignored in final log):
<img src="https://raw.githubusercontent.com/Jahans3/use-simple-logger/master/async-log.png" width="250">

## Installation
```
yarn add use-simple-logger
npm install --save use-simple-logger
```

## Usage
Import the middleware and pass to your `SimpleStateProvider`:

```js
import logger from 'use-simple-logger';

export default App () {
  return (
    <SimpleStateProvider reducers={reducers} middleware={[logger]}>
      <RootComponent />
    </SimpleStateProvider>
  );
}
```

`*Note: the logger middleware should always go last*`

For more fine-grained control, you can import `createLogger` and pass options:

```js
import { createLogger } from 'use-simple-logger'

const options = {
  logAction: true,
  logPrev: true,
  logNext: true
};

const logger = createLogger(options);
```