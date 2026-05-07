const dns = require('dns').promises;

async function checkDns() {
  const hostname = 'findit.qql6ilx.mongodb.net';
  const srvRecord = '_mongodb._tcp.findit.qql6ilx.mongodb.net';
  
  console.log(`Checking DNS for ${hostname}...`);
  try {
    const addresses = await dns.resolve4(hostname);
    console.log('A records:', addresses);
  } catch (err) {
    console.error('A record lookup failed:', err.code);
  }

  console.log(`Checking SRV for ${srvRecord}...`);
  try {
    const srv = await dns.resolveSrv(srvRecord);
    console.log('SRV records:', srv);
  } catch (err) {
    console.error('SRV lookup failed:', err.code);
  }
}

checkDns();
