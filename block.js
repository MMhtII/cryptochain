class Block {
  constructor({ timeStamp, hash, data, lastHash }) {
    this.timeStamp = timeStamp;
    this.hash = hash;
    this.lastHash = lastHash;
    this.data = data;
  }
}
const block1 = new Block({
  timeStamp: "1234567",
  data: "fooData",
  hash: "fooHash",
  lastHash: "fooLastHash",
});
console.log(block1);
