import{_ as i,o as n,c as d,d as t,t as r,F as a}from"./index-3f07d299.js";const{VITE_APP_URL:_,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"kurokawa2023",BASE_URL:"/2023-vue-vite/",MODE:"production",DEV:!1,PROD:!0},l={data(){return{product:{}}},methods:{getProduct(){const s=this.$loading.show({loader:"dots",color:"#fe0697"}),e=this.$route.params.id;this.$http(`${_}/v2/api/${u}/product/${e}`).then(c=>{this.product=c.data.product,s.hide()})}},mounted(){this.getProduct()},components:{}},p=t("div",{class:"text-center"},[t("h2",null,"產品頁面(單)")],-1),h={class:"imgBox text-center"},P=["src"],m={class:"infoBox"},f={class:"title"},v={class:"textMain"};function x(s,e,c,g,o,E){return n(),d(a,null,[p,t("div",h,[t("img",{src:o.product.imageUrl},null,8,P)]),t("div",m,[t("div",f,r(o.product.title),1),t("div",v,r(o.product.content),1)])],64)}const V=i(l,[["render",x]]);export{V as default};
