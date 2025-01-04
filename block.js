class Block {
  constructor({ timeStamp, hash, data, lastHash }) {
    this.timeStamp = timeStamp;
    this.hash = hash;
    this.lastHash = lastHash;
    this.data = data;
  }
}

module.exports = Block;
