import { createAppKit } from '@reown/appkit'
import { TronAdapter } from '@reown/appkit-adapter-tron'
import { tron } from '@reown/appkit/networks'

// 1. Initialize the Tron Adapter
const tronAdapter = new TronAdapter()

// 2. Create the AppKit instance
export const appkit = createAppKit({
  adapters: [tronAdapter],
  networks: [tron],
  projectId: 'f766b793d68858ee34e4b6839766d87d', // From your Reown Dashboard
  features: {
    analytics: true,
    swaps: true,
    onramp: true
  },
  themeMode: 'dark'
})

// 3. Optional: Logic to update your HTML balance live
appkit.subscribeAccount(state => {
  if (state.isConnected) {
    console.log("Connected to Wallet:", state.address);
  }
})
