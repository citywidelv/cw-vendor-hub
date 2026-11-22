/* hub-nav.js. Vendor Hub menu bar. Build 2026-11-21 (Vendor Hub overhaul).
   One menu per job, opened by click, closed by Escape or a click outside. Carries its own styles.

   Use it on a page:
     <button type="button" class="hubnav-toggle" data-hubnav-toggle>Menu</button>   (shown on phones)
     <nav id="hubnav" data-base="../" aria-label="Vendor Hub menu"></nav>
     <script src="nav.js"></script>            (sets window.CW_NAV; path is relative to the page)
     <script src="hub-nav.js"></script>
   data-base is the path from the page back to the hub root ("" on the hub root, "../" in shop/).

   Menu data comes from window.CW_NAV (nav.js, the same manifest cw-nav.js reads for the older pages).
   If nav.js is missing or malformed the FALLBACK below is used, so a bad edit shows
   yesterday's menu, never no menu. Keep FALLBACK in step with nav.js when the menu changes.
   window.HubNav.menu() returns the menu in use, for a page that wants to build a search over it.

   Older pages (header class "site-head", 2026-11-22): load nav.js and this file and nothing else.
   With no #hubnav on the page, the script hides the old hover menu in that header, adds a Menu
   button and the red Order Supplies button to it, and puts the menu bar under it. If this file
   fails to load, the old header menu written into the page still shows. */
