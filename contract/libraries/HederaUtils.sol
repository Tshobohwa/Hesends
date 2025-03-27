// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../interfaces/IHederaTokenService.sol";

library HederaUtils {
    function safeTransfer(IHederaTokenService hts, address token, address from, address to, uint256 amount) internal {
        require(hts.transferToken(token, from, to, amount), "HederaUtils: Transfer failed");
    }
}
