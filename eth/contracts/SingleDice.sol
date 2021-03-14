pragma solidity ^0.7.0;

import "hardhat/console.sol";

contract SingleDice {

    string diceValue;

    constructor(string memory _value) {
        console.log("Deploying a SingleDice with value:", _value);
        diceValue = _value;
    }

    function value() public view returns (string memory) {
        return diceValue;
    }

    function setValue(string memory _value) public {
        console.log("Changing value from '%s' to '%s'", diceValue, _value);
        diceValue = _value;
    }
}
