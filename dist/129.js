"use strict";(self.webpackChunkblack_dashboard_pro_angular=self.webpackChunkblack_dashboard_pro_angular||[]).push([[129],{7129:function(A,f,s){s.r(f),s.d(f,{MapsModule:function(){return L}});var y=s(3144),u=s(5671),T=s(6267),h=s(9808),v=s(9096),e=s(2956),b=function(){var t=function(){function r(){(0,u.Z)(this,r)}return(0,y.Z)(r,[{key:"ngOnInit",value:function(){var a={zoom:8,center:l=new google.maps.LatLng(40.748817,-73.985428),scrollwheel:!1},p=new google.maps.Map(document.getElementById("regularMap"),a);new google.maps.Marker({position:l,title:"Regular Map!"}).setMap(p);var n={zoom:13,center:l=new google.maps.LatLng(40.748817,-73.985428),scrollwheel:!1,disableDefaultUI:!0,zoomControl:!0,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}]};p=new google.maps.Map(document.getElementById("customSkinMap"),n),new google.maps.Marker({position:l,title:"Custom Skin & Settings Map!"}).setMap(p);var l,c={zoom:3,scrollwheel:!1,center:l=new google.maps.LatLng(40.748817,-73.985428),mapTypeId:google.maps.MapTypeId.SATELLITE};p=new google.maps.Map(document.getElementById("satelliteMap"),c),new google.maps.Marker({position:l,title:"Satellite Map!"}).setMap(p)}}]),r}();return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-google"]],decls:23,vars:0,consts:[[1,"content"],[1,"row"],[1,"col-md-12"],[1,"card","card-plain"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","satelliteMap",1,"map"],[1,"col-md-6"],["id","regularMap",1,"map"],["id","customSkinMap",1,"map"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e._uU(6,"Satellite Map"),e.qZA()(),e.TgZ(7,"div",6),e._UZ(8,"div",7),e.qZA()()(),e.TgZ(9,"div",8)(10,"div",3)(11,"div",4)(12,"h4",5),e._uU(13,"Regular Map"),e.qZA()(),e.TgZ(14,"div",6),e._UZ(15,"div",9),e.qZA()()(),e.TgZ(16,"div",8)(17,"div",3)(18,"div",4)(19,"h4",5),e._uU(20,"Custom Skin & Settings Map"),e.qZA()(),e.TgZ(21,"div",6),e._UZ(22,"div",10),e.qZA()()()()())},encapsulation:2}),t}(),C=function(){var t=function(){function r(){(0,u.Z)(this,r)}return(0,y.Z)(r,[{key:"ngOnInit",value:function(){document.getElementsByTagName("body")[0].classList.add("full-screen-map"),document.getElementsByClassName("navbar")[0].classList.remove("navbar-transparent");var l=new google.maps.LatLng(40.748817,-73.985428),c={zoom:13,center:l,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},p=new google.maps.Map(document.getElementById("map"),c);new google.maps.Marker({position:l,title:"Hello World!"}).setMap(p)}},{key:"ngOnDestroy",value:function(){document.getElementsByTagName("body")[0].classList.remove("full-screen-map"),document.getElementsByClassName("navbar")[0].classList.add("navbar-transparent")}}]),r}();return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-fullscreen"]],decls:1,vars:0,consts:[["id","map"]],template:function(o,a){1&o&&e._UZ(0,"div",0)},encapsulation:2}),t}(),k=s(6154),i=(0,s(3708).Z)().domain([100,3e3]).range(["#AAAAAA","#444444"]),M={Russia:{color:i(300)},Canada:{color:i(120)},China:{color:i(1300)},"United States":{color:i(2920)},Brazil:{color:i(550)},Australia:{color:i(760)},India:{color:i(200)},Argentina:{color:i(240)},Romania:{color:i(600)},Algeria:{color:i(540)}},g=function(){var t=function(){function r(){(0,u.Z)(this,r)}return(0,y.Z)(r,[{key:"getCountries",value:function(){return M}}]),r}();return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t}(),d=s(7805),w=function(r,o){return[r,85,180,o]},z=[{path:"",children:[{path:"full-screen",component:C}]},{path:"",children:[{path:"google",component:b}]},{path:"",children:[{path:"vector",component:function(){var t=function(){function r(o){(0,u.Z)(this,r),this.worldMap=k.world,this.countries=o.getCountries(),this.customizeTooltip=this.customizeTooltip.bind(this),this.customizeLayers=this.customizeLayers.bind(this),this.click=this.click.bind(this)}return(0,y.Z)(r,[{key:"customizeTooltip",value:function(a){return{text:a.attribute("name"),color:"#FFFFFF",fontColor:"#000"}}},{key:"customizeLayers",value:function(a){var n=this;a.forEach(function(l){var c=n.countries[l.attribute("name")];l.applySettings(c?{color:c.color,hoveredColor:c.color,selectedColor:c.color}:{color:"#e4e4e4",hoveredColor:"#e4e4e4",selectedColor:"#e4e4e4"})})}},{key:"click",value:function(a){var n=a.target;n&&this.countries[n.attribute("name")]&&n.selected(!n.selected())}},{key:"ngOnInit",value:function(){}}]),r}();return t.\u0275fac=function(o){return new(o||t)(e.Y36(g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-vector"]],features:[e._Bn([g])],decls:17,vars:11,consts:[[1,"content"],[1,"row"],[1,"col-md-12"],[1,"card","card-plain"],[1,"card-header"],[1,"text-center"],[1,"card-body"],[1,"map","map-big"],["id","vector-map",3,"bounds","onClick"],[3,"height","width"],[3,"enabled","customizeTooltip"],["color","#fff"],[3,"visible"],[3,"dataSource","customize"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e._uU(6,"World Map "),e._UZ(7,"br"),e.qZA(),e._UZ(8,"br"),e.qZA(),e.TgZ(9,"div",6)(10,"div",7)(11,"dx-vector-map",8),e.NdJ("onClick",function(l){return a.click(l)}),e._UZ(12,"dxo-size",9),e.TgZ(13,"dxo-tooltip",10),e._UZ(14,"dxo-font",11)(15,"dxo-border",12),e.qZA(),e._UZ(16,"dxi-layer",13),e.qZA()()()()()()()),2&o&&(e.xp6(11),e.Q6J("bounds",e.WLB(8,w,-180,-60)),e.xp6(1),e.Q6J("height",600)("width",950),e.xp6(1),e.Q6J("enabled",!0)("customizeTooltip",a.customizeTooltip),e.xp6(2),e.Q6J("visible",!1),e.xp6(1),e.Q6J("dataSource",a.worldMap)("customize",a.customizeLayers))},directives:[v.w,d.kD0,d.v6i,d.zVO,d.vhZ,d.enW],encapsulation:2}),t}()}]}],L=function(){var t=(0,y.Z)(function r(){(0,u.Z)(this,r)});return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.ez,T.Bz.forChild(z),v.R]]}),t}()}}]);