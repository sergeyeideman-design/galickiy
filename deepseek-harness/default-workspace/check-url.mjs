const url = process.argv[2];
try {
  const res = await fetch(url, { signal: AbortSignal.timeout(20000), redirect: 'follow' });
  const text = await res.text();
  console.log(res.status, res.headers.get('content-type'), text.length);
  console.log(text.slice(0, 160).replace(/\s+/g, ' '));
} catch (e) {
  console.log('ERR', e.message);
}
process.exit(0);
