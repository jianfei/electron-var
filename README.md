# electron-vars

Share data among different processes in Electron.

You can use it in main or renderer process.

## Usage

```javascript
npm install --save electron-vars

// in main process
const vars = require('electron-vars');

// in renderer process
const vars = require('electron').remote.require('electron-vars');
```

```javascript
vars.set('someKey', 'someValue');

const value = vars.get('someKey', 'defaultValue');

vars.unset('someKey');
```

### Share functions

You can share methods too, but be aware that the methods will run in the process they are defined.
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

### Persist data

```javascript
vars.store('someKey', 'someValue');

const value = vars.retrieve('someKey', 'defaultValue');

const hasKey = vars.has('someKey');

vars.delete('someKey');

vars.clear();
```

Data will be stored in system default user config directory.