export default {
  defaultNetworkId: process.env.VUE_APP_DEFAULT_NETWORK_ID || window.overrideEnv?.DEFAULT_NETWORK_ID || 'ae_mainnet',

  ae_uat: {
    nodeUrl: process.env.VUE_APP_AE_UAT_NODE_URL || window.overrideEnv?.AE_UAT_NODE_URL || 'https://testnet.aeternity.io',
    middlewareUrl: process.env.VUE_APP_AE_UAT_MDW_URL || window.overrideEnv?.AE_UAT_MDW_URL || 'https://testnet.aeternity.io/mdw',
    contractAddress: process.env.VUE_APP_AE_UAT_CONTRACT_ADDRESS || window.overrideEnv?.AE_UAT_CONTRACT_ADDRESS || 'ct_2nritSnqW6zooEL4g2SMW5pf12GUbrNyZ17osTLrap7wXiSSjf',
    backendUrl: process.env.VUE_APP_AE_UAT_BACKEND_URL || window.overrideEnv?.AE_UAT_BACKEND_URL || 'https://governance-server-testnet.prd.aepps.com',
  },

  ae_mainnet: {
    nodeUrl: process.env.VUE_APP_AE_MAINNET_NODE_URL || window.overrideEnv?.AE_MAINNET_NODE_URL || 'https://mainnet.aeternity.io',
    middlewareUrl: process.env.VUE_APP_AE_MAINNET_MDW_URL || window.overrideEnv?.AE_MAINNET_MDW_URL || 'https://mainnet.aeternity.io/mdw',
    contractAddress: process.env.VUE_APP_AE_MAINNET_CONTRACT_ADDRESS || window.overrideEnv?.AE_MAINNET_CONTRACT_ADDRESS || 'ct_ouZib4wT9cNwgRA1pxgA63XEUd8eQRrG8PcePDEYogBc1VYTq',
    backendUrl: process.env.VUE_APP_AE_MAINNET_BACKEND_URL || window.overrideEnv?.AE_MAINNET_BACKEND_URL || 'https://governance-server-mainnet.prd.aepps.com',
  }
};
