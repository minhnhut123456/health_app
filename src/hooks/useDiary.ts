import { useMemo, useState } from 'react';

import { DiaryRecord } from '#/types';

const PER_PAGE = 8;

export default function useDiary(data: DiaryRecord[]) {
  const [displayData, setDisplayData] = useState(data.slice(0, PER_PAGE));
  const [page, setPage] = useState(0);

  const hasMore = useMemo(() => {
    return displayData.length < data.length;
  }, [data, displayData.length]);

  function loadMore() {
    if (hasMore) {
      setPage(page + 1);
      setDisplayData([
        ...displayData,
        ...data.slice((page + 1) * PER_PAGE, (page + 1) * PER_PAGE + PER_PAGE),
      ]);
    }
  }

  return { hasMore, loadMore, displayData };
}
