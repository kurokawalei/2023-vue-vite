import{_ as C,o as r,c as i,d as t,F as _,f as p,g as v,t as n,b as g,h as x,v as $}from"./index-3f07d299.js";const{VITE_APP_URL:u,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"kurokawa2023",BASE_URL:"/2023-vue-vite/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{cartList:[]}},methods:{getCarList(){const s=this.$loading.show({loader:"dots",color:"#fe0697"});this.$http(`${u}/v2/api/${h}/cart`).then(a=>{this.cartList=a.data.data,s.hide()})},delCart(s){const a=this.$loading.show({loader:"dots",color:"#fe0697"});this.$http.delete(`${u}/v2/api/${h}/cart/${s}`).then(o=>{alert(`${o.data.message}`),a.hide(),this.getCarList()}).catch(o=>{console.log(o)})},editCart(s){const a={product_id:s.product.id,qty:s.qty};this.$http.put(`${u}/v2/api/${h}/cart/${s.id}`,{data:a}).then(o=>{alert(`${o.data.message}`),this.getCarList()}).catch(o=>{console.log(o)})},delCartAll(){this.$http.delete(`${u}/v2/api/${h}/carts`).then(s=>{alert(`${s.data.message}`),this.getCarList()}).catch(s=>{console.log(s)})}},mounted(){this.getCarList()}},b=t("div",{class:"text-center"},[t("h2",null,"購物車")],-1),L={class:"text-end"},m={class:"table align-middle"},y=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),P=["onClick"],V=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),k={class:"input-group input-group-sm"},A={class:"input-group mb-1 mt-1"},E=["onUpdate:modelValue","onChange"],T=["value"],q={class:"input-group-text",id:"basic-addon2"},w={class:"text-start"},D={class:"me-5"},U=t("small",{class:"text-success"},"折扣價：",-1),B=t("td",{colspan:"3",class:"text-end"},"總計",-1),I={class:"text-end"},R=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),N={class:"text-end text-success"};function S(s,a,o,F,c,d){return r(),i(_,null,[b,t("div",L,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:a[0]||(a[0]=(...e)=>d.delCartAll&&d.delCartAll(...e))},"清空購物車")]),t("table",m,[y,t("tbody",null,[c.cartList.carts?(r(!0),i(_,{key:0},p(c.cartList.carts,e=>(r(),i("tr",{key:e.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:l=>d.delCart(e.id)},[V,g(" x ")],8,P)]),t("td",null,n(e.product.title),1),t("td",null,[t("div",k,[t("div",A,[x(t("select",{class:"form-select","onUpdate:modelValue":l=>e.qty=l,onChange:l=>d.editCart(e)},[(r(),i(_,null,p(30,l=>t("option",{key:`${l}qq`,value:l},n(l),9,T)),64))],40,E),[[$,e.qty]]),t("span",q,n(e.product.unit),1)])])]),t("td",w,[t("span",D,n(e.product.price)+"元",1),U,g(" "+n(e.final_total)+"元 ",1)])]))),128)):v("",!0)]),t("tfoot",null,[t("tr",null,[B,t("td",I,n(c.cartList.total)+"元",1)]),t("tr",null,[R,t("td",N,n(c.cartList.final_total)+"元",1)])])])],64)}const M=C(f,[["render",S]]);export{M as default};
