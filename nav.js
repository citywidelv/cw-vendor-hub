/* nav.js for the Vendor Hub. Seeded from the page menu on 2026-09-13 by Claude.
   The Site Admin hub (cw-admin-hub/site-admin.html) republishes this file; do not edit by hand.
   The page keeps its own MENU as a fallback if this file is missing or malformed.
   Edited by hand 2026-09-25 (menu cleanup: one home per tool, short labels with tag chips; grouped by what the vendor came to do): before the next Site Admin publish, click Import live menu. */
window.CW_NAV = {
 "hub": "vendor",
 "label": "Vendor Hub",
 "menu": [
  {
   "label": "Home",
   "href": "index.html"
  },
  {
   "label": "Open Opportunities",
   "href": "opportunities.html"
  },
  {
   "label": "New Vendors",
   "href": "new-vendors.html",
   "items": [
    {
     "label": "Vendor Evaluation (start here)",
     "href": "vendor-evaluation.html"
    },
    {
     "label": "Las Vegas",
     "href": "new-vendors.html?region=lv"
    },
    {
     "label": "Northern Nevada",
     "href": "new-vendors.html?region=nnv"
    }
   ]
  },
  {
   "label": "Guides",
   "items": [
    {
     "ghead": "Crew Guides"
    },
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
   "label": "Invoices & Paperwork",
   "href": "invoice.html",
   "items": [
    {
     "ghead": "Get Paid"
    },
    {
     "label": "Submit Your Monthly Invoice",
     "href": "invoice.html"
    },
    {
     "label": "Pay by Credit Card",
     "href": "card-authorization.html"
    },
    {
     "ghead": "Supplies"
    },
    {
     "label": "Report Supplies Needed",
     "href": "building-supplies.html"
    },
    {
     "label": "Build a New Building Kit",
     "href": "kit-builder.html"
    },
    {
     "ghead": "Paperwork"
    },
    {
     "label": "Upload Insurance Docs",
     "href": "upload.html"
    },
    {
     "label": "My Vendor Profile",
     "href": "my-profile.html"
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
    },
    {
     "ghead": "Report Work"
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
   "label": "Recognition",
   "href": "#recognition",
   "items": [
    {
     "label": "Vendor of the Month Wall",
     "href": "#recognition"
    },
    {
     "ghead": "Nominate"
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
