# Website redesign — review copy

This is a draft for review. Nothing has been published to your live website.
The design is inspired by Mada's spacious typography, photographic opening,
centred identity and fullscreen navigation. The firm name, copy and local
assets are your own; no Mada images, logo or source code are included.

## Preview on your computer

1. Extract the ZIP completely. Keep all files and the `assets` folder together.
2. Open `index.html` in Chrome or Edge.
3. Click Menu to browse the seven main pages.
4. Try EN, FR and AR. Language preference is saved when browser settings allow it.
5. Review the seven sector pages, founder profile and insurance briefing.
6. Fonts and the map require an internet connection. The site remains readable
   in fallback fonts if Google Fonts is unavailable.

## Files: NEW or REPLACE

| Action | File | Purpose |
| --- | --- | --- |
| REPLACE | index.html | Redesigned homepage |
| REPLACE | style.css | Complete new visual design and responsive rules |
| REPLACE | script.js | Language selection and accessible fullscreen menu |
| REPLACE | sitemap.xml | All 24 content pages |
| NEW | translations.js | English, French and Arabic copy |
| NEW | about.html | The firm and approach |
| NEW | practice-areas.html | Practice-area directory |
| NEW | sectors.html | Seven-sector directory |
| NEW | our-people.html | Founder profile |
| NEW | insights.html | Insights directory |
| NEW | contact.html | Contact information and map |
| NEW | insurance-recovery.html | Original insurance-law briefing |
| NEW | legal-information.html | Website information |
| NEW | construction-infrastructure.html | Sector page |
| NEW | energy.html | Sector page |
| NEW | insurance.html | Sector page |
| NEW | technology.html | Sector page |
| NEW | hospitality.html | Sector page |
| NEW | real-estate-property-development.html | Sector page |
| NEW | retail-distribution.html | Sector page |
| NEW | civil-law.html | Practice page |
| NEW | criminal-law.html | Practice page |
| NEW | commercial-litigation.html | Practice page |
| NEW | corporate-law.html | Practice page |
| NEW | contract-drafting.html | Practice page |
| NEW | dispute-resolution.html | Practice page |
| NEW | real-estate-law.html | Practice page |
| NEW | family-law.html | Practice page |
| NEW | robots.txt | Search-engine discovery |
| NEW | assets/ | Two stock photographs and the supplied founder portrait |
| KEEP | CNAME | Existing custom domain, copied unchanged |
| KEEP | google9d11081034bee845.html | Existing verification, copied unchanged |

The full HTML, CSS and JavaScript are included in those files. No build,
installation, paid theme or new content-management system is required.

## Copy review

Sector and practice descriptions are editable draft copy. Confirm that every
offered service reflects the firm's actual work before publication. Illustrative
legal issues are expressly distinguished from past mandates. No client names,
testimonials, case results or team members have been invented.

The insurance briefing is based on Article 972 of the Lebanese Code of
Obligations and Contracts, linked from the article. Review the text before
publication. Legal information is descriptive website information, not a
complete privacy policy or jurisdiction-specific compliance assessment.

## How to edit text

1. Open `translations.js` in a text editor.
2. Find the text you want to change under `en`, `fr` or `ar`.
3. Edit only the text inside its quotation marks; retain punctuation used by
   JavaScript, including quotation marks, commas and braces.
4. Update all three language versions. Save and refresh the page.

## GitHub installation — after approving the draft

1. Download an untouched ZIP of the existing repository as a backup.
2. Open the repository on GitHub and select **Add file → Upload files**.
3. Drag the extracted website files AND the `assets` folder into the upload
   area. Upload the contents, not the ZIP and not an enclosing folder.
4. Check that `index.html`, `style.css`, `script.js`, `translations.js` and
   `assets/` appear at the repository root. Keep CNAME unchanged.
5. Enter a clear commit message and choose **Create a new branch** for review.
   Name it `website-redesign-review`, then propose the changes.
6. Review the pull request before merging. A review branch is not automatically
   a public preview; do not change GitHub Pages settings for this step.
7. Once approved, merge into the branch currently used by GitHub Pages. The
   live deployment depends on that repository's existing Pages configuration.
8. Verify the published domain, map, links and language controls after the
   deployment completes. Keep the backup until the live checks pass.

GitHub instructions:
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## Verification completed

- JavaScript syntax checks.
- Internal file links and anchor destinations across 24 content pages.
- One H1, a description and a canonical URL on every content page.
- Translation keys present in English, French and Arabic.
- Desktop homepage and sector navigation in the browser.
- Arabic right-to-left sector display.
- Narrow-frame responsive checks around 390px and 768px; English, French and
  Arabic homepage checks, including the mobile menu.

These checks are not real-device certification or a Lighthouse performance
audit. English is the initial HTML language; French and Arabic are switched
by JavaScript. Separate indexable language URLs and hreflang are a future SEO
enhancement, not implemented in this draft.

## Before publication checklist

- [ ] Approve the visual design and all three language versions.
- [ ] Confirm the founder biography, office hours, address and offered services.
- [ ] Check a real phone and desktop; test the menu with touch and keyboard.
- [ ] Check EN/FR/AR on the homepage, a sector page and Contact.
- [ ] Check phone links, email links, LinkedIn and map location.
- [ ] Review the insurance briefing and legal information.
- [ ] Review titles/descriptions and test page speed on the hosted version.
- [ ] Replace stock office imagery if you prefer photographs of your premises.
- [ ] Keep an untouched backup and verify the deployed domain after merging.

## Images

The office and architecture photographs are stock imagery, not photographs of
the firm's actual premises. The founder image is the one you supplied.

Stock image sources:
https://images.unsplash.com/photo-1497366811353-6870744d04b2
https://images.unsplash.com/photo-1486406146926-c627a92ad1ab
