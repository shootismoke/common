import { testProvider } from '../../util';
import { openaq } from './openaq';

testProvider(openaq, {
  skip: ['fetchByStation']
});
