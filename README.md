# csv-sync.js
## Install

```
npm install csv-sync
```

## Import

```
let csvSync = require('csv-sync');
```

## Parse

```
let csv = csvSync.parse([filename]);
```

``filename`` is the name of source csv file. The return value is an array of objects generated from csv file. 
Attribute have same names as the fields in the csv file.
## Write

```
csvSync.write([filename], data);
```

``filename`` is the name of target csv file. ``data`` is array of objects, which have same attributes.
