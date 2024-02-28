// // contracts/GameItem.sol
// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// contract GameItem is ERC721URIStorage {
//     uint256 private _nextTokenId;

//     constructor() ERC721("GameItem", "ITM") {}

//     function awardItem(address player, string memory tokenURI)
//         public
//         returns (uint256)
//     {
//         uint256 tokenId = _nextTokenId++;
//         _mint(player, tokenId);
//         _setTokenURI(tokenId, tokenURI);

//         return tokenId;
//     }
// }

// // Address 1 - 0x59f4E786Edb7580C0E13527Dafca9Cdc22301927
// // Address 2 - 0xa43041C8E15CE93A215522DC1F124964f8b75109
// // Contract Address - 0xeB4Cd4a8A7a288d1b74Db1b7b3c7F932128F4465