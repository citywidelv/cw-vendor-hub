/* nav.js for the Vendor Hub. Seeded from the page menu on 2026-09-13 by Claude.
   The Site Admin hub (cw-admin-hub/site-admin.html) republishes this file; do not edit by hand.
   The page keeps its own MENU as a fallback if this file is missing or malformed. */
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
   "items": [
    {
     "label": "Las Vegas",
     "href": "new-vendors.html?region=lv"
    },
    {
     "label": "Northern Nevada",
     "href": "new-vendors.html?region=nnv"
    }
   ],
   "href": "new-vendors.html"
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
   "items": [
    {
     "ghead": "Get Paid"
    },
    {
     "label": "Submit Your Monthly Invoice",
     "href": "invoice.html"
    },
    {
     "ghead": "Orders"
    },
    {
     "label": "Order Building Supplies",
     "href": "building-supplies.html"
    },
    {
     "label": "Shop Supplies & Uniforms",
     "href": "shop/"
    },
    {
     "label": "Pay by Credit Card",
     "href": "card-authorization.html"
    },
    {
     "label": "Build a New Building Kit",
     "href": "kit-builder.html"
    },
    {
     "ghead": "Paperwork"
    },
    {
     "label": "Add or Remove a Cleaner",
     "href": "cleaner-roster.html"
    },
    {
     "label": "Upload Insurance & Compliance Docs",
     "href": "upload.html"
    },
    {
     "label": "Update Your Company Profile",
     "href": "profile-update.html"
    },
    {
     "label": "Maintenance Work Ticket",
     "href": "work-order.html"
    },
    {
     "label": "Snow Service Report",
     "href": "snow-report.html"
    },
    {
     "label": "Background Check & Name Badge",
     "href": "https://form.asana.com/?k=FRCnQmbTGjAVPieFt4bnWQ&d=13140959242873"
    },
    {
     "label": "Bloodborne Pathogens Certification",
     "href": "https://www.onlinecprcertification.net/bloodborne-pathogens-training-certification.php"
    }
   ],
   "href": "invoice.html"
  },
  {
   "label": "Recognition",
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
   ],
   "href": "#recognition"
  },
  {
   "label": "Order Supplies",
   "href": "shop/",
   "cta": true
  }
 ]
};
