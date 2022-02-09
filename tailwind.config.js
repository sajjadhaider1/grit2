module.exports = {
	purge: [],

	// Dark mode
	darkMode: false,

	// Setup theme
	theme: {
	
		screens: {
			'sm': '340px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1200px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			'2xl': '1380px',
			// => @media (min-width: 1280px) { ... }
			'3xl': '1460px',

			'4xl': '1680px',
			'5xl': '1800px',
			// => @media (min-width: 1536px) { ... }
		},

		scale: {
			'0': '0',
			'25': '.25',
			'50': '.5',
			'75': '.75',
			'90': '.9',
			'95': '.95',
			'100': '1',
			'105': '1.05',
			'110': '1.1',
			'115': '1.2',
			'125': '1.25',
			'150': '1.5',
			'200': '2',
		},

		// Fonts
		fontFamily: {
			// body: ['Roboto', 'sans-serif'],
		},

		fontSize: {
			'x' : '0.5rem',
			'x-1' : '0.625rem',
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'2xl-2': '1.625rem',
			'2xl-3': '1.75rem',
			'2xl-4': '1.825rem',
			'3xl': '1.875rem',
			'3xl-1': '2rem',
			'4xl':['2.5rem', {
				letterSpacing: '-0.02em',
				lineHeight: '1.3',
			  }],
			'4xl-1': ['2.75rem', {
				letterSpacing: '-0.02em',
				lineHeight: '1.3',
			  }],
			'5xl': '3rem',
			'5xl-1': '3.25rem',
			'6xl': '4rem',
			'6xl-1': ['4.5rem', {
				letterSpacing: '-0.02em',
				lineHeight: '1.1',
			}],
			'7xl': '5rem',
			'7xl-2':['5rem', {
				letterSpacing: '-0.02em',
				lineHeight: '1.3',
			  }],
			'8xl': '6rem',
			'8xl-2': '7rem',
			'9xl': '8rem',

		},

		borderRadius: {
		   'sm': '2px', //0.125rem
		   'md' : '4px',
		   'md-1': '8px',
		   'lg': '7px',
		   'lg-1' : '13px',
		   'lg-2' : '20px',
		   'full' : '9999px',
		   '4xl': '48px', //3rem
		},

		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '10px 10px 15px -3px rgba(0, 0, 0, 0.2), -2px -4px 20px -1px rgba(255, 255, 255, 1)',
			xl: '25px 25px 20px -3px rgba(0, 0, 0, 0.2), 1px 1px 20px -1px rgba(255, 255, 255, 1)',
			'xl-1': '15px 15px 20px -3px rgba(0, 0, 0, 0.1), -12px -8px 32px -1px rgba(255, 255, 255, 1)',
			'xl-2': '15px 15px 35px 5px rgba(0, 0, 0, 0.1), -2px -4px 32px 3px rgba(255, 255, 255, 1)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			'4xl': '0 0 30px -2px rgba(11, 95, 255,0.25)',
			'5xl': '0 0 40px 10px rgba(0, 0, 0,0.25)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none',
			bottom: '0px 5px 10px -3px rgba(0, 0, 0, 0.3)'
		},

		// Colors
		colors: {
			transparent: 'transparent',
			// White
			white: {
				1: '#fff',
				2: '#D3D3D3',
			},

			// Grey
			grey: {
				1: '#C4C4C4',
				2: '#B9B8B8',
			},

			// Black
			black: {
				1: '#000',
				2: '#272727',
			},

			// Orange
			orange: {
				1: 'orange',
			},

			// Green
			green: {
				1: 'green',
			},

			// Red
			red: {
				1: 'red',
				
			},

			//blue
			blue: {
				1: '#0B5FFF',
				2: '#0F69F6',
				3: '#4E93FF',
				hover: '#4C8BFF'
			},

			//pink
			pink: {
				1: '#FF4974',
				hover: '#F47990'
			},

			// Accent
			accent: {
				DEFAULT: '#0c3d6d',
				fill: '#ccecfd',
				primary: '#1890ff',
				hover: '#40a9ff'
			},

			// Alert
			alert: {
				success: {
					DEFAULT: '#f6ffed',
					fill: '#5cad1f',
					border: '#b7eb8f'
				},
				info: {
					DEFAULT: '#e6f7ff',
					fill: '#007ecc',
					border: '#91d5ff'
				},
				warning: {
					DEFAULT: '#fffbe6',
					fill: '#cc9c00',
					border: '#ffe58f'
				},
				error: {
					DEFAULT: '#fff2f0',
					fill: '#cc1100',
					border: '#ffccc7',
					hover: '#b20000'
				}
			},
		},

		extend: {
			width: {
				'welcome_page':'1790px',
				't_welcome_page':'1590px',
				'th_welcome_page':'1390px',
				'f_welcome_page':'1240px',
				'page_width' : '1392px',
				't_page_width' : '1192px',
				'th_page_width' : '992px',
				'f_page_width' : '892px',
				'slide_card' : '430px',
				'event_card' : '450px',
			},
			height: {
				'welcome_section' : '750px',
				'events' : '569px',
				'comment' : '432px',
				'gradient' : '1082px',
				'typeform' : '650px',
			},
			inset: {
				'16-1': '4.88rem',
			},
			lineHeight: {
				'11': '3.25rem',
				'12': '57px'
			},
			padding: {
				'13': '3.25rem',
			},
			margin: {
				'-37': '-9.2rem',

			   }
		},
	},
	variants: {
		extend: {
		},
	},
	plugins: [],
}
