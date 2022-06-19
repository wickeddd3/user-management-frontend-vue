export default class Representation {
  constructor (fields = {}) {
    this._mapFields(fields);
  }

  _mapFields (attributes) {
    Object.keys(attributes).forEach(key => { this[key] = attributes[key]; });
  }
}
