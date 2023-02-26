import{_ as P,e as b,r as d,o as i,c,d as t,F as g,f as m,a as u,t as l,w as x,b as _}from"./index-09832dbf.js";const y={props:["pagination","getProducts"],template:`      
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
`},{VITE_APP_URL:h,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"kurokawa2023",BASE_URL:"/2023-vue-vite/week6/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{products:[],pagination:{}}},methods:{getProducts(s=1){const n=this.$loading.show({loader:"dots",color:"#fe0697"});this.$http(`${h}/v2/api/${f}/products/?page=${s}`).then(e=>{this.products=e.data.products,this.pagination=e.data.pagination,n.hide()}).catch(e=>{console.log(e)})},addTocart(s,n){const e={product_id:s,qty:n};this.$http.post(`${h}/v2/api/${f}/cart`,{data:e}).then(o=>{alert(`${o.data.message}`)}).catch(o=>{console.log(o)})}},components:{RouterLink:b,pageInfo:y},mounted(){this.getProducts()}},T=t("div",{class:"text-center"},[t("h2",null,"產品列表")],-1),V={class:"table align-middle"},E=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),w={style:{width:"200px"}},A={style:{height:"100px","background-size":"cover","background-position":"center"}},I=["src"],L={class:"h6"},R={class:"h5"},B={class:"btn-group btn-group-sm"},C=["onClick"],D=t("i",{class:"fas fa-spinner fa-pulse"},null,-1);function U(s,n,e,o,r,p){const k=d("RouterLink"),v=d("pageInfo");return i(),c(g,null,[T,t("table",V,[E,t("tbody",null,[(i(!0),c(g,null,m(r.products,a=>(i(),c("tr",{key:a.id},[t("td",w,[t("div",A,[t("img",{src:a.imageUrl,class:"img-fluid",style:{height:"100px","object-fit":"cover"}},null,8,I)])]),t("td",null,l(a.title),1),t("td",null,[t("del",L,"原價 "+l(a.origin_price)+" 元",1),t("div",R,"現在只要 "+l(a.price)+" 元",1)]),t("td",null,[t("div",B,[u(k,{class:"btn btn-outline-secondary me-2",to:`/product/${a.id}`},{default:x(()=>[_("查看更多")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-secondary me-2",onClick:N=>p.addTocart(a.id,1)},[D,_(" 加到購物車 ")],8,C)])])]))),128))])]),u(v,{pagination:r.pagination,"get-products":p.getProducts},null,8,["pagination","get-products"])],64)}const F=P($,[["render",U]]);export{F as default};
