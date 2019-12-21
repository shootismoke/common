import { testProvider } from '../../util';
import { aqicn } from './aqicn';

testProvider(aqicn, {
  options: {
    token: process.env.AQICN_TOKEN as string
  }
});
