interface ArrList {
  id: number;
  name: string;
  price: number;
  startRent: string;
  createdAt: string;
  updatedAt: string;
}

type idItemType = number;

const filterCars = (arrList: ArrList[], idItem: idItemType)  => {
  return arrList.find(({id}) => id === idItem);
}

export default filterCars;