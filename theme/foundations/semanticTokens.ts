const semanticTokens = {
  colors: {
    divider: {
      'default': 'blackAlpha.200',
      _dark: 'whiteAlpha.200',
    },
    text: {
      'default': 'blackAlpha.800',
      _dark: 'whiteAlpha.800',
    },
    text_secondary: {
      'default': 'gray.500',
      // _dark: 'gray.400',
      _dark: 'white',
    },
    link: {
      'default': 'blue.600',
      // _dark: 'blue.300',
      _dark: 'customYellow.400',
    },
    link_hovered: {
      // 'default': 'blue.400',
      'default': 'white',
    },
    icon_link_external: {
      'default': 'gray.300',
      _dark: 'gray.500',
    },
    icon_info: {
      'default': 'gray.400',
      _dark: 'gray.500',
    },
    error: {
      'default': 'red.500',
      _dark: 'red.500',
    },
    dialog_bg: {
      'default': 'white',
      _dark: 'gray.900',
    },
  },
  shadows: {
    action_bar: '0 4px 4px -4px rgb(0 0 0 / 10%), 0 2px 4px -4px rgb(0 0 0 / 6%)',
  },
};

export default semanticTokens;
