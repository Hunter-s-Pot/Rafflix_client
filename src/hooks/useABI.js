export const MAIN_ABI = [ { "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "approveContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "burnNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "contractOwner", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMyNFTs", "outputs": [ { "components": [ { "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "internalType": "string", "name": "nftURI", "type": "string" } ], "internalType": "struct Project_Main.NFTData[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "getURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_tokenURI", "type": "string" } ], "name": "mintNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rafflix", "outputs": [ { "internalType": "contract Project_Raffle", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_addr", "type": "address" } ], "name": "setRaffleContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]
export const TOKEN_ABI = [ { "inputs": [ { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "approveContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "blackList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "contractOwner", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rafflix", "outputs": [ { "internalType": "contract Project_Raffle", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "receiveMoney", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_recipient", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "safeTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_recipient", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_sender", "type": "address" }, { "internalType": "address", "name": "_recipient", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_sender", "type": "address" }, { "internalType": "address", "name": "_recipient", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "sendMoney", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_addr", "type": "address" } ], "name": "setRaffleContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]
export const RAFFLE_ABI = [ { "inputs": [ { "internalType": "address payable", "name": "_mainAddress", "type": "address" }, { "internalType": "address payable", "name": "_rafflixTokenAddress", "type": "address" }, { "internalType": "address", "name": "_witnetRandomness", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "announcementWinnerLayer1", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "announcementWinnerLayer2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "contractOwner", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "deleteRaffleLayer1", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "deleteRaffleLayer2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "drawRaffleLayer1", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "drawRaffleLayer2", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_isRaffle", "type": "bool" } ], "name": "getAllRaffleLayer1", "outputs": [ { "components": [ { "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "internalType": "string", "name": "nftURI", "type": "string" }, { "internalType": "enum Project_Raffle.Status", "name": "status", "type": "uint8" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }, { "internalType": "uint256", "name": "ticketLimit", "type": "uint256" }, { "internalType": "uint256", "name": "ticketPrice", "type": "uint256" }, { "internalType": "address[]", "name": "participatedList", "type": "address[]" }, { "internalType": "address", "name": "winner", "type": "address" }, { "internalType": "uint256", "name": "latestRandomizingBlock", "type": "uint256" }, { "internalType": "uint32", "name": "randomNumber", "type": "uint32" } ], "internalType": "struct Project_Raffle.RaffleInfo[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_isRaffle", "type": "bool" } ], "name": "getAllRaffleLayer2", "outputs": [ { "components": [ { "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "internalType": "string", "name": "nftURI", "type": "string" }, { "internalType": "enum Project_Raffle.Status", "name": "status", "type": "uint8" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }, { "internalType": "uint256", "name": "ticketLimit", "type": "uint256" }, { "internalType": "uint256", "name": "ticketPrice", "type": "uint256" }, { "internalType": "address[]", "name": "participatedList", "type": "address[]" }, { "internalType": "address", "name": "winner", "type": "address" }, { "internalType": "uint256", "name": "latestRandomizingBlock", "type": "uint256" }, { "internalType": "uint32", "name": "randomNumber", "type": "uint32" } ], "internalType": "struct Project_Raffle.RaffleInfo[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "getRaffleLayer1", "outputs": [ { "components": [ { "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "internalType": "string", "name": "nftURI", "type": "string" }, { "internalType": "enum Project_Raffle.Status", "name": "status", "type": "uint8" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }, { "internalType": "uint256", "name": "ticketLimit", "type": "uint256" }, { "internalType": "uint256", "name": "ticketPrice", "type": "uint256" }, { "internalType": "address[]", "name": "participatedList", "type": "address[]" }, { "internalType": "address", "name": "winner", "type": "address" }, { "internalType": "uint256", "name": "latestRandomizingBlock", "type": "uint256" }, { "internalType": "uint32", "name": "randomNumber", "type": "uint32" } ], "internalType": "struct Project_Raffle.RaffleInfo", "name": "", "type": "tuple" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "getRaffleLayer2", "outputs": [ { "components": [ { "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "internalType": "string", "name": "nftURI", "type": "string" }, { "internalType": "enum Project_Raffle.Status", "name": "status", "type": "uint8" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }, { "internalType": "uint256", "name": "ticketLimit", "type": "uint256" }, { "internalType": "uint256", "name": "ticketPrice", "type": "uint256" }, { "internalType": "address[]", "name": "participatedList", "type": "address[]" }, { "internalType": "address", "name": "winner", "type": "address" }, { "internalType": "uint256", "name": "latestRandomizingBlock", "type": "uint256" }, { "internalType": "uint32", "name": "randomNumber", "type": "uint32" } ], "internalType": "struct Project_Raffle.RaffleInfo", "name": "", "type": "tuple" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_block", "type": "uint256" } ], "name": "getRandomizeNumber", "outputs": [ { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "uint256", "name": "_prevBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_nextBlock", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_numberOfTickets", "type": "uint256" } ], "name": "joinRaffleLayer1", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_numberOfTickets", "type": "uint256" } ], "name": "joinRaffleLayer2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rafflixMain", "outputs": [ { "internalType": "contract Project_Main", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rafflixToken", "outputs": [ { "internalType": "contract Project_Token", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_endDate", "type": "uint256" }, { "internalType": "uint256", "name": "_ticketLimit", "type": "uint256" }, { "internalType": "uint256", "name": "_ticketPrice", "type": "uint256" } ], "name": "setRaffleLayer1", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_endDate", "type": "uint256" }, { "internalType": "uint256", "name": "_ticketLimit", "type": "uint256" }, { "internalType": "uint256", "name": "_ticketTokenPrice", "type": "uint256" } ], "name": "setRaffleLayer2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "witnet", "outputs": [ { "internalType": "contract IWitnetRandomness", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]