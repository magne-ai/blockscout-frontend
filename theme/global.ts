import type { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

import scrollbar from './foundations/scrollbar';
import addressEntity from './globals/address-entity';
import recaptcha from './globals/recaptcha';
import getDefaultTransitionProps from './utils/getDefaultTransitionProps';

const global = (props: StyleFunctionProps) => ({
  body: {
    bg: mode('white', 'customBlue.200')(props),
    ...getDefaultTransitionProps(),
    '-webkit-tap-highlight-color': 'transparent',
    'font-variant-ligatures': 'no-contextual',
    backgroundImage: mode(
      'url("/static/bg.png")',
      'url("/static/bg.png")',
    )(props),
    'background-size': '100% auto',
    'background-position': 'bottom center',
    'background-repeat': 'no-repeat',
    // "color":"#fff"
  },
  mark: {
    bgColor: mode('green.100', 'green.800')(props),
    color: 'inherit',
  },
  'svg *::selection': {
    color: 'none',
    background: 'none',
  },
  form: {
    w: '100%',
  },
  ...scrollbar(props),
  ...addressEntity(props),
  ...recaptcha(),
});

export default global;
