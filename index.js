const snarkjs = require("snarkjs");
const main = async () => {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        { in: 10 }, 
        "build/poseidon_hasher_js/poseidon_hasher.wasm", 
        "circuit_0000.zkey"
    );
    console.log(publicSignals);
    console.log("\n\n\n");
    console.log(proof);
}
main();