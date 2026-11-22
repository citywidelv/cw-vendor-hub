/* kit-rules.js. The counting rules for a new building. Build 2026-11-22.
   Two pages read this file: the kit builder (kit-builder.html) and the planner (planner.html).
   Change a number here and both pages follow, so they can never disagree.
   RATE is what ONE cleaning uses, by building size. MULT raises cloths and flat pads for building
   types that burn through them faster. sets() is how many clean sets a vendor keeps: one for every
   cleaning day of the week, washed once a week, and never fewer than two. */
window.CW_KIT = {
  SIZES: [
    {k:'s',  n:'Small',      s:'Up to 5,000'},
    {k:'m',  n:'Medium',     s:'5,001 to 15,000'},
    {k:'l',  n:'Large',      s:'15,001 to 40,000'},
    {k:'xl', n:'Very large', s:'Over 40,000'}],
  TYPES: [
    {k:'office',     n:'Office',                  s:'Suites, banks, professional buildings', mop:['flat','loop'], mopRec:'flat', vac:true,  cart:'cart'},
    {k:'medical',    n:'Medical or clinic',       s:'Clinics, urgent care, dental, labs',    mop:['flat','loop'], mopRec:'flat', vac:true,  cart:'cart'},
    {k:'school',     n:'School',                  s:'K-12, charter, daycare, training',      mop:['loop','flat'], mopRec:'loop', vac:true,  cart:'cart'},
    {k:'industrial', n:'Industrial or warehouse', s:'Warehouse, distribution, shops',        mop:['loop','flat'], mopRec:'loop', vac:true,  cart:'brute'},
    {k:'gmp',        n:'GMP or food',             s:'Food production and packaging',         mop:['flat','loop'], mopRec:'flat', vac:true,  cart:'cart'},
    {k:'cleanroom',  n:'Cleanroom',               s:'Compounding and controlled rooms',      mop:['flat'],        mopRec:'flat', vac:false, cart:null}],
  RATE: {
    cloth: {red:{s:2,m:3,l:6,xl:10}, yellow:{s:2,m:3,l:6,xl:10}, blue:{s:2,m:2,l:4,xl:6}, green:{s:3,m:5,l:10,xl:16}},
    loop:  {rr:{s:1,m:1,l:2,xl:3}, gen:{s:1,m:1,l:2,xl:3}},
    pad:   {rr:{s:1,m:2,l:4,xl:6}, gen:{s:2,m:4,l:8,xl:12}}},
  MULT: { office:{cloth:1,pad:1}, medical:{cloth:1.5,pad:1.5}, school:{cloth:1.5,pad:1.5},
          industrial:{cloth:1,pad:1}, gmp:{cloth:1.5,pad:2}, cleanroom:{cloth:1,pad:1} },
  /* Counts that follow building size only. */
  FIX: {
    bowlmop:     {s:1,m:2,l:3,xl:4},
    bowlcleaner: {s:1,m:1,l:2,xl:3},
    signs:       {s:2,m:2,l:4,xl:4},
    glasses:     {s:1,m:2,l:2,xl:4},
    wipes:       {s:1,m:2,l:3,xl:4},
    broom:       {s:1,m:1,l:2,xl:2},
    buckets:     {s:1,m:1,l:2,xl:2}},
  sets: function(days){ return Math.max(2, days); }
};
