//NICKNAME=Muffin node 'route'
const nickname = process.env.NICKNAME || 'Unknown';

console.log(`Hi! ${nickname[0].toUpperCase() + nickname.slice(1)}`);
console.log(`Change`);