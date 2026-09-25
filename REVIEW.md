# Website review — September 25, 2026

Status: local review only. No changes pushed to GitHub or deployed.
Base commit: 958de32 (main at checkout).

## This batch

- Redesigned the home page with original mountain artwork made in CSS, large typography, glass navigation, warm highlights, and the existing brand assets.
- Added About and Privacy & Website Disclaimer pages.
- Added an interactive sample mapping demo with transform and reset controls.
- Added scroll reveals, mascot motion, hover transitions, and supported-browser page transitions. Reduced-motion settings disable animation.
- Removed external Google Fonts requests; the website uses system fonts.
- Kept product availability as coming soon. No checkout or download URL was invented.
- Kept CNAME and deployment structure unchanged.

## Required before publication

1. Owner approves the page design and content.
2. Contact details supplied by owner and added to privacy.html; support email linked in every page footer.
3. Confirm actual hosting/network services and whether Cloudflare injects analytics or other scripts outside this repository. Update privacy.html accordingly.
4. Confirm business data handling, including any customer messages, sales records, retention, and applicable privacy rights. The current notice covers the website code and demo, not an audited business-wide privacy policy.
5. Finalize the effective date and remove the draft notice after those facts are confirmed.

DataMapper Pro requires a separate privacy review of its actual released code, permissions, licensing, payment and any AI flows before using a notice for its store listing.

## Review-first working agreement

For future website batches: read current main, make a focused local change, check desktop/mobile and interactions, present screenshots and the diff, then wait for explicit owner approval before any remote write. After approval, recheck main for intervening changes and use a review branch/PR unless the owner requests another route. Do not merge or publish unreviewed changes. This document is workflow guidance, not an installed background agent or scheduler.

## Privacy drafting references

- https://www.ftc.gov/business-guidance/privacy-security/consumer-privacy
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
- https://www.cloudflare.com/privacypolicy/

## Verification performed

- JavaScript syntax check passed (`node --check`).
- All local links, image/script/style paths and fragment targets resolve.
- Browser-based interaction checks and desktop/mobile screenshot checks could not run: no local browser executable was available, its installer did not obtain a valid archive, and the cloud browser blocks local URLs. Responsive CSS and demo behavior still require browser verification. Do not treat this draft as visually approved.

## Branding revision

Replaced the previous illustrated company branding with the supplied mountain wordmark in the navigation, About feature and footer. The supplied multi-logo sheet is kept intact; CSS frames the clean upper-right wordmark and reverses it for dark backgrounds. Refined the accent palette to warm champagne gold, retained DataMapper’s product mascot, and removed the old company favicon. No remote writes performed. Browser screenshot verification remains outstanding.

## Contact update

Added the owner-supplied mailing address and support email to the privacy page, and a mailto Support link to all footers. Hosting/analytics confirmation remains outstanding. No GitHub push or deployment performed.

## Squatch Guide and individual logos

Verified the privacy contact displays Squatch Guide and support@squatchbrolabs.com. Exported five individual transparent PNG treatments from the supplied sheet. Site branding now uses the standalone black wordmark, reversed with CSS on dark backgrounds. Exports preserve source resolution and edge quality. No push or deployment performed. Browser screenshot verification remains outstanding.

## Daylight palette revision

Brightened all three pages with warm ivory backgrounds, charcoal text, champagne buttons, white cards, a lavender product panel, and sage mountain layers. Removed logo inversion for the light surfaces. Preserved contact information, layout, interactions, and reduced-motion support. Local asset links verified; browser screenshot verification remains outstanding. No push or deployment.
