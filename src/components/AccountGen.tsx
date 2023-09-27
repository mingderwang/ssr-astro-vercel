import { createSignal } from 'solid-js';
import { ethers } from 'ethers';

export default function AccountGen() {
	const [address, setAddress] = createSignal('');
	const gen = () => {
		const wallet = ethers.Wallet.createRandom();
		setAddress(wallet.address);
	}

	return (
		<>
			<div>
				<button disabled={!address} onClick={gen}>new account</button>
				{' ' + address()}
			</div>
		</>
	);
}