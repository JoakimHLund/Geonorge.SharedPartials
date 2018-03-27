var kartKatalogenUrl={local:"//kartkatalog.dev.geonorge.no",test:"//kartkatalog.test.geonorge.no",prod:"//kartkatalog.geonorge.no"},geonorgeBaseUrl={local:"localhost:61381",test:"www.test.geonorge.no",prod:"www.geonorge.no"},searchOptions={local:{text:"Kartkatalogen",searchTitle:"Kartkatalogen",buttonCss:"edgesKartkatalogen",listCss:"left-edge-kartkatalogen",queryParameter:"?text=",localUrl:!1,autoComplete:!0,url:kartKatalogenUrl.local+"/search",api:kartKatalogenUrl.local+"/api/search",shoppingCartUrl:kartKatalogenUrl.local+"/nedlasting",loginUrl:kartKatalogenUrl.local+"/AuthServices/SignIn?ReturnUrl=http%3A%2F%2F"+geonorgeBaseUrl.local+"%2F",logoutUrl:kartKatalogenUrl.local+"/AuthServices/SignOut?ReturnUrl=http%3A%2F%2F"+geonorgeBaseUrl.local+"%2F",hosts:"localhost,geonorge.epidemo.no,geonorge.local,kartkatalog.dev.geonorge.no",epiBaseUrl:geonorgeBaseUrl.local,imageLogoPath:"/dist/images/geonorge_logo_350px_dev.svg"},dev:{text:"Kartkatalogen",searchTitle:"Kartkatalogen",buttonCss:"edgesKartkatalogen",listCss:"left-edge-kartkatalogen",queryParameter:"?text=",localUrl:!1,autoComplete:!0,url:kartKatalogenUrl.local+"/search",api:kartKatalogenUrl.local+"/api/search",shoppingCartUrl:kartKatalogenUrl.local+"/nedlasting",loginUrl:kartKatalogenUrl.local+"/AuthServices/SignIn?ReturnUrl=http%3A%2F%2F"+geonorgeBaseUrl.local+"%2F",logoutUrl:kartKatalogenUrl.local+"/AuthServices/SignOut?ReturnUrl=http%3A%2F%2F"+geonorgeBaseUrl.local+"%2F",hosts:"localhost,geonorge.epidemo.no,geonorge.local,kartkatalog.dev.geonorge.no",epiBaseUrl:geonorgeBaseUrl.local,imageLogoPath:"/dist/images/geonorge_logo_350px_dev.svg"},test:{text:"Kartkatalogen",searchTitle:"Kartkatalogen",buttonCss:"edgesKartkatalogen",listCss:"left-edge-kartkatalogen",queryParameter:"?text=",localUrl:!1,autoComplete:!0,url:kartKatalogenUrl.test+"/search",api:kartKatalogenUrl.test+"/api/search",shoppingCartUrl:kartKatalogenUrl.test+"/nedlasting",loginUrl:kartKatalogenUrl.test+"/AuthServices/SignIn?ReturnUrl=http%3A%2F%2F"+geonorgeBaseUrl.test+"%2F",logoutUrl:kartKatalogenUrl.test+"/AuthServices/SignOut?ReturnUrl=http%3A%2F%2F"+geonorgeBaseUrl.test+"%2F",hosts:"test.geonorge.no,kartkatalog.test.geonorge.no,register.test.geonorge.no,objektkatalog.test.geonorge.no,editor.test.geonorge.no,produktark.test.geonorge.no,validering.test.geonorge.no,159.162.102.155,kartkatalog.dev.geonorge.no,register.dev.geonorge.no,objektkatalog.dev.geonorge.no,editor.dev.geonorge.no,produktark.dev.geonorge.no,validering.dev.geonorge.no,159.162.102.155,kartkatalog.dev.geonorge.no,register.dev.geonorge.no,objektkatalog.dev.geonorge.no,editor.dev.geonorge.no,produktark.dev.geonorge.no,validering.dev.geonorge.no,159.162.102.155",epiBaseUrl:"//"+geonorgeBaseUrl.test,imageLogoPath:"/dist/images/geonorge_logo_350px_test.svg"},prod:{text:"Kartkatalogen",searchTitle:"Kartkatalogen",buttonCss:"edgesKartkatalogen",listCss:"left-edge-kartkatalogen",queryParameter:"?text=",localUrl:!1,autoComplete:!0,url:kartKatalogenUrl.prod+"/search",api:kartKatalogenUrl.prod+"/api/search",shoppingCartUrl:kartKatalogenUrl.prod+"/nedlasting",loginUrl:kartKatalogenUrl.prod+"/AuthServices/SignIn?ReturnUrl=http%3A%2F%2F"+geonorgeBaseUrl.prod+"%2F",logoutUrl:kartKatalogenUrl.prod+"/AuthServices/SignOut?ReturnUrl=http%3A%2F%2F"+geonorgeBaseUrl.prod+"%2F",hosts:"geonorge.no,kartkatalog.geonorge.no,register.geonorge.no,objektkatalog.geonorge.no,editor.geonorge.no,produktark.geonorge.no,validering.geonorge.no,159.162.102.155",epiBaseUrl:"//"+geonorgeBaseUrl.prod,imageLogoPath:"/dist/images/geonorge_logo_350px.svg"}},searchOption=searchOptions.prod,applicationEnvironment=applicationEnvironment||"";if(""!==applicationEnvironment)var searchOption=searchOptions[applicationEnvironment];searchOption.supportsLogin=void 0!==searchOption.supportsLogin?searchOption.supportsLogin:!0;
angular.module("geonorge-header",["ui.bootstrap"]);
!function(){var e=angular.module("geonorge-header");e.controller("baseController",["$scope","$http",function(e,o){switch(e.langCode=Cookies.get("_culture"),e.localizedText={search:{en:"Search",no:"Søk"},menu:{en:"Menu",no:"Meny"},login:{en:"Login",no:"Logg inn"},logout:{en:"Log out",no:"Logg ut"}},e.langCode){case"en":e.cultureSwitchName="Norsk",e.cultureSwitchCode="no",cultureData&&(e.cultureSwitchUrl=cultureData.friendlyUrlNO);break;default:e.cultureSwitchName="English",e.cultureSwitchCode="en",cultureData&&(e.cultureSwitchUrl=cultureData.friendlyUrlEN)}e.switchCulture=function(e){document.cookie="_culture="+e+"; path=/;domain=.geonorge.no"},e.imageLogoPath="",void 0!==searchOption.imageLogoPath&&(e.imageLogoPath=searchOption.imageLogoPath),e.loggedIn=Cookies.get("_loggedIn"),void 0!==searchOption.loggedIn&&(e.loggedIn=searchOption.loggedIn)}])}();
!function(){var n=angular.module("geonorge-header");n.controller("menuTopController",["$scope","$http",function(n,e){function o(e){var o=e.data;n.menuItems=o}function r(){n.getMenuError=!0}n.trustSrc=function(n){return $sce.trustAsResourceUrl(n)},n.getMenuData=function(){var n="";void 0!==searchOption.epiBaseUrl&&(n=searchOption.epiBaseUrl);var t=n+"/api/menu?omitLinks=1",a=e({method:"GET",url:t,headers:{"Content-Type":"application/json; charset=utf-8",accept:"*/*"},data:{},crossDomain:!0});return a.then(o,r)},n.loginUrl="//kartkatalog.geonorge.no/login",void 0!==searchOption.loginUrl&&(n.loginUrl=searchOption.loginUrl)}])}();
!function(){var e=angular.module("geonorge-header");e.service("aggregatedService",["$http","$q",function(e,t){function a(e){u=e}function r(e){return t(function(t){void 0==u?t():u(e)})}function n(a,r,n,o){function l(e,t){var a="facets[1]name=type&facets[1]value="+e,r="text="+t;return"?limit=5&"+a+"&"+r}var u=encodeURI(searchOption.api+l("dataset",a)),c=e({method:"GET",url:u,headers:{"Content-Type":"application/json; charset=utf-8",accept:"*/*"},data:{}}),s=encodeURI(searchOption.api+l("servicelayer",a)),i=e({method:"GET",url:s,headers:{"Content-Type":"application/json; charset=utf-8",accept:"*/*"},data:{}}),d=encodeURI(searchOption.api+l("service",a)),p=e({method:"GET",url:d,headers:{"Content-Type":"application/json; charset=utf-8",accept:"*/*"},data:{}}),h=encodeURI(searchOption.api+l("dimensionGroup",a)),g=e({method:"GET",url:h,headers:{"Content-Type":"application/json; charset=utf-8",accept:"*/*"},data:{}}),f=encodeURI(searchOption.api+l("software",a)),v=e({method:"GET",url:f,headers:{"Content-Type":"application/json; charset=utf-8",accept:"*/*"},data:{}});return t.all([g,c,p,i,v])}var o=document.getElementById("txtLang"),l="";o&&(l=o.value);var u=void 0;return{triggerSearch:r,executeMethod:a,performSearch:n}}]).controller("searchTopController",["$rootScope","$scope","$location","$window","$timeout","aggregatedService","$sce",function(e,t,a,r,n,o,l){function u(){var a=t.selectedSearch,n="";""!==e.searchQuery&&(n=a.queryParameter,n+=e.searchQuery);var o=a.url+n;r.location.href=o}function c(a){if(t.ajaxCallActive=!1,t.autoCompleteResult=[],a.d){var r=[];if(0===a.d.NumberOfHitsTotal)return void(t.autoCompleteResult=[]);r=a.d.Results;for(var n=0;n<r.length;n++){var o={},l=r[n];if(null!=l.data&&0!==l.data.Results.length){var u=i(l.data.Results[0].Type),c=u.length&&u.indexOf("?")>-1?"&text="+e.searchQuery:"?text="+e.searchQuery;o.showAllUrl=u+c,o.list=[];for(var d=0;d<l.data.Results.length;d++){var p=l.data.Results[d];o.title=s(p.Type),o.url=i(p.Type),o.list.push({externalId:l.SectionName+"_"+l.Section+"_"+d,id:d,typeId:l.Section,title:p.Title,url:p.ShowDetailsUrl})}t.autoCompleteResult.push(o),console.log(o)}}}}function s(e){if(void 0===cultureData.currentCulture||""==cultureData.currentCulture||"no"==cultureData.currentCulture)switch(e){case"dataset":return"Datasett";case"servicelayer":return"Tjenestelag";case"service":return"Tjenester";case"dimensionGroup":return"Datapakker";case"software":return"Applikasjon"}else if("en"==cultureData.currentCulture)switch(e){case"dataset":return"Dataset";case"servicelayer":return"Service layer";case"service":return"Service";case"dimensionGroup":return"Data package";case"software":return"Application"}}function i(e){var t=searchOption.epiBaseUrl;switch(e){case"dataset":return t+"/search?Facets%5B0%5D.name=type&Facets%5B0%5D.value=dataset";case"servicelayer":return t+"/search?Facets%5B0%5D.name=type&Facets%5B0%5D.value=service&Facets%5B1%5D.name=type&Facets%5B1%5D.value=servicelayer";case"service":return t+"/search?Facets%5B0%5D.name=type&Facets%5B0%5D.value=service&Facets%5B1%5D.name=type&Facets%5B1%5D.value=servicelayer";case"dimensionGroup":return t+"/search";case"software":return t+"/search?Facets%5B0%5D.name=type&Facets%5B0%5D.value=software"}}function d(){y>0&&1==w&&(y--,0===y&&(w=null)),1==y&&w>1&&(w--,y=t.autoCompleteResult[w-1].list.length),w>1&y>1&&y--,h()}function p(){null===w?(w=1,y=1):(w==t.autoCompleteResult.length&&t.autoCompleteResult[w-1].list.length>y&&y++,w<t.autoCompleteResult.length&&(t.autoCompleteResult[w-1].list.length>y?y++:(w++,y=1))),h()}function h(){for(var e=0;e<t.autoCompleteResult.length;e++){var a=t.autoCompleteResult[e];if(e==w-1)for(var r=0;r<a.list.length;r++){var n=a.list[r];r==y-1?n.highlight=!0:n.highlight=!1}else for(var o=0;o<a.list.length;o++)a.list[o].highlight=!1}console.log("categoryCount "+w),console.log("resultCount "+y)}t.trustSrc=function(e){return l.trustAsResourceUrl(e)},e.trustHtml=function(e){return l.trustAsHtml(e)},t.dropdownOpen=!1,t.extendedSearchOpen=!1,t.showFakeResults=!1,t.searchString="",e.selectedSearch=searchOption,e.searchQuery=parseLocation(window.location.search).text,e.activePageUrl="//"+window.location.host+window.location.pathname+window.location.search,void 0===cultureData.currentCulture||""===cultureData.currentCulture||"no"==cultureData.currentCulture?(e.showAllText="Vis alle treff...",e.noResultsText="Søket gir ingen treff",e.loadingContentText="Henter innhold",e.loadingSearchResultsText="Henter søkeresultater"):"en"==cultureData.currentCulture&&(e.showAllText="Show all results...",e.noResultsText="Your search did not return any data",e.loadingContentText="Loading content",e.loadingSearchResultsText="Loading search results"),t.autoCompleteResult=[],t.autoCompletePartial="/dist/partials/_autoCompleteRow.html",t.focused=!1,t.autocompleteActive=!1,t.ajaxCallActive=!1,t.allowBlur=!0,t.viewport={width:window.innerWidth,height:window.innerHeight},t.breakpoints={xSmall:480,small:768,medium:992,large:1200};var g=function(a,r){a.preventDefault(),a.stopPropagation(),e.selectedSearch=r,t.dropdownOpen=!1;var n=document.getElementById("txtSearch");n.focus()};t.select=g;var f=function(e){var t;switch(e.keyCode){case 38:e.target.blur(),t=angular.element(e.target).next(),t.children()[dropdownOptions.length-1].focus();break;case 40:e.target.blur(),t=angular.element(e.target).next(),t.children()[0].focus();break;default:return}e.preventDefault(),e.stopPropagation()},v=function(e,t){var a;switch(e.keyCode){case 13:return void g(e,dropdownOptions[t]);case 38:var r=angular.element(document.getElementById("search-dropdown"));a=0===t?r.children()[dropdownOptions.length-1]:r.children()[t-1];break;case 40:a=t>=dropdownOptions.length-1?angular.element(document.getElementById("search-dropdown")).children()[0]:angular.element(e.target).next()[0];break;default:return}e.target.blur(),a.focus(),e.preventDefault(),e.stopPropagation()};t.dropdownKeyDown=v,t.buttonDropdownKeyDown=f,t.onSearch=function(t){if(t&&t.preventDefault(),!(e.searchQuery.length<3)){var a=o.triggerSearch(e.searchQuery);a.then(u)}},t.preventDefault=function(e){switch(e.keyCode){case 13:e.preventDefault();break;case 16:C=!0;break;case 9:t.autoCompleteResult.length>0&&e.preventDefault();break;case 38:case 40:e.preventDefault()}};var m=null;t.autocomplete=function(a){if(t.focused!==!1){if(e.searchQuery.length<3)return t.autoCompleteResult=[],t.autocompleteActive=!1,t.ajaxCallActive=!1,void(w=null);switch(a.keyCode){case 13:null===w?(t.resetAutocomplete(),t.allowBlur=!0,t.onSearch(a)):(t.allowBlur=!1,window.location=t.autoCompleteResult[w-1].list[y-1].url);break;case 16:C=!1;break;case 37:break;case 38:return d(),!1;case 39:break;case 9:C?d():p();break;case 40:return p(),!1;default:return w=null,m&&(n.cancel(m),m=null,console.log("cancel timeout")),void(m=n(function(){t.autocompleteActive=!0,console.log("calling WS"),e.searchQuery.length>0&&(t.ajaxCallActive=!0,o.performSearch(e.searchQuery,[],5,0).then(function(e){console.log(e);var t={d:{Results:e}};c(t)}))},300))}}};var w=null,y=null,C=!1;t.mouseOver=function(e,a,r){console.log(a),console.log(r),t.allowBlur=e,y=r+1,w=a+1,h()},t.mouseOut=function(e){t.allowBlur=e},t.resetAutocomplete=function(){t.focused=!1,t.autocompleteActive=!1,t.ajaxCallActive=!1,t.autoCompleteResult=[]},t.setFocus=function(e){t.focused=!0,console.log(t.focused),angular.element(e.target).on("blur",function(){n(function(){t.allowBlur&&(t.resetAutocomplete(),console.log(t.focused),angular.element(e.target).on("blur",null))},!0)})},angular.element(document).ready(function(){o.triggerSearch(e.searchQuery)})}])}();var parseLocation=function(e){var t,a,r=e.substring(1).split("&"),n={};for(a in r)""!==r[a]&&(t=r[a].split("="),n[decodeURIComponent(t[0])]=decodeURIComponent(t[1]));return n};
//# sourceMappingURL=maps/main.js.map