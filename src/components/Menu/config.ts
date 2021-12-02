import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pancakeswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Project Github',
    icon: 'GroupsIcon',
    href: 'https://github.com/ibhagwan/pancake-swap-interface-v1',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Router Contract',
        href: 'https://testnet.bscscan.com/address/0xD99D1c33F9fC3444f8101754aBC46c52416550D1#code',
      },
      {
        label: 'Factory Contract',
        href: 'https://testnet.bscscan.com/address/0x6725f303b657a9451d8ba641348b6761a6cc7a17#code',
      },
      {
        label: 'WETH (WBNB)',
        href: 'https://testnet.bscscan.com/address/0xae13d989dac2f0debff460ac112a837c89baa7cd#code',
      },
      {
        label: 'KiemTienOnline360 Testnet Swap',
        href: 'https://bsc.kiemtienonline360.com/',
      },
      {
        label: 'KiemTienOnline360 PancakeSwap',
        href: 'https://pancake.kiemtienonline360.com/',
      },
    ],
  },
]

export default config
