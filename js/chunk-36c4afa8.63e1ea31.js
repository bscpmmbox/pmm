(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36c4afa8"],{"0bbf":function(e,t,a){"use strict";a.r(t);var s=a("7a23");const o={class:"content"},n={style:{width:"90%",margin:"10px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},r={key:0,style:{width:"200px",height:"40px","border-radius":"10px","text-align":"center","line-height":"40px",background:"#7C3BED33",color:"white"}},c=Object(s["m"])("span",null,"链 接",-1),l=[c],i={class:"second",style:{"padding-top":"15px"}},d=Object(s["m"])("span",{style:{color:"yellow"}},"类型：",-1),u=Object(s["m"])("option",{value:0},"超级白名单",-1),p=Object(s["m"])("option",{value:1},"群主白名单(与普通白名单不能共存)",-1),h=Object(s["m"])("option",{value:2},"普通白名单(与群主白名单不能共存)",-1),b=[u,p,h],m=Object(s["m"])("span",null,"添加白名单",-1),g=[m],O=Object(s["m"])("span",null,"移除白名单",-1),x=[O],j={class:"second",style:{"padding-top":"15px"}},y=Object(s["m"])("span",{style:{color:"yellow"}},"类型：",-1),w=Object(s["m"])("option",{value:0},"私募0.3",-1),f=Object(s["m"])("option",{value:2},"私募0.2",-1),v=Object(s["m"])("option",{value:1},"私募0.1",-1),k=[w,f,v],P=Object(s["m"])("span",null,"添加私募用户",-1),A=[P],B={class:"second"},C={style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#7C3BED33",color:"white"}},D={key:0},V={key:1},M={key:2},S={key:3},U={key:4},E={key:5},T={style:{color:"yellow"}},W=Object(s["m"])("br",null,null,-1),z={style:{color:"yellow"}},F=Object(s["m"])("br",null,null,-1),I={style:{color:"red"}},G=Object(s["m"])("br",null,null,-1),H=Object(s["m"])("br",null,null,-1),L={style:{color:"red"}},N=Object(s["m"])("br",null,null,-1),Z=Object(s["m"])("span",{style:{color:"yellow"}},"变更为：",-1),$=Object(s["m"])("option",{value:0},"1.未开启私募",-1),q=Object(s["m"])("option",{value:1},"2.已开启私募",-1),_=Object(s["m"])("option",{value:3},"3.私募已完成",-1),J=Object(s["m"])("option",{value:4},"4.白名单交易",-1),R=Object(s["m"])("option",{value:6},"5.超级白名单交易",-1),K=Object(s["m"])("option",{value:5},"6.正式交易",-1),Q=[$,q,_,J,R,K],X=Object(s["m"])("span",null,"点击变更",-1),Y=[X],ee={class:"second"},te=Object(s["m"])("span",null,"清空BNB到创世地址(私募已完成时可操作)",-1),ae=[te],se={class:"second",style:{"padding-top":"15px"}},oe={style:{color:"red"}},ne={style:{color:"red"}},re=Object(s["m"])("br",null,null,-1),ce=Object(s["m"])("span",{style:{color:"yellow"}},"值类型：",-1),le=Object(s["m"])("option",{value:4},"最多燃烧次数",-1),ie=Object(s["m"])("option",{value:1},"当前已燃烧次数",-1),de=Object(s["m"])("option",{value:5},"币价涨幅太大关闭燃烧和领取奖励开关(1=启用,0=不启用)",-1),ue=Object(s["m"])("option",{value:6},"提前购买多少秒",-1),pe=[le,ie,de,ue],he=Object(s["m"])("span",null,"修改参数",-1),be=[he],me={class:"second",style:{"padding-top":"15px"}},ge=Object(s["m"])("span",{style:{color:"yellow"}},"类型：",-1),Oe=Object(s["m"])("option",{value:5},"USDT/本币兑换",-1),xe=Object(s["m"])("option",{value:2},"BNB/本币兑换",-1),je=[Oe,xe],ye=Object(s["m"])("span",null,"设置博饼交易对",-1),we=[ye],fe={class:"second",style:{"padding-top":"0px"}},ve=Object(s["m"])("span",null,"复制协议地址",-1),ke=[ve],Pe={class:"second"},Ae=Object(s["m"])("span",null,"流动性锁200年",-1),Be=[Ae],Ce={class:"second"},De=Object(s["m"])("span",null,"丢管理员权限",-1),Ve=[De];function Me(e,t,a,c,u,p){return Object(s["G"])(),Object(s["l"])("div",o,[Object(s["m"])("div",n,[Object(s["m"])("span",{style:{color:"#7C3BED"},onClick:t[0]||(t[0]=e=>p.back())},"返回"),u.userAddress?(Object(s["G"])(),Object(s["l"])("div",r,[Object(s["m"])("span",null,Object(s["P"])(u.userAddress.substring(0,10)+"..."+u.userAddress.substring(36)),1)])):Object(s["k"])("",!0),u.userAddress?Object(s["k"])("",!0):(Object(s["G"])(),Object(s["l"])("div",{key:1,style:{width:"160px",height:"40px","border-radius":"10px","text-align":"center","line-height":"40px",background:"#7C3BED33",color:"#7C3BED"},onClick:t[1]||(t[1]=(...e)=>p.connectBSC&&p.connectBSC(...e))},l))]),Object(s["m"])("div",i,[Object(s["Z"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>u.addresses=e),rows:10,cols:55,style:{"margin-top":"5px","margin-left":"5px",width:"100%"},placeholder:"请输入多个要操作的地址,用英文逗号(',')隔开,每次最多支持100个地址"},null,512),[[s["U"],u.addresses]]),d,Object(s["Z"])(Object(s["m"])("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>u.addWhileType=e),placeholder:"请选择白名单类型"},b,512),[[s["T"],u.addWhileType]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[4]||(t[4]=e=>p.addWhite(1))},g),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[5]||(t[5]=e=>p.addWhite(0))},x)]),Object(s["m"])("div",j,[Object(s["Z"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[6]||(t[6]=e=>u.addresses2=e),rows:10,cols:55,style:{"margin-top":"5px","margin-left":"5px",width:"100%"},placeholder:"请输入多个要操作的地址,用英文逗号(',')隔开,每次最多支持100个地址"},null,512),[[s["U"],u.addresses2]]),y,Object(s["Z"])(Object(s["m"])("select",{"onUpdate:modelValue":t[7]||(t[7]=e=>u.addMintType=e),placeholder:"请选择白名单类型"},k,512),[[s["T"],u.addMintType]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[8]||(t[8]=e=>p.addMintUser(1))},A)]),Object(s["m"])("div",B,[Object(s["m"])("div",C,[0==u.mintEnable?(Object(s["G"])(),Object(s["l"])("div",D,"当前阶段：未开启私募")):Object(s["k"])("",!0),1==u.mintEnable||2==u.mintEnable?(Object(s["G"])(),Object(s["l"])("div",V,"当前阶段：已开启私募")):Object(s["k"])("",!0),3==u.mintEnable?(Object(s["G"])(),Object(s["l"])("div",M,"当前阶段：私募已完成")):Object(s["k"])("",!0),4==u.mintEnable?(Object(s["G"])(),Object(s["l"])("div",S,"当前阶段：白名单交易")):Object(s["k"])("",!0),5==u.mintEnable?(Object(s["G"])(),Object(s["l"])("div",U,"当前阶段：正式交易")):Object(s["k"])("",!0),6==u.mintEnable?(Object(s["G"])(),Object(s["l"])("div",E,"当前阶段：超级白名单交易")):Object(s["k"])("",!0)]),Object(s["m"])("span",T,"群主私募剩余进度："+Object(s["P"])(u.param[5])+"BNB",1),W,Object(s["m"])("span",z,"普通私募剩余进度："+Object(s["P"])(u.param[6])+"BNB",1),F,Object(s["m"])("span",I,[Object(s["o"])("注意：私募完成后，开启白名单交易前需:1.用管理地址转给合约转账："+Object(s["P"])(u.dataStat[10])+"BNB ",1),G,Object(s["o"])("2.添加博饼bnb=PMM流动性并设置好交易对地址")]),H,Object(s["m"])("span",L,"合约当前余额："+Object(s["P"])(u.dataStat2[0].toFixed(0))+"PMM,"+Object(s["P"])(u.dataStat2[1].toFixed(4))+"BNB",1),N,Z,Object(s["Z"])(Object(s["m"])("select",{"onUpdate:modelValue":t[9]||(t[9]=e=>u.updateParamValue=e),placeholder:"请选择阶段"},Q,512),[[s["T"],u.updateParamValue]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[10]||(t[10]=e=>p.startMint(!0))},Y)]),Object(s["m"])("div",ee,[Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[11]||(t[11]=(...e)=>p.clearDivieBnb&&p.clearDivieBnb(...e))},ae)]),Object(s["m"])("div",se,[Object(s["m"])("span",oe,"当前已燃烧次数："+Object(s["P"])(u.dataStat[0]),1),Object(s["m"])("span",ne,"最多燃烧次数："+Object(s["P"])(u.dataStat[3]),1),re,ce,Object(s["Z"])(Object(s["m"])("select",{"onUpdate:modelValue":t[12]||(t[12]=t=>e.updateParamValue3=t),placeholder:"请选择类型"},pe,512),[[s["T"],e.updateParamValue3]]),Object(s["Z"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[13]||(t[13]=t=>e.updateParamValue4=t),rows:1,cols:55,style:{"margin-top":"5px","margin-left":"5px"},placeholder:"请输入值"},null,512),[[s["U"],e.updateParamValue4]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[14]||(t[14]=e=>p.setParam(1))},be)]),Object(s["m"])("div",me,[ge,Object(s["Z"])(Object(s["m"])("select",{"onUpdate:modelValue":t[15]||(t[15]=e=>u.updateParamValue2=e),placeholder:"请选择类型"},je,512),[[s["T"],u.updateParamValue2]]),Object(s["Z"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[16]||(t[16]=e=>u.pankAddress=e),rows:2,cols:55,style:{"margin-top":"5px","margin-left":"5px"},placeholder:"请输入博饼交易对地址"},null,512),[[s["U"],u.pankAddress]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[17]||(t[17]=e=>p.setPankAddress(1))},we)]),Object(s["m"])("div",fe,[Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[18]||(t[18]=e=>p.copyUrl())},ke)]),Object(s["m"])("div",Pe,[Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#7C3BED33",color:"red"},onClick:t[19]||(t[19]=e=>p.extendLiquidityLock())},Be)]),Object(s["m"])("div",Ce,[Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#7C3BED33",color:"red"},onClick:t[20]||(t[20]=e=>p.renounceOwnership())},Ve)])])}a("5b81");var Se=a("c0d8"),Ue=a.n(Se),Ee=a("aee1"),Te=a("f64c"),We=a("694c"),ze={data(){return{defaultProps:{children:"children",label:"label"},contractAddress:"0x6b11341c08ce6e403575b9debc286e5875fe2caf",networkId:56,userAddress:"",dataStat2:[],dataStat:[],contract:{},_maxBurnCountDay:100,param:[],addWhileType:null,addMintType:null,tokenName:"PMM",web3:{},mintEnable:0,updateParamValue:null,updateParamValue2:null,addresses:"",addresses2:"",pankAddress:"",Language:We,selectLan:"en"}},created(){this.connectBSC();let e=this;this.interval=setInterval((function(){e.loadData()}),15e3)},destroyed(){this.interval&&clearInterval(this.interval)},methods:{copyUrl(){var e=document.createElement("textarea");e.style.position="fixed",e.style.opacity=0,e.value=this.contractAddress,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),Te["a"].success("success copy")},async renounceOwnership(){this.contract.methods.renounceOwnership().send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async setPankAddress(){null!=this.updateParamValue2?(this.pankAddress||Te["a"].error("请输入交易对地址"),this.updateParam(this.updateParamValue2,0,this.pankAddress)):Te["a"].error("请选择交易对类型")},async setParam(){null!=this.updateParamValue3?(this.updateParamValue4||Te["a"].error("请输入值"),this.updateParam2(this.updateParamValue3,this.updateParamValue4,this.contractAddress)):Te["a"].error("请选择值类型")},async extendLiquidityLock(){this.web3.eth.getBlockNumber().then(e=>{e+=21024e5,this.contract.methods.extendLiquidityLock(e).send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})}).catch(e=>{console.error("错误: "+e)})},async addWhite(e){if(this.addresses=this.addresses.replaceAll("，",","),this.addresses=this.addresses.replaceAll("\n",""),null==this.addWhileType)return void Te["a"].error("请选择白名单类型");let t=this.addresses.split(",");for(let a=0;a<t.length;a++)if(42!=t[a].length)return void Te["a"].error("地址错误:"+t[a]);this.contract.methods.addMintWhite(this.addWhileType,t,e).send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async addMintUser(e){if(this.addresses2=this.addresses2.replaceAll("，",","),this.addresses2=this.addresses2.replaceAll("\n",""),null==this.addMintType)return void Te["a"].error("请选择类型");let t=this.addresses2.split(",");for(let a=0;a<t.length;a++)if(42!=t[a].length)return void Te["a"].error("地址错误:"+t[a]);this.contract.methods.addMintUser(this.addMintType,t).send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async updateParam(e,t,a){console.log("updateParam"),this.contract.methods.updateParam(e,t,a).send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async updateParam2(e,t,a){console.log("updateParam"),this.contract.methods.updateParam2(e,t,a).send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async startMint(e){null!=this.updateParamValue?this.updateParam(3,parseInt(this.updateParamValue+""),this.contractAddress):Te["a"].error("请选择变更阶段")},async divid(e){this.contract.methods.divid(this._maxBurnCountDay,e).send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async clearDivieBnb(){this.contract.methods.clearDivieBnb().send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async clearOutUser(e){this.contract.methods.clearOutUser().send({from:this.userAddress}).on("transactionHash",e=>{Te["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Te["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},maxBurn(){this.burnAmount=this.tokenBalance},back(){this.$router.replace("/?notTo=1")},async connectBSC(){let e=this;if(window.ethereum)try{window.ethereum.on("accountsChanged",(function(t){console.log("change address:",t[0]),e.connectBSC()})),console.log(window.ethereum,"window.ethereum");const t=await window.ethereum.request({method:"eth_requestAccounts"});console.log(t,"accounts"),this.web3=new Ue.a(window.ethereum),this.userAddress=t[0].toLowerCase();let a=await this.web3.eth.getBalance(this.userAddress);this.bnbBalance=this.web3.utils.fromWei(a,"ether"),console.log(Ee,"MyContractABI");const s=await this.web3.eth.net.getId();s!=this.networkId&&Te["a"].error("err network，please select BNB chain"),this.contract=new this.web3.eth.Contract(Ee,this.contractAddress),this.connected=!0,this.loadData()}catch(t){console.error(t)}else alert("Please install MetaMask or a BSC-compatible wallet to use this DApp.")},async loadData(){if(this.contract)try{let e=await this.contract.methods.getStatData().call({});e[0]=parseInt(e[0]),e[3]=parseInt(e[3]);let t=await this.contract.methods.getParam().call({}),a=await this.contract.methods.getStatData2().call({});t[5]=this.web3.utils.fromWei(t[5],"ether"),t[6]=this.web3.utils.fromWei(t[6],"ether"),a[0]=parseFloat(this.web3.utils.fromWei(a[0],"ether")),a[1]=parseFloat(this.web3.utils.fromWei(a[1],"ether")),e[10]=this.web3.utils.fromWei(e[10],"ether"),this.mintEnable=parseInt(e[8]),this.param=t,this.dataStat2=a,this.dataStat=e,console.log(e,"dataStat:")}catch(e){console.error(e)}else console.error("Contract not initialized.")}}},Fe=(a("7a98"),a("6b0d")),Ie=a.n(Fe);const Ge=Ie()(ze,[["render",Me]]);t["default"]=Ge},"0cb2":function(e,t,a){"use strict";var s=a("e330"),o=a("7b0b"),n=Math.floor,r=s("".charAt),c=s("".replace),l=s("".slice),i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,s,u,p){var h=a+e.length,b=s.length,m=d;return void 0!==u&&(u=o(u),m=i),c(p,m,(function(o,c){var i;switch(r(c,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,a);case"'":return l(t,h);case"<":i=u[l(c,1,-1)];break;default:var d=+c;if(0===d)return o;if(d>b){var p=n(d/10);return 0===p?o:p<=b?void 0===s[p-1]?r(c,1):s[p-1]+r(c,1):o}i=s[d-1]}return void 0===i?"":i}))}},"2e03":function(e,t,a){},"44e7":function(e,t,a){"use strict";var s=a("861d"),o=a("c6b6"),n=a("b622"),r=n("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[r])?!!t:"RegExp"===o(e))}},"5b81":function(e,t,a){"use strict";var s=a("23e7"),o=a("c65b"),n=a("e330"),r=a("1d80"),c=a("1626"),l=a("7234"),i=a("44e7"),d=a("577e"),u=a("dc4a"),p=a("90d8"),h=a("0cb2"),b=a("b622"),m=a("c430"),g=b("replace"),O=TypeError,x=n("".indexOf),j=n("".replace),y=n("".slice),w=Math.max;s({target:"String",proto:!0},{replaceAll:function(e,t){var a,s,n,b,f,v,k,P,A,B=r(this),C=0,D=0,V="";if(!l(e)){if(a=i(e),a&&(s=d(r(p(e))),!~x(s,"g")))throw new O("`.replaceAll` does not allow non-global regexes");if(n=u(e,g),n)return o(n,e,B,t);if(m&&a)return j(d(B),e,t)}b=d(B),f=d(e),v=c(t),v||(t=d(t)),k=f.length,P=w(1,k),C=x(b,f);while(-1!==C)A=v?d(t(f,C,b)):h(f,b,C,[],void 0,t),V+=y(b,D,C)+A,D=C+k,C=C+P>b.length?-1:x(b,f,C+P);return D<b.length&&(V+=y(b,D)),V}})},"7a98":function(e,t,a){"use strict";a("2e03")},"90d8":function(e,t,a){"use strict";var s=a("c65b"),o=a("1a2d"),n=a("3a9b"),r=a("ad6d"),c=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in c||o(e,"flags")||!n(c,e)?t:s(r,e)}},ad6d:function(e,t,a){"use strict";var s=a("825a");e.exports=function(){var e=s(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}}}]);
//# sourceMappingURL=chunk-36c4afa8.63e1ea31.js.map