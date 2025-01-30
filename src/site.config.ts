import type { NavLinks, SiteConfig, SocialLinks, GithubInfo} from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'


export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'Nick Stull a.k.a. The Tinkering Nerd',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'Aviation Notebook',
	// Meta property used as the default description meta property
	description: 'A collection of notes on aviation topics.',
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'en',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'en_US',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-US',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

export const GithubRepo: GithubInfo = {
  username: 'tinkernerd',
  repo: 'aviation-notebook',
  get editUrl() {
    return `https://github.com/${this.username}/${this.repo}/tree/main`;
  }
};


export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export const MenuLinks: NavLinks = {
	Home: {
		title: 'Home',
		url: '/'
	},
	About: {
		title: 'Notes',
		url: '/docs'
	},
  StyleTest: {
    title: 'Style Test',
    url: '/styletest'
  }
}

export const socialLinks: SocialLinks = {
  github: {
    title: 'GitHub',
    url: 'https://github.com/tinkernerd/',
    icon: 'tabler:brand-github',
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nicholasp-stull/',
    icon: 'tabler:brand-linkedin',
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/therealnicholasstull/',
    icon: 'tabler:brand-instagram',
  },
  email: {
    title: 'Email',
    url: 'mailto: nicholasp.stull@gmail.com',
    icon: 'tabler:mail',
  }
};

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}
