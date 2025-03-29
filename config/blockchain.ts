import { ethers } from 'ethers';

export const polygonProvider = new ethers.providers.JsonRpcProvider(
  process.env.POLYGON_RPC!
);

export const contractABI = [
  'function bulkStoreHash(bytes32[] hashes)',
  'event ContentHashed(address indexed sender, bytes32 indexed contentHash, uint256 timestamp)'
];