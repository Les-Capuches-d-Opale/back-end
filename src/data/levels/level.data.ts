const levels = [...new Array(100)].map((_, i) => {
  return {
    level: i + 1,
    minimumExp: i * 100,
    maximumExp: (i + 1) * 100 - 1,
  };
});

// export = levels;
