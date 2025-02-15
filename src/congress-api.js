import * as billsData from './bills-data';

export const fetchBills = async () => {
  return billsData.getBills();
};
