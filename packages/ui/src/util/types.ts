/**
 * This file is part of Sh**t! I Smoke.
 *
 * Copyright (C) 2018-2021  Marcelo S. Coelho, Amaury M.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import type { ExpoPushTicket } from 'expo-server-sdk';
import type { Document } from 'mongoose';

export type Frequency = 'daily' | 'weekly' | 'monthly';

export interface BackendError {
	error: string;
}

export interface IEmailReport {
	email: string;
	frequency: Frequency;
}

export interface IExpoReport {
	expoPushToken: string;
	frequency: Frequency;
}

export interface IUser {
	emailReport?: IEmailReport;
	expoReport?: IExpoReport;
	lastStationId: string;
	timezone: string;
}

export interface MongoUser extends IUser, Document {
	_id: string;
}

export type IPushTicket = Omit<
	ExpoPushTicket & {
		receiptId?: string;
		userId: string;
	},
	'id'
>;

export interface MongoPushTicket extends IPushTicket, Document {
	_id: string;
}
