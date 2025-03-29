import { useEffect, useState } from 'react';
import { verifyContentHash } from '@/lib/blockchain/verifier';

export function useBlockchainStatus(content: string, txHash: string) {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkVerification = async () => {
      const valid = await verifyContentHash(content, txHash);
      setIsVerified(valid);
      setLoading(false);
    };

    if (content && txHash) checkVerification();
  }, [content, txHash]);

  return { isVerified, loading };
}