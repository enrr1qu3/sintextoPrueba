import type { ThemeConfig } from 'antd';
import { Poppins } from 'next/font/google';

// Poppins-Light     = weight['300']
// Poppins-Regular   = weight['400']
// Poppins-Medium    = weight['500']
// Poppins-SemiBold  = weight['600']
// Poppins-Bold      = weight['700']
// Poppins-ExtraBold = weight['800']
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
  subsets: [ "devanagari", "latin", "latin-ext" ]
});

const theme: ThemeConfig = {
  token: {
    fontFamily: poppins.style.fontFamily
  },
};

export default theme;