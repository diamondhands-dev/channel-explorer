export interface IChannel {
  alias: string;
  capacity: number;
  channelId: string;
  node1BaseFee: number;
  node1FeeRate: number;
  node2BaseFee: number;
  node2FeeRate: number;
  node2PubKey: string;
}
