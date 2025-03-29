import { verifyContentHash } from '@/lib/blockchain/verifier';

describe('Blockchain Verification', () => {
  it('should verify valid content hash', async () => {
    const content = 'test content';
    const txHash = '0x123...'; // Mock tx hash
    const isValid = await verifyContentHash(content, txHash);
    expect(isValid).toBeTruthy();
  });

  it('should reject invalid content', async () => {
    const isValid = await verifyContentHash('invalid', '0x123...');
    expect(isValid).toBeFalsy();
  });
});