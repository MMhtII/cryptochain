const Block = require('./block');

//use describe method to define a test suite
describe("Reza", () => {
  const timeStamp = "123456";
  const lastHash = "foo-hash";
  const hash = "bar-hash";
  const data = ["blockChain", "data"];
  const block = new Block({
    timeStamp,
    lastHash,
    hash,
    data,
  });
  // use it method to define a test case
  it("has a timestamp, lastHash, hash and data property", () => {
    // checks the recived time stamp === the expected time stamp
    expect(block.timeStamp).toEqual(timeStamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
