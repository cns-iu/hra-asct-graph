import { readFileSync, writeFileSync } from 'fs';
import { constructJsonLd } from './sparql.js';

const endpoint = 'https://ubergraph.apps.renci.org/sparql';
const query = readFileSync('./queries/asct-graph.rq').toString();

const results = await constructJsonLd(query, endpoint);
writeFileSync('./data/asct-graph.jsonld', JSON.stringify(results, null, 2));
