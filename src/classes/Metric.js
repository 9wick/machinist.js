class Metric {
  constructor(name, value, { namespace, tags = [], timestamp } = {}) {
    this.name = name;
    this.namespace = namespace;
    this.tags = [];
    this.value = value;
    this.timestamp = timestamp || new Date().getTime();
  }

  toJSON() {
    let obj = {
      name: this.name,
      data_point: {
        value: this.value,
      },
    };

    if (this.namespace) {
      obj.namespace = this.namespace;
    }
    if (this.tags.length > 0) {
      obj.tags = this.tags;
    }
    // if (this.timestamp) {
    //   obj.data_point.timestamp = this.timestamp;
    // }
    return obj;
  }
}

module.exports = Metric;
