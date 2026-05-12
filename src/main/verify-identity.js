const ethers = require('ethers');

// The message and signature from your BscScan verification
const verificationData = {
    address: "0xb9e76a29d370f0a59510973d4022f7833ddb200b",
    msg: "[BscScan.com 12/05/2026 19:37:23] I, hereby verify that I am the owner/creator of the address [0x55d398326f99059ff775485246999027b3197955] linked to 0x747E150d20ee9d1C69C0928897F11cD97A0E19c5",
    sig: "0x7a425ad81beec7cea0da5e4429b661cf87b86a81df38f36df80217a35a2e690905963df80507a4482133f1449bcfe7a3814782ac2b2f65e9a4f343ddd853172d1b"
};

async function checkIdentity() {
    try {
        // Recovers the address that generated the signature
        const recoveredAddress = ethers.utils.verifyMessage(verificationData.msg, verificationData.sig);
        
        if (recoveredAddress.toLowerCase() === verificationData.address.toLowerCase()) {
            console.log("✅ VERIFIED: This wallet belongs to Jigger Honor Gaza.");
            console.log("🔗 Linked Identity: charmingjigger.blockchain");
        } else {
            console.log("❌ FAILED: Signature does not match address.");
        }
    } catch (error) {
        console.error("Verification Error:", error);
    }
}

checkIdentity();
