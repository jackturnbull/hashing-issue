const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

(async () => {
  try {
    await signer.sendTransaction({
      to: ethers.constants.AddressZero,
      value: 1,
    });
  } catch (e) {
    console.error(e);
  }
})();
