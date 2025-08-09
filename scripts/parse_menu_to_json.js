// Simple parser to transform a plain text menu into structured JSON.
// Usage: node scripts/parse_menu_to_json.js ../delice-menu.txt public/menu.json

import fs from 'fs';

const input = process.argv[2];
const output = process.argv[3] || 'public/menu.json';

if (!input) {
  console.error('Usage: node scripts/parse_menu_to_json.js <input.txt> [output.json]');
  process.exit(1);
}

const txt = fs.readFileSync(input, 'utf8');

// Section mapping based on headings in the provided text
const sectionAliases = [
  { id: 'snacks', match: /(APERITIEF|HAPJES|CROQUES|OMELETTEN|SALADES)/i, title: { en: 'Snacks & Light Bites', nl: 'Snacks & Lichte Gerechten' } },
  { id: 'starters', match: /(KOUDE VOORGERECHTEN|WARME VOORGERECHTEN|SOEP)/i, title: { en: 'Starters', nl: 'Voorgerechten' } },
  { id: 'pasta', match: /PASTA/i, title: { en: 'Pasta', nl: 'Pasta' } },
  { id: 'mains', match: /(VLEESGERECHTEN|LOCAL DISHES|BURGERS)/i, title: { en: 'Meat dishes & Burgers', nl: 'Vleesgerechten & Burgers' } },
  { id: 'fish', match: /(VISGERECHTEN|MOSSELEN)/i, title: { en: 'Fish & Mussels', nl: 'Vis & Mosselen' } },
  { id: 'desserts', match: /(DESSERTS|ICE-?CREAM|TEA ROOM)/i, title: { en: 'Desserts & Ice cream', nl: 'Desserts & IJs' } },
  { id: 'drinks', match: /(BIEREN|FRIS|WARM|HUISWIJN|WIJN|SCHUIMWIJN|CHAMPAGNE|APERITIEF|STERKE DRANKEN)/i, title: { en: 'Drinks', nl: 'Dranken' } },
];

const lines = txt.split(/\r?\n/);

function extractPrice(line) {
  const m = line.match(/€\s?(\d{1,3}(?:[\.,]\d{2})?)/);
  return m ? parseFloat(m[1].replace(',', '.')) : null;
}

const sections = [];
let current = null;

for (const raw of lines) {
  const line = raw.replace(/\u000c/g, '').trim(); // remove form feeds
  if (!line) continue;

  const alias = sectionAliases.find((a) => a.match.test(line));
  if (alias) {
    current = {
      id: alias.id,
      titles: { en: alias.title.en, nl: alias.title.nl, fr: alias.title.en, de: alias.title.en, es: alias.title.en },
      items: [],
    };
    if (!sections.find((s) => s.id === current.id)) sections.push(current);
    continue;
  }

  if (!current) continue;

  const price = extractPrice(line);
  if (price != null) {
    const name = line.replace(/€\s?\d{1,3}(?:[\.,]\d{2})?/, '').trim().replace(/\s{2,}/g, ' ');
    current.items.push({
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      names: { en: name, nl: name, fr: name, de: name, es: name },
      descriptions: { en: '', nl: '', fr: '', de: '', es: '' },
      price,
    });
  }
}

const json = { currency: '€', sections };
fs.writeFileSync(output, JSON.stringify(json, null, 2));
console.log(`Wrote ${output} with ${sections.length} sections.`);


