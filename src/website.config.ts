// @section Project Folders
// @note Relative to the docusaurus folder
const RootDir = "../../"
const SrcDir  = "../"
export const Dir = {
  docs   : RootDir+"content",
  blog   : SrcDir+"blog",
  static : SrcDir+"static",
  pages  : SrcDir+"pages",
  css    : SrcDir+"css",
  } // << Dir { ... }

// @section Organization config
export const Org = {
  fullName : 'Facebook',
  name     : 'facebook'
}

// @section Project config
export const Project = {
  fullName : 'Docusaurus',
  name     : 'docusaurus'
}

// @section Links and URLs
const GHUrl = `https://github.com/${Org.name}/${Project.name}`
export const Links = {
  discord : 'https://discordapp.com/invite/docusaurus',
  twitter : 'https://twitter.com/docusaurus',
  github  : GHUrl,
}

// @section Website-specific config
export const Site = {
  title   : 'My Site',
  tagline : 'Dinosaurs are cool',
  icon    : 'img/favicon.ico',
  logo    : 'img/logo.svg',
  meta    : {
    img   : 'img/docusaurus-social-card.jpg',
  },
  url     : {
    root  : 'https://your-docusaurus-site.example.com',  // Production url of the site
    // Set the /<baseUrl>/ pathname under which your site is served
    // This is often '/<projectName>/' for GitHub pages deployment.
    base  : '/',
    edit  : `${GHUrl}/tree/main/packages/create-docusaurus/templates/shared/`,
  },
}

// @section GitHub pages deployment config.
export const GitHub = {
  org     : Org.name,
  project : Project.name,
  branch  : 'gh-pages',
}

// @section Docusaurus specific config.
export const ExcludePatterns = ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_**/**']  // Do not route files/folders starting with `_`

