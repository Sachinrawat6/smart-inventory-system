export const getCoatRacks = () => {
  const coatsRack = JSON.parse(localStorage.getItem('coatRacks') || '{}');
  return coatsRack;
};

export const updateCoatsRackCount = (rackName, quantity) => {
  const coatsRack = JSON.parse(localStorage.getItem('coatRacks') || '{}');

  const currentStock = Number(coatsRack[rackName]) || 0;
  const updateQuantity = Number(quantity) || 0;

  coatsRack[rackName] = currentStock + updateQuantity;

  localStorage.setItem('coatRacks', JSON.stringify(coatsRack));

  return coatsRack;
};

export const getLowestStockRack = () => {
  const coatsRack = JSON.parse(localStorage.getItem('coatRacks') || '{}');

  const entries = Object.entries(coatsRack)
    .filter(([rack, stock]) => {
      return rack !== 'undefined' && rack && Number.isFinite(Number(stock));
    })
    .map(([rack, stock]) => [rack, Number(stock)]);

  if (!entries.length) return null;

  entries.sort((a, b) => a[1] - b[1]);

  return {
    rack: entries[0][0],
    inStock: entries[0][1],
  };
};
