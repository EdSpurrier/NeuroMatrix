export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "NeuroMatrix",
	description: "Infinitely Expandable Neural Matrix.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "items",
			href: "/items",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		chatGPT: "https://chat.openai.com/",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    	sponsor: "https://patreon.com/jrgarciadev"
	},
};
