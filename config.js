const MINE_RATE = 1000;

const GENESIS_DATA = {
  timestamp: Date.now(),
  lastHash: 'initial-last-hash',
  hash: 'initial-hash',
  data: [],
  difficulty: 3,
  nonce: 0,
};

module.exports = { GENESIS_DATA, MINE_RATE };
