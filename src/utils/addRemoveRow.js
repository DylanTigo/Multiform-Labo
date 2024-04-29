export const addRow = (elementList, setElementList) => {
  const newId = elementList.length;
  const newData = []
  for (let index = 0; index < elementList[0].data.length; index++) {
    newData.push("")
  }
  const newElementList = [...elementList, { id: newId, data: newData }];
  setElementList(newElementList);
};

export const removeRow = (elementList, setElementList) => {
  if (elementList.length > 1) {
    const newElementList = elementList.slice(0, -1); 
    setElementList(newElementList);
  }
};