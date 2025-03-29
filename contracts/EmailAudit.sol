// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EmailAudit {
    event ContentHashed(
        address indexed sender,
        bytes32 indexed contentHash,
        uint256 timestamp
    );

    function storeHash(bytes32 contentHash) external {
        emit ContentHashed(msg.sender, contentHash, block.timestamp);
    }

    function bulkStoreHash(bytes32[] calldata hashes) external {
        for (uint i = 0; i < hashes.length; i++) {
            emit ContentHashed(msg.sender, hashes[i], block.timestamp);
        }
    }
}