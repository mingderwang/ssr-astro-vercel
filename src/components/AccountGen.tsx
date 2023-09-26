import { createSignal } from 'solid-js';
import { ethers } from 'ethers';

export default function AccountGen() {
	const [address, setAddress] = createSignal('');
	const gen = () => {
		const wallet = ethers.Wallet.createRandom();
		setAddress(wallet.address);
	}
	const [count, setCount] = createSignal(0);
	const add = () => setCount(count() + 1);
	const subtract = () => setCount(count() - 1);

	return (
		<>
			<div>
				<button onClick={gen}> new account </button>
				{' ' + address()}
			</div>
		</>
	);
}
