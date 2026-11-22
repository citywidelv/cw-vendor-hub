/* nav.js for the Vendor Hub. Seeded from the page menu on 2026-09-13 by Claude.
   The Site Admin hub (cw-admin-hub/site-admin.html) republishes this file; do not edit by hand.
   Edited by hand 2026-11-21 (Vendor Hub overhaul: menus named for the job. Find Work, New Vendors, Get Paid,
   Supplies, Company & Crew, Guides, Recognition). Before the next Site Admin publish, click Import live menu.
   Two renderers read this file: cw-nav.js (the older page headers) and hub-nav.js (the home page and shop).
   hub-nav.js carries a copy as its fallback; keep the two in step. */
window.CW_NAV = {
 "hub": "vendor",
 "label": "Vendor Hub",
 "menu": [
  {
   "label": "Find Work",
   "href": "opportunities.html",
   "items": [
    {
     "label": "Open Opportunities",
     "href": "opportunities.html"
    },
    {
     "label": "Las Vegas Board",
     "href": "opportunities.html?region=lv"
    },
    {
     "label": "Northern Nevada Board",
     "href": "opportunities.html?region=nnv"
    }
   ]
  },
  {
   "label": "New Vendors",
   "href": "new-vendors.html",
   "items": [
    {
     "label": "Vendor Evaluation",
     "href": "vendor-evaluation.html",
     "tag": "Start here"
    },
    {
     "label": "Las Vegas Checklist",
     "href": "new-vendors.html?region=lv"
    },
    {
     "label": "Northern Nevada Checklist",
     "href": "new-vendors.html?region=nnv"
    }
   ]
  },
  {
   "label": "Get Paid",
   "href": "invoice.html",
   "items": [
    {
     "ghead": "Invoices"
    },
    {
     "label": "Submit Your Monthly Invoice",
     "href": "invoice.html",
     "tag": "Due by the 28th"
    },
    {
     "label": "Prorate a Partial Month",
     "href": "prorate.html"
    },
    {
     "ghead": "Report Finished Work"
    },
    {
     "label": "Maintenance Work Ticket",
     "href": "work-order.html"
    },
    {
     "label": "Snow Service Report",
     "href": "snow-report.html"
    }
   ]
  },
  {
   "label": "Supplies",
   "href": "shop/",
   "items": [
    {
     "label": "Order Supplies",
     "href": "shop/"
    },
    {
     "label": "Build a New Building Kit",
     "href": "kit-builder.html"
    },
    {
     "label": "Report Supplies Needed",
     "href": "building-supplies.html"
    },
    {
     "label": "Pay for Supplies by Card",
     "href": "card-authorization.html"
    }
   ]
  },
  {
   "label": "Company & Crew",
   "href": "my-profile.html",
   "items": [
    {
     "label": "My Vendor Profile",
     "href": "my-profile.html"
    },
    {
     "label": "Upload Insurance Docs",
     "href": "upload.html"
    },
    {
     "label": "Add or Remove a Cleaner",
     "href": "cleaner-roster.html"
    },
    {
     "label": "Background Check & Name Badge",
     "href": "background-check.html"
    },
    {
     "label": "Bloodborne Pathogens Course",
     "href": "https://www.onlinecprcertification.net/bloodborne-pathogens-training-certification.php"
    }
   ]
  },
  {
   "label": "Guides",
   "items": [
    {
     "label": "New Building Planner",
     "href": "planner.html"
    },
    {
     "label": "Workloading & Crew Sizing",
     "href": "workloading.html"
    },
    {
     "label": "Choosing Your Equipment",
     "href": "equipment.html"
    },
    {
     "label": "Color Coding System",
     "href": "color-coding.html"
    },
    {
     "label": "Medical Facility Cleaning",
     "href": "medical.html"
    },
    {
     "label": "Clean Room Cleaning",
     "href": "cleanroom.html"
    },
    {
     "label": "GMP & Food Facility Cleaning",
     "href": "gmp.html"
    }
   ]
  },
  {
   "label": "Recognition",
   "href": "index.html#recognition",
   "items": [
    {
     "label": "Vendor of the Month Wall",
     "href": "index.html#recognition"
    },
    {
     "label": "Nominate a Vendor of the Month",
     "href": "nominate.html"
    },
    {
     "label": "Nominate a City Wide G.O.A.T.",
     "href": "nominate.html?type=goat"
    }
   ]
  },
  {
   "label": "Order Supplies",
   "href": "shop/",
   "cta": true
  }
 ]
};
