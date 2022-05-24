require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong cost maze coin install clinic metal gather'; 
let testAccounts = [
"0xd91498b7138c726325b680cfe03b45711b02c606069e0a6c93dff7943da0a632",
"0xa396b38aa09be9faa31889e1ad9dc24df2a2486a0824b390cf5e7003889dd26b",
"0x7052ff5d09a910a40532b2244042b211e4956604460a94b1bafe905ce12525c7",
"0x234687ce3c9fb6f58fbaaaa07b9fa68f237c8b991639575c0be855dc01bc6c18",
"0x9bacba75d37b1ad8afd246c9903164835985fa82fc5a50fddefa25be9d851d1b",
"0xf591e729d9273a06d89b7bb4a5ac9bf37952b74bffb54de50671eea8d87fa6b6",
"0xcde32cabc1d03856a0dd7965246a9b7e2d7d3e62034c97b9719a7bffdd49c3dc",
"0x379af2d776e555c454b9715868f87c19f078fa99dc1161d629ed6b629e934924",
"0x987ed327e8e29672f4a68eba45174303fd290e88c701dc2a7ff6d9433c057cc3",
"0x428914985494c68decc383d1b1b069a4639549c8547a27f0dfaad39042647f64"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

