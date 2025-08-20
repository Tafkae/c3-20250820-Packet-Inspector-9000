class Kata {
  validateDigitIntegrity(packetId) {
    let current = packetId;
    let sumDigits = 0;

    while (current >= 1) {
      sumDigits += current % 10;
      current = Math.floor(current / 10);
    }

    // let sumDigits = digits.reduce((acc, curr) => acc + curr, initialValue);
    return packetId % sumDigits === 0;

  }

  bulkPacketFilter(max) {
    let filter = [];
    for (let i = 0; i < max; i++) {
      if (this.validateDigitIntegrity(i)) {
        filter.push(i)
      }
    }
    return filter;
  }
}

module.exports = Kata;
