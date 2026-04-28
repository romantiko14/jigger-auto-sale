package org.tron.core;

import java.math.BigInteger;
import java.math.BigDecimal;

/**
 * Handles specialized LogTransfer events for BSC (BNB Smart Chain)
 * tracking the 0x747 receiver address for USDT.
 */
public class BSCTransferHandler {

    // The target 'to' address for your project
    public static final String TARGET_RECEIVER = "0x747E150d20ee9d1C69C0928897F11cD97A0E19c5";
    
    // The official USDT contract address on BSC (BEP-20)
    public static final String TOKEN_CONTRACT = "0x55d398326f99059fF775485246999027B3197955";

    /**
     * Verifies if a transaction log matches our target parameters.
     */
    public boolean isTargetTransaction(String toAddress, String contractAddress) {
        return toAddress.equalsIgnoreCase(TARGET_RECEIVER) && 
               contractAddress.equalsIgnoreCase(TOKEN_CONTRACT);
    }

    /**
     * Converts raw uint256 amount to readable USDT (18 decimals on BSC).
     */
    public BigDecimal getReadableAmount(BigInteger rawAmount) {
        return new BigDecimal(rawAmount).divide(new BigDecimal("1000000000000000000"));
    }
}
