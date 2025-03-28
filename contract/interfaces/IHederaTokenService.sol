// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IHederaTokenService
 * @dev Interface for interacting with the Hedera Token Service (HTS)
 */
interface IHederaTokenService {
    /**
     * @dev Transfers tokens from one account to another.
     * @param token The address of the HTS token
     * @param from The address of the sender
     * @param to The address of the receiver
     * @param amount The number of tokens to transfer
     * @return success Boolean indicating success of the transfer
     */
    function transferToken(
        address token, 
        address from, 
        address to, 
        uint256 amount
    ) external returns (bool success);

    /**
     * @dev Mints new tokens and assigns them to a recipient.
     * @param token The address of the HTS token
     * @param amount The number of tokens to mint
     * @param recipient The address that receives the minted tokens
     * @return success Boolean indicating success of the minting
     */
    function mintToken(
        address token, 
        uint256 amount, 
        address recipient
    ) external returns (bool success);

    /**
     * @dev Burns (destroys) tokens from the sender's account.
     * @param token The address of the HTS token
     * @param amount The number of tokens to burn
     * @return success Boolean indicating success of the burning process
     */
    function burnToken(
        address token, 
        uint256 amount
    ) external returns (bool success);
}
