// Sh**t! I Smoke
// Copyright (C) 2018-2020  Marcelo S. Coelho, Amaury Martiny

// Sh**t! I Smoke is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Sh**t! I Smoke is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Sh**t! I Smoke.  If not, see <http://www.gnu.org/licenses/>.

import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { Frequency } from '../context/Frequency';
import * as theme from '../util/theme';
import { Cigarettes, CigarettesProps } from '../Cigarettes';
import loadingAnimation from './animation.json';
import { Translate } from '../util/translate';
import { CigarettesText } from '../CigarettesText';

export interface CigarettesBlockProps extends ViewProps, CigarettesProps {
	/**
	 * If set, will show the frequency in the text.
	 */
	frequency?: Frequency;
	/**
	 * Show lottie animation while loading.
	 */
	loading?: boolean;
	t: Translate;
}

const styles = StyleSheet.create({
	animationContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	lottie: {
		backgroundColor: theme.backgroundColor,
	},
});

function renderAnimation(): React.ReactElement {
	return (
		<View style={styles.animationContainer}>
			<LottieView
				autoPlay
				autoSize
				source={loadingAnimation}
				style={styles.lottie}
			/>
		</View>
	);
}

export function CigarettesBlock(
	props: CigarettesBlockProps
): React.ReactElement {
	const {
		cigarettes,
		fullCigaretteLength,
		frequency,
		loading,
		showMaxCigarettes,
		showVerticalAfter,
		spacingVertical,
		spacingHorizontal,
		style,
		t,
		...rest
	} = props;

	return (
		<View style={style} {...rest}>
			{loading ? (
				renderAnimation()
			) : (
				<Cigarettes
					cigarettes={cigarettes}
					fullCigaretteLength={fullCigaretteLength}
					showMaxCigarettes={showMaxCigarettes}
					showVerticalAfter={showVerticalAfter}
					spacingVertical={spacingVertical}
					spacingHorizontal={spacingHorizontal}
				/>
			)}
			<CigarettesText
				cigarettes={cigarettes}
				frequency={frequency}
				loading={loading}
				t={t}
			/>
		</View>
	);
}
