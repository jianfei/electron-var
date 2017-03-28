# electron-vars

Share data among different processes in Electron.

You can use it in main or renderer process.

## Usage

```
npm install --save electron-vars
```
Installation

```javascript
// in main or renderer process
const vars = require('electron-vars');

vars.set('someKey', 'someValue');

const value = vars.get('someKey', 'defaultValue');

vars.unset('someKey');
```

### Share functions

You can share methods too, but be aware that the method will run in the process they are defined.
For example:

```javascript
// in renderer process A
vars.set('myMethod', () => { console.log('my method'); });
vars.get('myMethod')();

// in main process
vars.get('myMethod')();

// in renderer process B
vars.get('myMethod')();
```

You will find that 'my method' is printed 3 times in the console window of process A.

