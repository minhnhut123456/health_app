import { useMemo, useState } from 'react';

import { ColumnRecord } from '#/types';

const PER_PAGE = 8;

export const CATEGOGIES = [
  {
    name: 'column',
    title: 'RECOMMENDED COLUMN',
    description: 'オススメ',
  },
  {
    name: 'diet',
    title: 'RECOMMENDED DIET',
    description: 'ダイエット',
  },
  {
    name: 'beauty',
    title: 'RECOMMENDED BEAUTY',
    description: '美容',
  },
  {
    name: 'health',
    title: 'RECOMMENDED HEALTH',
    description: '健康',
  },
];

export default function useColumns(data: ColumnRecord[]) {
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
