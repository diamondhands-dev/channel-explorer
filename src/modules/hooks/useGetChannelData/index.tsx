import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { IChannel } from '../../channel';
import { objToArray } from '../../common';
import { BACKEND_ENDPOINT, PATH } from '../../env';
import { logger } from '../../logger';

export const useGetChannelData = (search: string) => {
  const [channels, setChannels] = useState<IChannel[] | []>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const url = BACKEND_ENDPOINT + PATH.SEARCH + '/' + search;
      const result = await axios.get(url);
      const formattedData = objToArray(result.data);
      setChannels(formattedData);
    } catch (error) {
      logger.error(error);
      setChannels([]);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  useEffect(() => {
    getData();
  }, [getData]);

  return useMemo(
    () => ({ channels, isLoading, setIsLoading, setChannels }),
    [channels, isLoading, setIsLoading, setChannels],
  );
};
