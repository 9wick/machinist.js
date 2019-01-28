const Machinist = require('../../index');
const Obniz = require('obniz');

const machinist = new Machinist('Obniz', '449eb210cc7a4d4c');

const obniz = new Obniz('OBNIZ_ID_HERE');

obniz.onconnect = async () => {
  let sensor = obniz.wired('SHT31', {
    vcc: 0,
    sda: 1,
    scl: 2,
    adr: 3,
    gnd: 4,
    addressmode: 5,
  });

  while (1) {
    let temp = await sensor.getTempWait();
    let humd = await sensor.getHumdWait();
    console.log('temperature:' + temp + '   humidity:' + humd);

    machinist.addMetric('temperature', temp, {
      namespace: 'SHT31',
    });
    machinist.addMetric('humidity', humd, {
      namespace: 'SHT31',
    });

    machinist
      .post()
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
    await obniz.wait(5000);
  }
};
