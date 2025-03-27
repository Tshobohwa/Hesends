// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library RolesLibrary {
    struct Role {
        mapping(address => bool) bearer;
    }

    function addRole(Role storage role, address account) internal {
        require(account != address(0), "Roles: invalid account");
        require(!role.bearer[account], "Roles: account already has role");
        role.bearer[account] = true;
    }

    function removeRole(Role storage role, address account) internal {
        require(role.bearer[account], "Roles: account does not have role");
        role.bearer[account] = false;
    }

    function hasRole(Role storage role, address account) internal view returns (bool) {
        return role.bearer[account];
    }
}
