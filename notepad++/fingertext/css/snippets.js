const fs = require('fs');
const readline = require('readline');
const filePath = 'css-complete.txt';
const os = require('os');
const props = require('./properties.json');
const syntaxes = require('./syntaxes.json');
const emmet = require('./emmet.json');

function getSyntax(syntax) {
	let farr = [];
	syntax.split(' | ').forEach((str) => {	
		const m = str.match(/<?'?[\w\-]+'?>?/g);
		const arr = m.map(v => {
			if (v[0] === '<') {
				const vs = v.substring(1, v.length - 1);
				if (syntaxes[vs]) {
					// return getSyntax(syntaxes[vs].syntax);
					return syntaxes[vs].syntax.replace(/ \| /g, '|');
				}
			}
			if (v.substring(0, 2) === '<\'') {
				const vs = v.substring(2, v.length - 2);
				if (props[vs]) {
					// return getSyntax(props[vs].syntax);
					return `<${vs}>`;
				}
			}
			return v;
		});
		farr = farr.concat(arr);
	});
	return farr;
}

function parse(obj) {
	let count = 0;
	let p;
	let s;

	for(let k in obj) {
		if (k[0] === '-') {
			continue;
		}
		
		p = obj[k];
		s = getSyntax(p.syntax);
		if (s.length > 1) {
			s = `(lis)${s.sort().join('|')}`;
		}
		if (emmet[k]) {
			console.log(emmet[k]);
		} else {
			console.log(k.replace(/-/g, '');
		}
		console.log('Ext:css');
		console.log(`${k}: $[![${s}]!];[>END<]!$[FingerTextData FingerTextData]@#`);
	}
}

parse(props);