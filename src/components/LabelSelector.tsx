import React from 'react';
import Select from 'react-select';
import { create } from 'zustand';
import styles from '@site/src/components/labelselector.module.css';
import { persist } from 'zustand/middleware';
import { translate } from '@docusaurus/Translate';

const inputLabels = [
	{ value: 'GP2040', label: 'GP2040' },
	{ value: 'XInput', label: 'XInput' },
	{ value: 'DirectInput', label: 'DirectInput' },
	{ value: 'Nintendo Switch', label: 'Nintendo Switch' },
	{ value: 'PS3', label: 'PS3' },
	{ value: 'PS4', label: 'PS4' },
	{ value: 'Arcade', label: 'Arcade' },
];

const labelData = {
	GP2040: {
		name: translate({id: 'GP2040.name', message: 'GP2040'}),
		Up: translate({id: 'GP2040.Up', message: 'Up'}),
		Down: translate({id: 'GP2040.Down', message: 'Down'}),
		Left: translate({id: 'GP2040.Left', message: 'Left'}),
		Right: translate({id: 'GP2040.Right', message: 'Right'}),
		B1: translate({id: 'GP2040.B1', message: 'B1'}),
		B2: translate({id: 'GP2040.B2', message: 'B2'}),
		B3: translate({id: 'GP2040.B3', message: 'B3'}),
		B4: translate({id: 'GP2040.B4', message: 'B4'}),
		L1: translate({id: 'GP2040.L1', message: 'L1'}),
		R1: translate({id: 'GP2040.R1', message: 'R1'}),
		L2: translate({id: 'GP2040.L2', message: 'L2'}),
		R2: translate({id: 'GP2040.R2', message: 'R2'}),
		S1: translate({id: 'GP2040.S1', message: 'S1'}),
		S2: translate({id: 'GP2040.S2', message: 'S2'}),
		L3: translate({id: 'GP2040.L3', message: 'L3'}),
		R3: translate({id: 'GP2040.R3', message: 'R3'}),
		A1: translate({id: 'GP2040.A1', message: 'A1'}),
		A2: translate({id: 'GP2040.A2', message: 'A2'}),
		Function: translate({id: 'GP2040.Function', message: 'Function'}),
	},
	XInput: {
		name: translate({id: 'XInput.name', message: 'XInput'}),
		Up: translate({id: 'XInput.Up', message: 'Up'}),
		Down: translate({id: 'XInput.Down', message: 'Down'}),
		Left: translate({id: 'XInput.Left', message: 'Left'}),
		Right: translate({id: 'XInput.Right', message: 'Right'}),
		B1: translate({id: 'XInput.B1', message: 'A'}),
		B2: translate({id: 'XInput.B2', message: 'B'}),
		B3: translate({id: 'XInput.B3', message: 'X'}),
		B4: translate({id: 'XInput.B4', message: 'Y'}),
		L1: translate({id: 'XInput.L1', message: 'LB'}),
		R1: translate({id: 'XInput.R1', message: 'RB'}),
		L2: translate({id: 'XInput.L2', message: 'LT'}),
		R2: translate({id: 'XInput.R2', message: 'RT'}),
		S1: translate({id: 'XInput.S1', message: 'Back'}),
		S2: translate({id: 'XInput.S2', message: 'Start'}),
		L3: translate({id: 'XInput.L3', message: 'LS'}),
		R3: translate({id: 'XInput.R3', message: 'RS'}),
		A1: translate({id: 'XInput.A1', message: 'Guide'}),
		A2: translate({id: 'XInput.A2', message: '(A2)'}),
		Function: translate({id: 'XInput.Function', message: 'Function'}),
	},
	DirectInput: {
		name: translate({id: 'DirectInput.name', message: 'DirectInput'}),
		Up: translate({id: 'DirectInput.Up', message: 'Up'}),
		Down: translate({id: 'DirectInput.Down', message: 'Down'}),
		Left: translate({id: 'DirectInput.Left', message: 'Left'}),
		Right: translate({id: 'DirectInput.Right', message: 'Right'}),
		B1: translate({id: 'DirectInput.B1', message: '2'}),
		B2: translate({id: 'DirectInput.B2', message: '3'}),
		B3: translate({id: 'DirectInput.B3', message: '1'}),
		B4: translate({id: 'DirectInput.B4', message: '4'}),
		L1: translate({id: 'DirectInput.L1', message: '5'}),
		R1: translate({id: 'DirectInput.R1', message: '6'}),
		L2: translate({id: 'DirectInput.L2', message: '7'}),
		R2: translate({id: 'DirectInput.R2', message: '8'}),
		S1: translate({id: 'DirectInput.S1', message: '9'}),
		S2: translate({id: 'DirectInput.S2', message: '10'}),
		L3: translate({id: 'DirectInput.L3', message: '11'}),
		R3: translate({id: 'DirectInput.R3', message: '12'}),
		A1: translate({id: 'DirectInput.A1', message: '13'}),
		A2: translate({id: 'DirectInput.A2', message: '14'}),
		Function: translate({id: 'DirectInput.Function', message: 'Function'}),
	},
	'Nintendo Switch': {
		name: translate({id: 'NintendoSwitch.name', message: 'Nintendo Switch'}),
		Up: translate({id: 'NintendoSwitch.Up', message: 'Up'}),
		Down: translate({id: 'NintendoSwitch.Down', message: 'Down'}),
		Left: translate({id: 'NintendoSwitch.Left', message: 'Left'}),
		Right: translate({id: 'NintendoSwitch.Right', message: 'Right'}),
		B1: translate({id: 'NintendoSwitch.B1', message: 'B'}),
		B2: translate({id: 'NintendoSwitch.B2', message: 'A'}),
		B3: translate({id: 'NintendoSwitch.B3', message: 'Y'}),
		B4: translate({id: 'NintendoSwitch.B4', message: 'X'}),
		L1: translate({id: 'NintendoSwitch.L1', message: 'L'}),
		R1: translate({id: 'NintendoSwitch.R1', message: 'R'}),
		L2: translate({id: 'NintendoSwitch.L2', message: 'ZL'}),
		R2: translate({id: 'NintendoSwitch.R2', message: 'ZR'}),
		S1: translate({id: 'NintendoSwitch.S1', message: 'Minus'}),
		S2: translate({id: 'NintendoSwitch.S2', message: 'Plus'}),
		L3: translate({id: 'NintendoSwitch.L3', message: 'LS'}),
		R3: translate({id: 'NintendoSwitch.R3', message: 'RS'}),
		A1: translate({id: 'NintendoSwitch.A1', message: 'Home'}),
		A2: translate({id: 'NintendoSwitch.A2', message: 'Capture'}),
		Function: translate({id: 'NintendoSwitch.Function', message: 'Function'}),
	},
	PS4: {
		name: translate({id: 'PS4.name', message: 'PS4'}),
		Up: translate({id: 'PS4.Up', message: 'Up'}),
		Down: translate({id: 'PS4.Down', message: 'Down'}),
		Left: translate({id: 'PS4.Left', message: 'Left'}),
		Right: translate({id: 'PS4.Right', message: 'Right'}),
		B1: translate({id: 'PS4.B1', message: 'Cross'}),
		B2: translate({id: 'PS4.B2', message: 'Circle'}),
		B3: translate({id: 'PS4.B3', message: 'Square'}),
		B4: translate({id: 'PS4.B4', message: 'Triangle'}),
		L1: translate({id: 'PS4.L1', message: 'L1'}),
		R1: translate({id: 'PS4.R1', message: 'R1'}),
		L2: translate({id: 'PS4.L2', message: 'L2'}),
		R2: translate({id: 'PS4.R2', message: 'R2'}),
		S1: translate({id: 'PS4.S1', message: 'Share'}),
		S2: translate({id: 'PS4.S2', message: 'Options'}),
		L3: translate({id: 'PS4.L3', message: 'L3'}),
		R3: translate({id: 'PS4.R3', message: 'R3'}),
		A1: translate({id: 'PS4.A1', message: 'PS'}),
		A2: translate({id: 'PS4.A2', message: 'Touchpad'}),
		Function: translate({id: 'PS4.Function', message: 'Function'}),
	},
	PS3: {
		name: translate({id: 'PS3.name', message: 'PS3'}),
		Up: translate({id: 'PS3.Up', message: 'Up'}),
		Down: translate({id: 'PS3.Down', message: 'Down'}),
		Left: translate({id: 'PS3.Left', message: 'Left'}),
		Right: translate({id: 'PS3.Right', message: 'Right'}),
		B1: translate({id: 'PS3.B1', message: 'Cross'}),
		B2: translate({id: 'PS3.B2', message: 'Circle'}),
		B3: translate({id: 'PS3.B3', message: 'Square'}),
		B4: translate({id: 'PS3.B4', message: 'Triangle'}),
		L1: translate({id: 'PS3.L1', message: 'L1'}),
		R1: translate({id: 'PS3.R1', message: 'R1'}),
		L2: translate({id: 'PS3.L2', message: 'L2'}),
		R2: translate({id: 'PS3.R2', message: 'R2'}),
		S1: translate({id: 'PS3.S1', message: 'Select'}),
		S2: translate({id: 'PS3.S2', message: 'Start'}),
		L3: translate({id: 'PS3.L3', message: 'L3'}),
		R3: translate({id: 'PS3.R3', message: 'R3'}),
		A1: translate({id: 'PS3.A1', message: 'PS'}),
		A2: translate({id: 'PS3.A2', message: '(A2)'}),
		Function: translate({id: 'PS3.Function', message: 'Function'}),
	},
	Arcade: {
		name: translate({id: 'Arcade.name', message: 'Arcade'}),
		Up: translate({id: 'Arcade.Up', message: 'Up'}),
		Down: translate({id: 'Arcade.Down', message: 'Down'}),
		Left: translate({id: 'Arcade.Left', message: 'Left'}),
		Right: translate({id: 'Arcade.Right', message: 'Right'}),
		B1: translate({id: 'Arcade.B1', message: 'K1'}),
		B2: translate({id: 'Arcade.B2', message: 'K2'}),
		B3: translate({id: 'Arcade.B3', message: 'P1'}),
		B4: translate({id: 'Arcade.B4', message: 'P2'}),
		L1: translate({id: 'Arcade.L1', message: 'P4'}),
		R1: translate({id: 'Arcade.R1', message: 'P3'}),
		L2: translate({id: 'Arcade.L2', message: 'K4'}),
		R2: translate({id: 'Arcade.R2', message: 'K3'}),
		S1: translate({id: 'Arcade.S1', message: 'Select'}),
		S2: translate({id: 'Arcade.S2', message: 'Start'}),
		L3: translate({id: 'Arcade.L3', message: 'LS'}),
		R3: translate({id: 'Arcade.R3', message: 'RS'}),
		A1: translate({id: 'Arcade.A1', message: 'Home'}),
		A2: translate({id: 'Arcade.A2', message: '(A2)'}),
		Function: translate({id: 'Arcade.Function', message: 'Function'}),
	},
} as const;

