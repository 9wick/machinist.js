const fetch = require('node-fetch');
const Metric = require('./Metric');

class Machinist {
  constructor(agent, api_key, options = {}) {
    this.api_key = api_key;
    this.agent = agent;
    this.metrics = [];
  }

  addMetric(name, value, options = {}) {
    const metric = new Metric(name, value, options);
    this.metrics.push(metric);
    return metric;
  }

  post() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.api_key}`,
      },
      body: JSON.stringify(this),
    };

    this.metrics = [];

    return fetch('https://gw.machinist.iij.jp/endpoint', options);
  }

  toJson() {
    let obj = {
      agent: this.agent,
      metrics: this.metrics,
    };
    return obj;
  }
}

module.exports = Machinist;
