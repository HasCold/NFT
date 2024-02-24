// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.5.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract MyNFT is ERC721URIStorage, Ownable {

    using Counters for Counters.Counter;  // This is the way to use the library
    Counters.Counter private _tokenIds;  // we can give the ID to our NFT

    constructor() ERC721("Hasan NFT", "HFT") {}

    // The next step is to mint the NFT means to create the NFT
    function minNFT(address recipient, string memory tokenURI) public onlyOwner returns(uint256){
        _tokenIds.increment();   // tokenId is 0 when we upload the NFT the tokenId will increment by 1

        uint256 newItemId = _tokenIds.current();   // store the current value in the new variable
        _mint(recipient, newItemId);  // mint the NFT
        _setTokenURI(newItemId, tokenURI);  // Register the NFT
        return newItemId;
    } 
}   