(function(){
  "use strict";
  var FALLBACK=[
   {label:"Find Work",href:"opportunities.html",items:[
    {label:"Open Opportunities",href:"opportunities.html"},
    {label:"Las Vegas Board",href:"opportunities.html?region=lv"},
    {label:"Northern Nevada Board",href:"opportunities.html?region=nnv"}]},
   {label:"New Vendors",href:"new-vendors.html",items:[
    {label:"Vendor Evaluation",href:"vendor-evaluation.html",tag:"Start here"},
    {label:"Las Vegas Checklist",href:"new-vendors.html?region=lv"},
    {label:"Northern Nevada Checklist",href:"new-vendors.html?region=nnv"}]},
   {label:"Get Paid",href:"invoice.html",items:[
    {ghead:"Invoices"},
    {label:"Submit Your Monthly Invoice",href:"invoice.html",tag:"Due by the 28th"},
    {label:"Prorate a Partial Month",href:"prorate.html"},
    {ghead:"Report Finished Work"},
    {label:"Maintenance Work Ticket",href:"work-order.html"},
    {label:"Snow Service Report",href:"snow-report.html"}]},
   {label:"Supplies",href:"shop/",items:[
    {label:"Build a Starter Kit",href:"kit-builder.html",tag:"New building"},
    {label:"Order Supplies",href:"shop/"},
    {label:"Report Supplies Needed",href:"building-supplies.html"},
    {label:"Pay for Supplies by Card",href:"card-authorization.html"}]},
   {label:"Company & Crew",href:"my-profile.html",items:[
    {label:"My Vendor Profile",href:"my-profile.html"},
    {label:"Upload Insurance Docs",href:"upload.html"},
    {label:"Add or Remove a Cleaner",href:"cleaner-roster.html"},
    {label:"Background Check & Name Badge",href:"background-check.html"},
    {label:"Bloodborne Pathogens Course",href:"https://www.onlinecprcertification.net/bloodborne-pathogens-training-certification.php"}]},
   {label:"Guides",items:[
    {label:"New Building Planner",href:"planner.html"},
    {label:"Workloading & Crew Sizing",href:"workloading.html"},
    {label:"Choosing Your Equipment",href:"equipment.html"},
    {label:"Color Coding System",href:"color-coding.html"},
    {label:"Medical Facility Cleaning",href:"medical.html"},
    {label:"Clean Room Cleaning",href:"cleanroom.html"},
    {label:"GMP & Food Facility Cleaning",href:"gmp.html"}]},
   {label:"Recognition",href:"index.html#recognition",items:[
    {label:"Vendor of the Month Wall",href:"index.html#recognition"},
    {label:"Nominate a Vendor of the Month",href:"nominate.html"},
    {label:"Nominate a City Wide G.O.A.T.",href:"nominate.html?type=goat"}]},
   {label:"Order Supplies",href:"shop/",cta:true}
  ];
  var CSS=''
  +'.hubnav{position:relative;background:#2D2A26;border-bottom:3px solid #D22730;font-family:Verdana,"Liberation Sans","DejaVu Sans",Geneva,Tahoma,sans-serif}'
  +'.hubnav-in{position:relative;max-width:1160px;margin:0 auto;padding:0 8px;display:flex;flex-wrap:wrap}'
  +'.hubnav .hn-b{min-height:48px;display:inline-flex;align-items:center;gap:8px;padding:0 14px;border:0;background:none;font-family:inherit;font-size:13px;font-weight:700;line-height:1.2;color:#fff;cursor:pointer;white-space:nowrap;text-decoration:none;-webkit-tap-highlight-color:rgba(210,39,48,.25)}'
  +'.hubnav .hn-b svg{width:12px;height:12px;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .18s cubic-bezier(.16,1,.3,1)}'
  +'.hubnav .hn-b[aria-expanded="true"]{background:#D22730}'
  +'.hubnav .hn-b[aria-expanded="true"] svg{transform:rotate(180deg)}'
  +'.hubnav .hn-b:focus-visible{outline:3px solid #fff;outline-offset:-3px}'
  +'.hubnav .hn-p{display:none;position:absolute;top:100%;left:8px;z-index:70;min-width:300px;max-width:calc(100% - 16px);background:#fff;border:1px solid #E5E5E5;border-radius:0 0 11px 11px;box-shadow:0 4px 10px rgba(45,42,38,.10),0 12px 28px rgba(45,42,38,.12);padding:8px}'
  +'.hubnav .hn-p.open{display:block}'
  +'.hubnav .hn-p h4{font-size:12px;font-weight:700;color:#636466;padding:12px 12px 4px;margin:0}'
  +'.hubnav .hn-p a{display:flex;align-items:center;gap:12px;min-height:44px;padding:4px 12px;border-radius:6px;font-size:13px;font-weight:700;line-height:1.3;color:#2D2A26;text-decoration:none}'
  +'.hubnav .hn-p a:focus-visible{outline:3px solid #2D2A26;outline-offset:-3px}'
  +'.hubnav .hn-t{margin-left:auto;display:inline-flex;align-items:center;min-height:24px;padding:0 8px;border:1px solid #BDBBB8;border-radius:18px;font-size:12px;font-weight:400;color:#636466;white-space:nowrap}'
  +'.hubnav .hn-x{margin-left:auto;width:16px;height:16px;flex:none;fill:none;stroke:#636466;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}'
  +'.hubnav .hn-t+.hn-x{margin-left:0}'
  +'.hubnav-toggle{display:none}'
  +'@media(hover:hover){.hubnav .hn-b:hover{background:rgba(255,255,255,.12)}.hubnav .hn-b[aria-expanded="true"]:hover{background:#D22730}.hubnav .hn-p a:hover{background:#F5F5F5}}'
  +'@media(max-width:700px){'
  +'.hubnav-toggle{display:inline-flex}'
  +'.hubnav{display:none}.hubnav.open{display:block}'
  +'.hubnav-in{flex-direction:column;flex-wrap:nowrap;padding:8px}'
  +'.hubnav .hn-b{justify-content:space-between;width:100%}'
  +'.hubnav .hn-p{position:static;min-width:0;max-width:none;box-shadow:none;border-radius:6px;margin:0 0 8px}'
  +'}'
  +'@media(prefers-reduced-motion:reduce){.hubnav .hn-b svg{transition:none}}'
  /* older page headers */
  +'.site-head.hn-up nav,.site-head.hn-up .menu-toggle{display:none!important}'
  +'.hn-legacy{margin-left:auto;display:flex;align-items:center;gap:8px;flex:none}'
  +'.hn-legacy a,.hn-legacy button{min-height:44px;display:inline-flex;align-items:center;gap:8px;padding:0 16px;border-radius:6px;font-family:inherit;font-size:13px;font-weight:700;line-height:1;white-space:nowrap;text-decoration:none;cursor:pointer}'
  +'.hn-legacy a{background:#D22730;border:1px solid #D22730;color:#fff}'
  +'.hn-legacy button{background:#fff;border:1px solid #BDBBB8;color:#2D2A26}'
  +'.hn-legacy svg{width:20px;height:20px;flex:none;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}'
  +'@media(hover:hover){.hn-legacy a:hover{background:#B01F27;border-color:#B01F27;color:#fff}.hn-legacy button:hover{border-color:#2D2A26}}'
  +'.hn-legacy button.hubnav-toggle{display:none}'
  +'@media(max-width:700px){.hn-legacy a{display:none}.hn-legacy button.hubnav-toggle{display:inline-flex}.site-head.hn-up img.logo{height:28px}}';

  function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
  function shown(l){return (l||[]).filter(function(x){return x&&!x.hidden;});}
  function menu(){
    var n=window.CW_NAV;
    if(n&&typeof n==="object"&&n.hub==="vendor"&&Array.isArray(n.menu)&&n.menu.length)return n.menu;
    return FALLBACK;
  }
  /* cascade groups flatten to a heading plus their links, the same way cw-nav.js treats them */
  function flat(items){
    var out=[];
    shown(items).forEach(function(it){
      if(it.sub){out.push({ghead:it.sub});shown(it.items).forEach(function(x){out.push(x);});}
      else out.push(it);
    });
    return out;
  }
  function ext(h){return /^https?:/.test(h);}
  function init(){
    if(!document.getElementById("hubnav-css")){var st=document.createElement("style");st.id="hubnav-css";st.textContent=CSS;document.head.appendChild(st);}
    var nav=document.getElementById("hubnav");
    if(!nav){
      /* an older page: upgrade its header in place */
      var head=document.querySelector("header.site-head"),bar=head&&head.querySelector(".bar");
      if(!head||!bar)return;
      nav=document.createElement("nav");nav.id="hubnav";nav.setAttribute("data-base","");nav.setAttribute("aria-label","Vendor Hub menu");
      head.parentNode.insertBefore(nav,head.nextSibling);
      var box=document.createElement("div");box.className="hn-legacy";
      box.innerHTML='<a href="shop/"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>Order Supplies</a>'
        +'<button type="button" data-hubnav-toggle><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>Menu</button>';
      bar.appendChild(box);
      head.classList.add("hn-up");
    }
    var base=nav.getAttribute("data-base")||"";
    var file=location.pathname.split("/").pop()||"index.html";
    var atRoot=base==="";
    function href(h){
      if(ext(h))return h;
      /* on the hub home, a link to index.html#x is just #x */
      if(atRoot&&file==="index.html"&&h.indexOf("index.html#")===0)return h.slice(10);
      return base+h;
    }
    var CHEV='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
    var OUT='<svg class="hn-x" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
    var html="";
    /* every page but the hub home gets a way back to it */
    if(!(atRoot&&file==="index.html"))html+='<a class="hn-b" href="'+esc(base+"index.html")+'">Vendor Hub Home</a>';
    shown(menu()).forEach(function(top,i){
      if(!top.items&&top.href&&top.href.split(/[?#]/)[0]==="index.html")return;   /* a Home entry in the manifest is covered above */
      if(top.cta)return;                              /* the page carries its own red button */
      if(!top.items){
        if(!top.href)return;
        html+='<a class="hn-b" href="'+esc(href(top.href))+'"'+(ext(top.href)?' target="_blank" rel="noopener"':'')+'>'+esc(top.label)+'</a>';
        return;
      }
      var id="hubnav-p"+i;
      html+='<button type="button" class="hn-b" aria-expanded="false" aria-controls="'+id+'">'+esc(top.label)+CHEV+'</button><div class="hn-p" id="'+id+'">';
      flat(top.items).forEach(function(it){
        if(it.ghead){html+='<h4>'+esc(it.ghead)+'</h4>';return;}
        if(!it.href)return;
        html+='<a href="'+esc(href(it.href))+'"'+(ext(it.href)?' target="_blank" rel="noopener"':'')+'>'+esc(it.label)
          +(it.tag?'<span class="hn-t">'+esc(it.tag)+'</span>':'')+(ext(it.href)?OUT:'')+'</a>';
      });
      html+='</div>';
    });
    nav.classList.add("hubnav");
    nav.innerHTML='<div class="hubnav-in">'+html+'</div>';
    var inner=nav.firstChild;
    function close(except){
      [].forEach.call(nav.querySelectorAll("button.hn-b"),function(b){
        if(b===except)return;
        b.setAttribute("aria-expanded","false");
        document.getElementById(b.getAttribute("aria-controls")).classList.remove("open");
      });
    }
    nav.addEventListener("click",function(e){
      var b=e.target.closest("button.hn-b");
      if(!b){if(e.target.closest(".hn-p a"))close();return;}
      var open=b.getAttribute("aria-expanded")==="true",p=document.getElementById(b.getAttribute("aria-controls"));
      close(b);
      b.setAttribute("aria-expanded",open?"false":"true");
      p.classList.toggle("open",!open);
      if(!open&&getComputedStyle(p).position==="absolute"){
        p.style.left="8px";p.style.top=(b.offsetTop+b.offsetHeight)+"px";
        p.style.left=Math.max(8,Math.min(b.offsetLeft,inner.clientWidth-p.offsetWidth-8))+"px";
      } else {p.style.left="";p.style.top="";}
    });
    document.addEventListener("click",function(e){if(!e.target.closest("#hubnav"))close();});
    document.addEventListener("keydown",function(e){
      if(e.key!=="Escape")return;
      var b=nav.querySelector('button.hn-b[aria-expanded="true"]');
      close();if(b)b.focus();
    });
    var tg=document.querySelector("[data-hubnav-toggle]");
    if(tg){
      tg.classList.add("hubnav-toggle");
      tg.setAttribute("aria-expanded","false");tg.setAttribute("aria-controls","hubnav");
      tg.addEventListener("click",function(){
        var o=tg.getAttribute("aria-expanded")==="true";
        tg.setAttribute("aria-expanded",o?"false":"true");
        nav.classList.toggle("open",!o);
        if(o)close();
      });
    }
    window.HubNav.close=close;
  }
  window.HubNav={menu:menu,flat:flat,close:function(){}};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
