const arrayGenerator = () =>
  // eslint-disable-next-line no-unused-vars
  [...Array(100000)].map((el, index) => ({
    x: parseInt(Date.now(), 10) + index * 100000,
    y: Math.random() * 40
  }));

const test = {
  current: arrayGenerator(),
  voltage: arrayGenerator()
};

return test;
