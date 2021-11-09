import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { BACKEND_ENDPOINT, PATH } from '../../env';
import { logger } from '../../logger';

interface ISelf {
  alias: string;
  publicKey: string;
  capacitySum: number;
  channelCount: number;
}
interface ISelfState {
  alias: string;
  pk: string;
  capacity: number;
  channels: number;
}

const initialState = {
  alias: 'Loading...',
  pk: '...',
  channels: 0,
  capacity: 0,
};

export const useGetNodeData = () => {
  const [nodeInfo, setNodeInfo] = useState<ISelfState>(initialState);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const url = BACKEND_ENDPOINT + PATH.SELF;
      const { data } = await axios.get<ISelf>(url);
      const nodeData = {
        alias: data.alias,
        pk: data.publicKey,
        channels: data.channelCount,
        capacity: data.capacitySum,
      };
      setNodeInfo(nodeData);
    } catch (error) {
      logger.error(error);
      setNodeInfo(initialState);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return useMemo(() => ({ nodeInfo, isLoading }), [nodeInfo, isLoading]);
};
