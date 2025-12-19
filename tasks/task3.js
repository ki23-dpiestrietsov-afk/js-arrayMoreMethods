function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    if (item.athletes === 0 && item.medals === 0) {
      return { ...item, percentOfSuccess: "0%" };
    }

    const percent = item.athletes === 0 ? 0 : (item.medals / item.athletes) * 100;

    return {
      ...item,
      percentOfSuccess: percent.toFixed(1) + "%",
    };
  });
}

module.exports = addSuccessPercent;
