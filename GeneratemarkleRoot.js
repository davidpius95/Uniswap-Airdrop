 const { MerkleTree } = require('merkletreejs')

const crypto = require('crypto')

function sha256(data) {
 // returns Buffer
 return crypto.createHash('sha256').update(data).digest()
}
// here you input the whitelisted addresses [arrAddress]
const arrAddreses = [0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678]
const leaves = arrAddress.map(x => sha256(x).toString('hex'))
console.log("leaves",leaves);
const tree = new MerkleTree(leaves, sha256)
const root = tree.toString('hex')
console.log('TreeData',root);