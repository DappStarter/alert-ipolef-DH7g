require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe story return sad million great light army ghost'; 
let testAccounts = [
"0x261f46e7d1c735bc686ff9bd74f0000e933c12faa5291f2120b0ca5e8a32507a",
"0x4d13fcfe31893bf76f7beac21c6cbe64dc4652d6f2b9d43e3af5d5ba3313bd71",
"0x6f7504c03a2ae93fd46adccba96eff429ceec78ab52d2aaac14ff64507ff6608",
"0x3b6b0a25e0fdaea8379376d1f767462958752692b551156d6953eae27cc230e3",
"0xcdd56421935d4d3a648a0f2275a15fa98fa4ccd7dc9bd0aa0d022cf856a92236",
"0xf3021f09699d5bd6fba2aad2c4930c236fa69eb68357b8012b2e73a79dc32021",
"0xde3049407d37eaed8ed4c48f2fd2993aea5b3b586aa34dfb8a0c30b35a2e0b23",
"0x40ab57926165b1a6b171d1cfe0c32126fa55d7c325c50d1262e0096417bc437d",
"0x4a31cb7a5f3ee785295df3801b3404d5ba5ebad4a5bf78479f8316ce5959f27f",
"0x06262beb782028303afa22b3ad3cde030e21bb54f72f3e47bc418eb41773ccdf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


