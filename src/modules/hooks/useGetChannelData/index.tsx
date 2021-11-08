import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { IChannel } from '../../channel';
import { objToArray } from '../../common';
import { BACKEND_ENDPOINT, PATH } from '../../env';
import { logger } from '../../logger';

export const useGetChannelData = () => {
  const [channels, setChannels] = useState<IChannel[] | []>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const url = BACKEND_ENDPOINT + PATH.CHANNELS;
      const result = await axios.get(url);
      const formattedData = objToArray(result.data);
      setChannels(formattedData);
    } catch (error) {
      logger.error(error);
      setChannels([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return useMemo(() => ({ channels, isLoading }), [channels, isLoading]);
};
