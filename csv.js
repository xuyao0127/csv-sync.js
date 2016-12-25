let fs = require('fs');

module.exports.parse = (filename) => {
    let raw = fs.readFileSync(filename, 'utf-8').split(/[\n\r]+/);
    let parsed = [];
    let titles = raw.shift().split(/\s*,\s*/);
    raw.map((value) => {
        let rawEntry = value.split(/\s*,\s*/);
        let entry = {};
        titles.map((value, index) => {
            entry[value] = rawEntry[index] 
        });
        parsed.push(entry);
    });
    return parsed
}

module.exports.write = (filename, csv) => {
    let titles = Object.keys(csv[0]).join(',');
    let result = csv.reduce((a, b) => {
        return a + '\n' + Object.values(b).join(',');
    }, titles);
    fs.writeFileSync(filename, result, 'utf-8');
}