pragma solidity ^0.4.17;

contract Notepad {
    string public note;

    //constructor function
    function Notepad(string initialNote) public {
        note = initialNote;
    }
    
    function setNote(string newNote) public {
        note = newNote;
    }
}