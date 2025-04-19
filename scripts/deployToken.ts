import { ethers } from "hardhat";

async function main() {

    const initialSupply = ethers.parseEther("10000");
    console.log(`Initial Supply in wei: ${initialSupply}`);

    const [deployer, spender] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const TicketSafeToken = await ethers.getContractFactory("TicketSafeToken");
    const token = await TicketSafeToken.deploy(initialSupply);

    await token.waitForDeployment();

    console.log("Token deployed to:", await token.getAddress());

    const recipient = "0xd29009a65999563593De1Fa5FD3a4061eF744A59";
    const amount = ethers.parseUnits("10", 0)

    await token.transfer(recipient, amount);
    console.log(`Transferred 10 TSAFE to ${recipient}`)

    let tokenBalance = await token.balanceOf(deployer.address);
    console.log(`Balance of deployer : ${tokenBalance.toString()}`)

    await token.approve(spender, ethers.parseUnits("50", 0));
    await token.connect(spender).transferFrom(deployer.address, recipient, ethers.parseUnits("40", 0))

    tokenBalance = await token.balanceOf(recipient);
    console.log(`Balance of recipient : ${tokenBalance.toString()}`)

    try{
        await token.connect(spender).transferFrom(deployer.address, recipient, ethers.parseUnits("20", 0))
    }catch(err) {
        console.error(`Error: ${(err as Error).message}`)
    }
}

main()