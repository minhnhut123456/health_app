import { useMemo, useState } from 'react';

import categoryImage1 from '#/assets/images/mockData/category-1.svg';
import categoryImage2 from '#/assets/images/mockData/category-2.svg';
import categoryImage3 from '#/assets/images/mockData/category-3.svg';
import categoryImage4 from '#/assets/images/mockData/category-4.svg';
import { Record } from '#/types';

const PER_PAGE = 8;

export const CATEGOGIES = [
  {
    name: 'morning',
    image: categoryImage1,
  },
  {
    name: 'lunch',
    image: categoryImage2,
  },
  {
    name: 'dinner',
    image: categoryImage3,
  },
  {
    name: 'snack',
    image: categoryImage4,
  },
];

export default function useRecords(data: Record[]) {
  const [displayData, setDisplayData] = useState(data.slice(0, PER_PAGE));
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState('');

  const hasMore = useMemo(() => {
    if (!category) {
      return displayData.length < data.length;
    }
    return displayData.length < data.filter((item) => item.category === category).length;
  }, [category, data, displayData.length]);

  function changeByCategory(curCategory: string) {
    if (curCategory !== category) {
      setCategory(curCategory);
      if (!curCategory) {
        return setDisplayData(data.slice(0, PER_PAGE));
      }
      return setDisplayData(
        data.filter((item) => item.category === curCategory).slice(0, PER_PAGE),
      );
    }
  }

  function loadMore() {
    if (hasMore) {
      const dataFiltered = !category
        ? data
        : data.filter((item) => item.category === category);

      setPage(page + 1);
      setDisplayData([
        ...displayData,
        ...dataFiltered.slice((page + 1) * PER_PAGE, (page + 1) * PER_PAGE + PER_PAGE),
      ]);
    }
  }

  return { hasMore, changeByCategory, loadMore, displayData, category };
}
