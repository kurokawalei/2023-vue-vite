import{_ as k,e as P,r as p,o as l,c,d as t,F as g,f as m,a as u,t as r,w as x,b as _}from"./index-07b64064.js";const y={props:["pagination","getProducts"],template:`      
    <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center pagination-lg">
      <li class="page-item" :class="{ disabled: pagination.has_next }">
        <a href="#" class="page-link" @click.prevent="getProducts(pagination.current_page-1)">上一頁</a>
      </li>


      <li class="page-item " v-for="(page , key) in  pagination.total_pages  "   :key="page+'page'" 
      :class="{ active: page === pagination.current_page } 

      ">
      <a class="page-link" href="#" @click.prevent="getProducts(page)" :class="{ disabled: page === pagination.current_page  }">{{page}}</a></li>
     
      <li class="page-item" :class="{ disabled: pagination.has_pre }">
        <a class="page-link" href="#" @click.prevent="getProducts( pagination.current_page + 1 )">下一頁</a>
      </li>
    </ul>
  </nav>
`},{VITE_APP_URL:h,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"kurokawa2023",BASE_URL:"/2023-vue-vite/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{products:[],pagination:{},isloading:!1}},methods:{getProducts(s=1){const n=this.$loading.show({loader:"dots",color:"#fe0697"});this.$http(`${h}/v2/api/${f}/products/?page=${s}`).then(e=>{this.products=e.data.products,this.pagination=e.data.pagination,n.hide()}).catch(e=>{console.log(e)})},addTocart(s,n){const e={product_id:s,qty:n};this.isloading=!0,this.$http.post(`${h}/v2/api/${f}/cart`,{data:e}).then(o=>{alert(`${o.data.message}`),this.isloading=!1}).catch(o=>{console.log(o)})}},components:{RouterLink:P,pageInfo:y},mounted(){this.getProducts()}},T=t("div",{class:"text-center"},[t("h2",null,"產品列表")],-1),V={class:"table align-middle"},E=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),A={style:{width:"200px"}},I={style:{height:"100px","background-size":"cover","background-position":"center"}},L=["src"],R={class:"h6"},w={class:"h5"},B={class:"btn-group btn-group-sm"},C=["disabled","onClick"],D=t("i",{class:"fas fa-spinner fa-pulse"},null,-1);function U(s,n,e,o,i,d){const b=p("RouterLink"),v=p("pageInfo");return l(),c(g,null,[T,t("table",V,[E,t("tbody",null,[(l(!0),c(g,null,m(i.products,a=>(l(),c("tr",{key:a.id},[t("td",A,[t("div",I,[t("img",{src:a.imageUrl,class:"img-fluid",style:{height:"100px","object-fit":"cover"}},null,8,L)])]),t("td",null,r(a.title),1),t("td",null,[t("del",R,"原價 "+r(a.origin_price)+" 元",1),t("div",w,"現在只要 "+r(a.price)+" 元",1)]),t("td",null,[t("div",B,[u(b,{class:"btn btn-outline-secondary me-2",to:`/product/${a.id}`},{default:x(()=>[_("查看更多")]),_:2},1032,["to"]),t("button",{type:"button",disabled:i.isloading,class:"btn btn-outline-secondary me-2",onClick:N=>d.addTocart(a.id,1)},[D,_(" 加到購物車 ")],8,C)])])]))),128))])]),u(v,{pagination:i.pagination,"get-products":d.getProducts},null,8,["pagination","get-products"])],64)}const F=k($,[["render",U]]);export{F as default};
