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
 * @param maxLevel - The cigarette count for which we show the swear
 */
export function getSwearWordId(cigaretteCount: number, maxLevel: number = 7): number {
	if (cigaretteCount <= 1) return 0;
	const minLevel = 1;
	const limRange = Math.random() * cigaretteCount * (maxLevel - minLevel) + minLevel;
	return Math.floor(limRange);
}

export function CigarettesText(props: CigaretteTextProps): React.ReactElement {
	const {
		cigarettes,
		frequency, loading, style,
		i18n, t, tReady,
		...rest
	} = props;

	// Decide on a swear word. The effect says that the swear word only changes
	// when the cigarettes count changes.
	const [swearWordId, setSwearWordId] = useState(getSwearWordId(cigarettes));
	useEffect(() => {
		setSwearWordId(getSwearWordId(cigarettes));
	}, [cigarettes, t]);

	if (loading) {
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
			<Trans
				i18nKey='cigarette_report'
				tOptions={{ context: frequency }}
				values={{ id: swearWordId, cig_count: cigarettesRounded }}
				t={t}
			>
				$t(swear_word, {'{'} "context": "{'{{id}}'}" {'}'})! You smoke {'\n'}
				<Text style={styles.cigarettesCount}>$t(cigarette_count, {'{'} "count": "{'{{cig_count}}'}" {'}'})</Text> {{ frequency }}.
			</Trans>
		</Text>
	);
}

/**
 * For i18next-parser
 *
 * > Convert dynamic values to static values
 * t('swear_word', {context: '1'})
 * t('swear_word', {context: '2'})
 * t('swear_word', {context: '3'})
 * t('swear_word', {context: '4'})
 * t('swear_word', {context: '5'})
 * t('swear_word', {context: '6'})
 * t('swear_word', {context: '7'})
 * t('cigarette_report')
 * t('cigarette_report', {context: 'daily'})
 * t('cigarette_report', {context: 'weekly'})
 * t('cigarette_report', {context: 'monthly'})
 *
 * > Add hidden translation
 * t('cigarette_count', {count: 1000})
 */