type SelectedType = { value: string; label: string };

type State = {
	selected: SelectedType;
};

type Actions = {
	select: (value: SelectedType) => void;
};

const INITIAL_STATE: State = {
	selected: inputLabels[0],
};

const useLabelSelector = create<State & Actions>()(
	persist(
		(set) => ({
			...INITIAL_STATE,
			select: (selected) => {
				set({ selected });
			},
		}),
		{ name: 'SelectedLabel' },
	),
);

const customStyles = {
	option: (styles, { data, isDisabled, isSelected }) => {
		const color = 0x000000;
		return {
			...styles,
			color: isDisabled ? '#ccc' : isSelected ? 'white' : 'black',
			':active': {
				...styles[':active'],
				backgroundColor: !isDisabled
					? isSelected
						? data.color
						: color
					: undefined,
			},
		};
	},
};

export default function InputLabelSelector() {
	const { selected, select } = useLabelSelector();
	return (
		<Select
			value={selected}
			className={styles.labelSelector}
			options={inputLabels}
			onChange={(option) => select(option as SelectedType)}
			styles={customStyles}
		/>
	);
}

export function Hotkey({ buttons }) {
	const selected = useLabelSelector((state) => state.selected);

	const hotKeyCombo = buttons
		.map((input) => labelData[selected.value][input])
		.join(' + ');

	return (
		<a href="/usage#buttons">
			<code>{hotKeyCombo}</code>
		</a>
	);
}
