import { aqicn } from '@shootismoke/dataproviders';
import { createApi, round } from './api';

const testCases = [
	{
		date: '2021-02-28T11:56:06.581Z',
		data:
			'{"status":"ok","data":{"aqi":166,"idx":446,"attributions":[{"url":"http://www.bjmemc.com.cn/","name":"Beijing Environmental Protection Monitoring Center (北京市环境保护监测中心)"},{"url":"https://waqi.info/","name":"World Air Quality Index Project"}],"city":{"geo":[39.929,116.417],"name":"Dongcheng Dongsi, Beijing (东城东四)","url":"https://aqicn.org/city/beijing/dongchengdongsi"},"dominentpol":"pm25","iaqi":{"co":{"v":8.2},"dew":{"v":4},"h":{"v":93},"no2":{"v":13.8},"o3":{"v":17.1},"p":{"v":1025},"pm10":{"v":70},"pm25":{"v":166},"so2":{"v":1.6},"t":{"v":5},"w":{"v":0.2}},"time":{"s":"2021-02-28 19:00:00","tz":"+08:00","v":1614538800,"iso":"2021-02-28T19:00:00+08:00"},"forecast":{"daily":{"o3":[{"avg":3,"day":"2021-02-26","max":9,"min":1},{"avg":4,"day":"2021-02-27","max":15,"min":1},{"avg":4,"day":"2021-02-28","max":11,"min":1},{"avg":10,"day":"2021-03-01","max":21,"min":1},{"avg":4,"day":"2021-03-02","max":12,"min":1},{"avg":4,"day":"2021-03-03","max":11,"min":1},{"avg":1,"day":"2021-03-04","max":2,"min":1}],"pm10":[{"avg":100,"day":"2021-02-26","max":122,"min":69},{"avg":97,"day":"2021-02-27","max":122,"min":67},{"avg":105,"day":"2021-02-28","max":122,"min":58},{"avg":48,"day":"2021-03-01","max":60,"min":27},{"avg":66,"day":"2021-03-02","max":73,"min":54},{"avg":120,"day":"2021-03-03","max":126,"min":85},{"avg":101,"day":"2021-03-04","max":122,"min":72},{"avg":59,"day":"2021-03-05","max":77,"min":45},{"avg":50,"day":"2021-03-06","max":57,"min":44}],"pm25":[{"avg":213,"day":"2021-02-26","max":248,"min":169},{"avg":209,"day":"2021-02-27","max":248,"min":167},{"avg":221,"day":"2021-02-28","max":248,"min":158},{"avg":142,"day":"2021-03-01","max":159,"min":87},{"avg":165,"day":"2021-03-02","max":172,"min":154},{"avg":242,"day":"2021-03-03","max":248,"min":170},{"avg":216,"day":"2021-03-04","max":248,"min":169},{"avg":140,"day":"2021-03-05","max":178,"min":93},{"avg":137,"day":"2021-03-06","max":156,"min":102}],"uvi":[{"avg":1,"day":"2021-02-26","max":3,"min":0},{"avg":0,"day":"2021-02-27","max":2,"min":0},{"avg":0,"day":"2021-02-28","max":1,"min":0},{"avg":1,"day":"2021-03-01","max":4,"min":0},{"avg":1,"day":"2021-03-02","max":3,"min":0},{"avg":1,"day":"2021-03-03","max":3,"min":0},{"avg":0,"day":"2021-03-04","max":2,"min":0},{"avg":0,"day":"2021-03-05","max":0,"min":0}]}},"debug":{"sync":"2021-02-28T20:33:16+09:00"}}}',
		expected: {
			dailyCigarettes: 3.8454545454545452,
			distanceToStation: 0,
			isAccurate: true,
		},
		gps: { latitude: 339.9289, longitude: 116.3883 },
		url:
			'https://api.waqi.info/feed/geo:39.9289;116.3883/?token={AQICN_TOKEN}',
	},
];

describe('round', () => {
	it('should round numbers correctly', () => {
		expect(round(2)).toBe(2);
		expect(round(2.3)).toBe(2.3);
		expect(round(2.32)).toBe(2.3);
		expect(round(2.99)).toBe(3);
	});
});

describe('createApi', () => {
	it('should work with testCases', () => {
		testCases.forEach((tc) => {
			const results = aqicn.normalizeByGps(JSON.parse(tc.data).data);
			const api = createApi(tc.gps, results);

			expect(api.shootismoke).toMatchObject(tc.expected);
		});
	});
});
