// ============================================================
// City Wide Vendor Shop - Site Configuration
// Edit these values, save, and re-upload (or git push) to update the live site.
// ============================================================
window.CW_CONFIG = {
  // Shop title shown in the header and browser tab
  SITE_NAME: "City Wide Vendor Shop",

  // MASTER CATALOG: a Google Sheet published as CSV.
  // Edit products, prices, stocked status, and stock_qty in the Sheet and the
  // live site picks it up automatically (Google refreshes the published copy
  // every few minutes). Leave blank ("") to use the catalog.csv in this repo.
  // If the Sheet is ever unreachable, the site automatically falls back to
  // the repo's catalog.csv.
  CATALOG_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQKNqUqE4xDUT24EmeEthfuPYSvAO7nl5Fb1LbaE3-nU3V5t_EhJYtdk4AETcFiMIcQj2zDrkXgOWEl/pub?output=csv",

  // Where orders go. One POST to the CW Team Portal Backend (kind shop_order): it writes
  // the row to the Orders tab of the CW Vendor Shop Catalog sheet (what the Ops Hub
  // Alerts card reads), then emails the market service inbox and the vendor. The order
  // only reads as submitted once the row has landed. Formspree was retired Oct 2 2026:
  // it emailed first and logged to the sheet second, and the sheet write was being lost.
  ORDERS_WEBHOOK: "https://script.google.com/macros/s/AKfycbzfNnrpidCbWB1DeUNgXvRhDFMQgApfpn-3C9GU45wMEHcJpWFl8ZQVo6PUBSRfEVfRdg/exec",

  // Coupon codes (Vendor of the Month, $150 off one order). Checked and redeemed on the
  // CW Solicitations Apps Script (kinds rec_coupon_check / rec_coupon_redeem), never in
  // page code, so no code is ever visible in the source. Leave blank ("") to hide the field.
  COUPON_WEBHOOK: "https://script.google.com/macros/s/AKfycbzfNnrpidCbWB1DeUNgXvRhDFMQgApfpn-3C9GU45wMEHcJpWFl8ZQVo6PUBSRfEVfRdg/exec",

  // Fallback / notification address for orders (used if the endpoint is unreachable)
  ORDER_EMAIL: "LVservicecall@gocitywide.com",
  // CC on fallback order emails
  ORDER_EMAIL_CC: "rnservicecall@gocitywide.com",

  // SPOTLIGHT: one product line called out at the top of the shop home view.
  // Every catalog row carrying this category shows in the band (and drops out of the
  // All Products grid below it). Set category to "" to turn the band off.
  SPOTLIGHT: {
    category: "Desert Dust Sheets",
    kicker: "Featured this month",
    title: "Desert Dust Sheets",
    sub: "Clean floors faster and easier. Traps up to 8X more dirt, dust and sand than a cotton dust mop.",
    note: "Las Vegas floors take a beating from fine desert dust and tracked-in sand. These disposable sweep and dust sheets " +
          "grab it on the first pass instead of pushing it around. Lay a sheet under the flat dust mop you already use, " +
          "or pair it with the Flip Holder and handle. Use both sides, then throw it away. Nothing to launder.",
  },

  // Default margin percent applied to any catalog row that has a "cost"
  // value but no "price". Rows with an explicit "price" are shown as-is.
  // Example: cost 100.00 with DEFAULT_MARGIN_PCT 25 displays as $125.00.
  DEFAULT_MARGIN_PCT: 25,

  // Sales tax estimate shown at checkout (0 to disable). 8.375 = Clark County NV.
  TAX_RATE_PCT: 0,

  // Text shown in the pricing notice at checkout
  PRICING_NOTICE:
    "This price list is for reference only and does not update automatically when supplier prices change. " +
    "The actual price charged is based on current supplier cost at the time the order is placed and may be " +
    "higher or lower than shown. By submitting an order you authorize City Wide to charge the current price " +
    "and agree that order totals are settled by the payment method you choose below.",
};
