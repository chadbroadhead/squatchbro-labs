# SquatchBro Labs

Static website prepared for a private GitHub repository and Cloudflare Pages.

## Files

- `dist/index.html`: page content
- `dist/styles.css`: responsive styles
- `dist/assets/`: supplied SquatchBro Labs and DataMapper Pro artwork

No dependencies, build step, backend, or API credentials are required. Fonts are loaded from Google Fonts, with local fallback fonts.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000.

## Deploy through GitHub

1. Create a private repository named `squatchbro-labs-website` under your chosen GitHub account or organization.
2. Upload the CONTENTS of this folder to the repository root. Keep `dist` as a folder.
3. In Cloudflare, open Workers & Pages, create a Pages application, and import the GitHub repository. Authorize access to this repository.
4. Configure:
   - Production branch: `main`
   - Framework preset: None
   - Build command: `exit 0`
   - Build output directory: `dist`
   - Root directory: leave at the repository root
5. Deploy and review the assigned pages.dev address before connecting the business domain.

Pushes to the production branch deploy updates automatically. Use a branch and pull request for previewing changes before merging.

## Connect squatchbrolabs.com after review

The domain can remain registered at its current registrar. Cloudflare Pages requires Cloudflare nameservers for an apex domain such as squatchbrolabs.com. A subdomain such as www.squatchbrolabs.com can use a CNAME with external DNS.

Before switching nameservers, inventory and preserve all existing DNS records, especially email MX and TXT records and any verification records. Configure both the apex and www names in the Pages Custom domains panel and follow Cloudflare's generated instructions. Do not invent DNS targets or use the private ChatGPT Site address as a target.

Keep the current Squarespace website active until the replacement domain, HTTPS, redirects, and email have been verified. Domain registration and the Squarespace website subscription are separate services; do not cancel domain registration.

## Pending business details

- Chrome Web Store listing URL
- Lemon Squeezy checkout URLs and final pricing

No purchase or download links are currently included. The FAQ explicitly says these are not available on this site yet.

## References

- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

This package contains no ChatGPT hosting configuration, Git history, or credentials.
