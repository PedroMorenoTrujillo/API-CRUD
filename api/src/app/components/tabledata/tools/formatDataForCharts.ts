import { ArrayForCharts } from '../../../models/ArrayForCharts';
import { Hero } from 'src/app/models';
import { TableDataHeader } from 'src/app/models/tableDataHeader';

export const formatDataForCharts = (heroList: Hero[]): {} => {
  const objectKeys = Object.keys(TableDataHeader);

  let newObject: any = {};

  objectKeys.forEach((item: any, index: number) => {
    if (index === 0) {
      newObject[item] = heroList.length;
    } else {
      newObject[item] = formatData(heroList, item);
    }
  });

  return newObject;
};

const formatData = (heroList: Hero[], key: any) => {
  let newArray: ArrayForCharts[] = [];
  const listForDuplicateds = heroList.map((hero: Hero, index) => {
    return hero[key];
  });

  const removeDuplicates = [...new Set(listForDuplicateds)];

  removeDuplicates.forEach((item, index) => {
    let counter = 0;
    heroList.forEach((hero: Hero, index) => {
      if (hero[key] === item) {
        ++counter;
      }
    });
    newArray.push({ name: item, y: counter });
  });
  return newArray;
};
