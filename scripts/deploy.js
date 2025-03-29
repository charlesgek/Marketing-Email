const hre = require('hardhat');

async function main() {
  const EmailAudit = await hre.ethers.getContractFactory("EmailAudit");
  const contract = await EmailAudit.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });