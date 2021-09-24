# generateMarkleTree Script.js Installation

git init

npm i merkletreejs

node GeneratemarkleRoot.js







# Uniswap-Airdrop

This is uniswap-airdrop contract.
In the contract the comment explaine the explecitly explain the functionallity of the code.

interface IERC20 : this is an EIP20 interface standard for fungible Token. the this make the our token compactable with the standard

library MerkleProof : this is the markleproof which Returns a true value if a `leaf` can be proved to be a part of a Merkle tree defined by `root`. For this, a `proof` must be provided, containing sibling hashes on the branch from the leaf to the root of the tree. Each  pair of leaves and each pair of pre-images are assumed to be sorted.
 function verify : this function verify the computed hash (root) is equal to the provided root


interface IMerkleDistributor : this allow distribution to user to claim if they are eligible i.e if they exist in the markleproof

function token() : This function  returns the address of the token distributed by this contract.
function merkleRoot() :This function  returns the merkle root of the merkle tree containing account balances available to claim.
function isClaimed :  this function returns true if the index has been marked claimed.i.e seting an address to true so user dont recieve twice
function claim : this function Verify the merkle proof,mark it claimed and send the token.
function _setClaimed






