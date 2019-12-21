import { testProvider } from '../../util';
import { waqi } from './waqi';

testProvider(waqi, {
  skip: ['fetchByStation']
});
