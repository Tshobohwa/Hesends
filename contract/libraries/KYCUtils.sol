// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library KYCUtils {
    function isValidKYC(bytes32 kycHash) internal pure returns (bool) {
        return kycHash != bytes32(0);
    }
}
