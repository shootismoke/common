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

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ViewProps } from 'react-native';
import { WithTranslation, Trans } from 'react-i18next';

import { Frequency } from '../context/Frequency';
import * as theme from '../util/theme';
import { swearWords } from './swearWords';
// import { Translate } from '../util/translate'; TODO remove soon

export interface CigaretteTextProps extends ViewProps, WithTranslation {
	cigarettes: number;
	/**
	 * If set, will show the frequency in the text.
	 */
	frequency?: Frequency;
	loading?: boolean;
}

const styles = StyleSheet.create({
	cigarettesCount: {
		color: theme.primaryColor,
	},
});

/**
 * Return a random swear word translation id.
 *
 * @param cigaretteCount - The cigarette count for which we show the swear
 * word.
 */
export function getSwearWordId(cigaretteCount: number): string {
	if (cigaretteCount <= 1) return 'home_cigarettes_oh';

	return swearWords[Math.floor(Math.random() * swearWords.length)];
}

export function CigarettesText(props: CigaretteTextProps): React.ReactElement {
	const { cigarettes, frequency, loading, style, t, ...rest } = props;

	// Decide on a swear word. The effect says that the swear word only changes
	// when the cigarettes count changes.
	const [swearWord, setSwearWord] = useState(getSwearWordId(cigarettes));
	useEffect(() => {
		setSwearWord(getSwearWordId(cigarettes));
	}, [cigarettes, t]);

	if (loading) {
		// FIXME i18n
		return (
			<Text style={theme.shitText}>
				<Trans i18nKey='loading_cigarettes' t={t}>
					Loading<Text style={styles.cigarettesCount}>...</Text>
				</Trans>
				{'\n'}
			</Text>
		);
	}

	// Round to 1 decimal
	const cigarettesRounded = Math.round(cigarettes * 10) / 10;

	return (
		<Text style={[theme.shitText, style]} {...rest}>
			<Trans i18nKey='' tOptions={{ context: frequency }} t={t}>
				{t(swearWord)}! You smoke {'\n'}
				{/* {t('cigarettes_swear_smoke', {
					swearWord: t(swearWord),
					youSmoke: t('cigarettes_you_smoke'),
				})} */}
				<Text style={styles.cigarettesCount}>
					{t('cigarettes_count', { count: cigarettesRounded })}
				</Text>
				{frequency}
			</Trans>
		</Text>
	);
}
