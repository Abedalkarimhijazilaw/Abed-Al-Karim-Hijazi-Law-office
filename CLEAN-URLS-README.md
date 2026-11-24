# Clean URLs — Abed Al Karim Hijazi Law Office

This update was prepared from the user-provided `clean-urls` branch ZIP on 24 November 2026.

## What changed
- Added a `{page}/index.html` folder for each ordinary content page, excluding `index.html` (homepage) and the Google verification file.
- Updated internal navigation to `/page/`-style relative URLs in original HTML files and new folder pages.
- Updated canonical links on the HTML pages and URLs in `sitemap.xml` to clean addresses.
- Fixed all relative asset references in the new folder pages (`../style.css`, `../translations.js`, `../assets/...`, etc.).
- Preserved the original `.html` files so older external links continue to load; GitHub Pages does not automatically 301-redirect these old paths.
- Did not alter the design, biographies, images, translations, or existing `CNAME`.

## Upload — do not publish directly to main
1. On GitHub, select the `clean-urls` branch.
2. Use Add file > Upload files and drag the **CONTENTS** of the folder in this ZIP, including all new page folders and existing root files (not the ZIP itself). GitHub should preserve subdirectories. If GitHub refuses a batch, upload smaller batches. Commit on `clean-urls`.
3. Before merging, verify that the repository contains `our-people/index.html`, `about/index.html`, etc. and root `CNAME`.
4. GitHub Pages normally publishes `main`, not this branch. For a realistic preview of this branch, use a separate preview deployment or run a local server (e.g. `python -m http.server 8000` from the site root).
5. Test home, Our People, Contact, English/French/Arabic toggles and photographs before creating a pull request into `main`.
6. Merge into `main` only when all checks pass. Keep the `clean-urls` branch as a backup.

Example clean URL: https://abedalkarimhijazilaw.com/our-people/
Legacy URL that still works: https://abedalkarimhijazilaw.com/our-people.html

Note: GitHub Pages uses a trailing slash for directory index pages. `/our-people` commonly redirects to `/our-people/`.
