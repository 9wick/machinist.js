const Machinist = require('../../index');

const machinist = new Machinist('Home', 'API_KEY');
for (let i = 0; i < 3; i++) {
  let random = Math.floor(Math.random() * 10 + 20);
  machinist.addMetric('temperature', random, {
    namespace: 'Environment Sensor',
  });
  console.log(`data${i} : ${random}`);
}
machinist
  .post()
  .then(res => res.json())
  .then(json => {
    console.log(json);
  });
