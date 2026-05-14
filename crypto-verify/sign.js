const { Wallet } = require("ethers");

async function generateSignature() {
    // 1. Replace with your actual Private Key
    const privateKey = "69a987642074946c658f491f852cf0053f8da965034cbe69f611ab916bbd7d39";
    const wallet = new Wallet(privateKey);

    // 2. The exact message from your iCloud Notes
    const message = "[BscScan.com 13/05/2026 17:33:00] I, hereby verify that I am the owner/creator of the address [0x747E150d20ee9d1C69C0928897F11cD97A0E19c5]";

    // 3. Sign the message
    const signature = await wallet.signMessage(message);

    // 4. Create the JSON block for app.mycrypto.com
    const output = {
        address: wallet.address,
        msg: message,
        sig: signature,
        version: "2"
    };

    console.log("\n--- COPY THE JSON BELOW --- \n");
    console.log(JSON.stringify(output, null, 2));
    console.log("\n--- END COPY ---");
}

generateSignature();