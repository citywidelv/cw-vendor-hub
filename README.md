# City Wide Vendor Resource Hub

Vendor-facing parent site for City Wide Facility Solutions (Las Vegas and Northern Nevada).

Live: https://citywidelv.github.io/cw-vendor-hub/

- `index.html` is the hub landing page (tasks first, rebuilt 2026-11-21).
- `hub-nav.js` draws the black menu bar on the home page and the shop from `nav.js`. The older pages still draw their header menu with `cw-ops-desk/cw-nav.js` from the same `nav.js`.
- `shop/img/` holds copies of product photos; `shop/img/map.js` maps each catalog image address to its copy.
- `shop/catalog.csv` is the backup catalog. It carries prices only. Do not add cost or margin columns to it; this repo is public.
- `shop/` is the order shop (config.js + catalog.csv live there).
- Every other `.html` is a vendor resource page. `pdfs/` holds the print guides.
- `work-order.html` and `snow-report.html` are the vendor editions of the field forms.

The old `cw-vendor-shop` repo now only holds redirect stubs and the PDFs; do not add new pages there.
