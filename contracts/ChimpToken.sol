pragma solidity ^0.4.15;


import "zeppelin-solidity/contracts/token/StandardToken.sol";


/**
 * @title ChimpToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 */
contract ChimpToken is StandardToken {

  string public constant name = "ChimpToken";
  string public constant symbol = "CHM";
  uint8 public constant decimals = 4;

  uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  function ChimpToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

}
