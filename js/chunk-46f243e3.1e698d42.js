(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46f243e3"],{"066d":function(e,t,a){"use strict";a("5d5b")},"0bbf":function(e,t,a){"use strict";a.r(t);var s=a("7a23");const o={class:"content"},n={style:{width:"90%",margin:"10px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},r={key:0,style:{width:"200px",height:"40px","border-radius":"10px","text-align":"center","line-height":"40px",background:"#7C3BED33",color:"white"}},c=Object(s["m"])("span",null,"链 接",-1),l=[c],i={class:"second",style:{"padding-top":"15px"}},d=Object(s["m"])("span",{style:{color:"yellow"}},"类型：",-1),u=Object(s["m"])("option",{value:0},"超级白名单",-1),p=Object(s["m"])("option",{value:1},"群主白名单(与普通白名单不能共存)",-1),h=Object(s["m"])("option",{value:2},"普通白名单(与群主白名单不能共存)",-1),b=[u,p,h],m=Object(s["m"])("span",null,"添加白名单",-1),g=[m],x=Object(s["m"])("span",null,"移除白名单",-1),O=[x],j={class:"second"},y={style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#7C3BED33",color:"white"}},w={key:0},f={key:1},v={key:2},k={key:3},B={key:4},A={key:5},P={style:{color:"yellow"}},C=Object(s["m"])("br",null,null,-1),D={style:{color:"yellow"}},V=Object(s["m"])("br",null,null,-1),S={style:{color:"red"}},E=Object(s["m"])("br",null,null,-1),H=Object(s["m"])("br",null,null,-1),U={style:{color:"red"}},W=Object(s["m"])("br",null,null,-1),M=Object(s["m"])("span",{style:{color:"yellow"}},"变更为：",-1),z=Object(s["m"])("option",{value:0},"1.未开启私募",-1),F=Object(s["m"])("option",{value:1},"2.已开启私募",-1),I=Object(s["m"])("option",{value:3},"3.私募已完成",-1),L=Object(s["m"])("option",{value:4},"4.白名单交易",-1),N=Object(s["m"])("option",{value:6},"5.超级白名单交易",-1),Q=Object(s["m"])("option",{value:5},"6.正式交易",-1),T=[z,F,I,L,N,Q],$=Object(s["m"])("span",null,"点击变更",-1),q=[$],_={class:"second"},J=Object(s["m"])("span",null,"清空BNB到创世地址(私募已完成时可操作)",-1),R=[J],G={class:"second",style:{"padding-top":"15px"}},K={style:{color:"red"}},X={style:{color:"red"}},Y=Object(s["m"])("br",null,null,-1),Z=Object(s["m"])("span",{style:{color:"yellow"}},"值类型：",-1),ee=Object(s["m"])("option",{value:4},"最多燃烧次数",-1),te=Object(s["m"])("option",{value:1},"当前已燃烧次数",-1),ae=Object(s["m"])("option",{value:5},"币价涨幅太大关闭燃烧和领取奖励开关(1=启用,0=不启用)",-1),se=Object(s["m"])("option",{value:6},"提前购买多少秒",-1),oe=[ee,te,ae,se],ne=Object(s["m"])("span",null,"修改参数",-1),re=[ne],ce={class:"second",style:{"padding-top":"15px"}},le=Object(s["m"])("span",{style:{color:"yellow"}},"类型：",-1),ie=Object(s["m"])("option",{value:2},"USDT/本币兑换",-1),de=Object(s["m"])("option",{value:3},"BNB/本币兑换",-1),ue=[ie,de],pe=Object(s["m"])("span",null,"设置博饼交易对",-1),he=[pe],be={class:"second",style:{"padding-top":"0px"}},me=Object(s["m"])("span",null,"复制协议地址",-1),ge=[me],xe={class:"second"},Oe=Object(s["m"])("span",null,"流动性锁200年",-1),je=[Oe],ye={class:"second"},we=Object(s["m"])("span",null,"丢管理员权限",-1),fe=[we];function ve(e,t,a,c,u,p){return Object(s["H"])(),Object(s["l"])("div",o,[Object(s["m"])("div",n,[Object(s["m"])("span",{style:{color:"#7C3BED"},onClick:t[0]||(t[0]=e=>p.back())},"返回"),u.userAddress?(Object(s["H"])(),Object(s["l"])("div",r,[Object(s["m"])("span",null,Object(s["Q"])(u.userAddress.substring(0,10)+"..."+u.userAddress.substring(36)),1)])):Object(s["k"])("",!0),u.userAddress?Object(s["k"])("",!0):(Object(s["H"])(),Object(s["l"])("div",{key:1,style:{width:"160px",height:"40px","border-radius":"10px","text-align":"center","line-height":"40px",background:"#7C3BED33",color:"#7C3BED"},onClick:t[1]||(t[1]=(...e)=>p.connectBSC&&p.connectBSC(...e))},l))]),Object(s["m"])("div",i,[Object(s["ab"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>u.addresses=e),rows:10,cols:55,style:{"margin-top":"5px","margin-left":"5px",width:"100%"},placeholder:"请输入多个要操作的地址,用英文逗号(',')隔开,每次最多支持100个地址"},null,512),[[s["V"],u.addresses]]),d,Object(s["ab"])(Object(s["m"])("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>u.addWhileType=e),placeholder:"请选择白名单类型"},b,512),[[s["U"],u.addWhileType]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[4]||(t[4]=e=>p.addWhite(1))},g),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[5]||(t[5]=e=>p.addWhite(0))},O)]),Object(s["m"])("div",j,[Object(s["m"])("div",y,[0==u.mintEnable?(Object(s["H"])(),Object(s["l"])("div",w,"当前阶段：未开启私募")):Object(s["k"])("",!0),1==u.mintEnable||2==u.mintEnable?(Object(s["H"])(),Object(s["l"])("div",f,"当前阶段：已开启私募")):Object(s["k"])("",!0),3==u.mintEnable?(Object(s["H"])(),Object(s["l"])("div",v,"当前阶段：私募已完成")):Object(s["k"])("",!0),4==u.mintEnable?(Object(s["H"])(),Object(s["l"])("div",k,"当前阶段：白名单交易")):Object(s["k"])("",!0),5==u.mintEnable?(Object(s["H"])(),Object(s["l"])("div",B,"当前阶段：正式交易")):Object(s["k"])("",!0),6==u.mintEnable?(Object(s["H"])(),Object(s["l"])("div",A,"当前阶段：超级白名单交易")):Object(s["k"])("",!0)]),Object(s["m"])("span",P,"群主私募剩余进度："+Object(s["Q"])(u.param[5])+"BNB",1),C,Object(s["m"])("span",D,"普通私募剩余进度："+Object(s["Q"])(u.param[6])+"BNB",1),V,Object(s["m"])("span",S,[Object(s["p"])("注意：私募完成后，开启白名单交易前需:1.用管理地址转给合约转账："+Object(s["Q"])(u.dataStat[10])+"BNB ",1),E,Object(s["p"])("2.添加博饼bnb=PMM流动性并设置好交易对地址")]),H,Object(s["m"])("span",U,"合约当前余额："+Object(s["Q"])(u.dataStat2[0].toFixed(0))+"PMM,"+Object(s["Q"])(u.dataStat2[1].toFixed(4))+"BNB",1),W,M,Object(s["ab"])(Object(s["m"])("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>u.updateParamValue=e),placeholder:"请选择阶段"},T,512),[[s["U"],u.updateParamValue]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[7]||(t[7]=e=>p.startMint(!0))},q)]),Object(s["m"])("div",_,[Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[8]||(t[8]=(...e)=>p.clearDivieBnb&&p.clearDivieBnb(...e))},R)]),Object(s["m"])("div",G,[Object(s["m"])("span",K,"当前已燃烧次数："+Object(s["Q"])(u.dataStat[0]),1),Object(s["m"])("span",X,"最多燃烧次数："+Object(s["Q"])(u.dataStat[3]),1),Y,Z,Object(s["ab"])(Object(s["m"])("select",{"onUpdate:modelValue":t[9]||(t[9]=t=>e.updateParamValue3=t),placeholder:"请选择类型"},oe,512),[[s["U"],e.updateParamValue3]]),Object(s["ab"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[10]||(t[10]=t=>e.updateParamValue4=t),rows:1,cols:55,style:{"margin-top":"5px","margin-left":"5px"},placeholder:"请输入值"},null,512),[[s["V"],e.updateParamValue4]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[11]||(t[11]=e=>p.setParam(1))},re)]),Object(s["m"])("div",ce,[le,Object(s["ab"])(Object(s["m"])("select",{"onUpdate:modelValue":t[12]||(t[12]=e=>u.updateParamValue2=e),placeholder:"请选择类型"},ue,512),[[s["U"],u.updateParamValue2]]),Object(s["ab"])(Object(s["m"])("textarea",{"onUpdate:modelValue":t[13]||(t[13]=e=>u.pankAddress=e),rows:2,cols:55,style:{"margin-top":"5px","margin-left":"5px"},placeholder:"请输入博饼交易对地址"},null,512),[[s["V"],u.pankAddress]]),Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[14]||(t[14]=e=>p.setPankAddress(1))},he)]),Object(s["m"])("div",be,[Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#3138F0",color:"white"},onClick:t[15]||(t[15]=e=>p.copyUrl())},ge)]),Object(s["m"])("div",xe,[Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#7C3BED33",color:"red"},onClick:t[16]||(t[16]=e=>p.extendLiquidityLock())},je)]),Object(s["m"])("div",ye,[Object(s["m"])("div",{style:{width:"90%",margin:"10px auto",height:"48px","border-radius":"10px","text-align":"center","line-height":"48px","margin-top":"20px",display:"block","margin-left":"5%","font-size":"14px",background:"#7C3BED33",color:"red"},onClick:t[17]||(t[17]=t=>e.transferOwnership())},fe)])])}a("5b81");var ke=a("c0d8"),Be=a.n(ke),Ae=a("aee1"),Pe=a("f64c"),Ce=a("694c"),De={data(){return{defaultProps:{children:"children",label:"label"},contractAddress:"0x1a1f03eca72e3e7dd15419e4e502d52f926c4e8b",networkId:56,userAddress:"",dataStat2:[],dataStat:[],contract:{},_maxBurnCountDay:100,param:[],addWhileType:null,tokenName:"PMM",web3:{},mintEnable:0,updateParamValue:null,updateParamValue2:null,addresses:"",pankAddress:"",Language:Ce,selectLan:"en"}},created(){this.connectBSC();let e=this;this.interval=setInterval((function(){e.loadData()}),15e3)},destroyed(){this.interval&&clearInterval(this.interval)},methods:{copyUrl(){var e=document.createElement("textarea");e.style.position="fixed",e.style.opacity=0,e.value=this.contractAddress,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),Pe["a"].success("success copy")},async renounceOwnership(){this.contract.methods.renounceOwnership("0x0000000000000000000000000000000000000000").send({from:this.userAddress}).on("transactionHash",e=>{Pe["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Pe["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async setPankAddress(){null!=this.updateParamValue2?(this.pankAddress||Pe["a"].error("请输入交易对地址"),this.updateParam2(this.updateParamValue2,0,this.pankAddress)):Pe["a"].error("请选择交易对类型")},async setParam(){null!=this.updateParamValue3?(this.updateParamValue4||Pe["a"].error("请输入值"),this.updateParam2(this.updateParamValue3,this.updateParamValue4,this.contractAddress)):Pe["a"].error("请选择值类型")},async extendLiquidityLock(){this.web3.eth.getBlockNumber().then(e=>{e+=21024e5,this.contract.methods.extendLiquidityLock(e).send({from:this.userAddress}).on("transactionHash",e=>{Pe["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Pe["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})}).catch(e=>{console.error("错误: "+e)})},async addWhite(e){if(this.addresses=this.addresses.replaceAll("，",","),this.addresses=this.addresses.replaceAll("\n",""),null==this.addWhileType)return void Pe["a"].error("请选择白名单类型");let t=this.addresses.split(",");for(let a=0;a<t.length;a++)if(42!=t[a].length)return void Pe["a"].error("地址错误:"+t[a]);this.contract.methods.addMintWhite(this.addWhileType,t,e).send({from:this.userAddress}).on("transactionHash",e=>{Pe["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Pe["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async updateParam(e,t,a){console.log("updateParam"),this.contract.methods.updateParam(e,t,a).send({from:this.userAddress}).on("transactionHash",e=>{Pe["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Pe["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async updateParam2(e,t,a){console.log("updateParam"),this.contract.methods.updateParam2(e,t,a).send({from:this.userAddress}).on("transactionHash",e=>{Pe["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Pe["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async startMint(e){null!=this.updateParamValue?this.updateParam(3,parseInt(this.updateParamValue+""),this.contractAddress):Pe["a"].error("请选择变更阶段")},async divid(e){this.contract.methods.divid(this._maxBurnCountDay,e).send({from:this.userAddress}).on("transactionHash",e=>{Pe["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Pe["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async clearDivieBnb(){this.contract.methods.clearDivieBnb().send({from:this.userAddress}).on("transactionHash",e=>{Pe["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Pe["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},async clearOutUser(e){this.contract.methods.clearOutUser().send({from:this.userAddress}).on("transactionHash",e=>{Pe["a"].success("submit success"),console.log("交易哈希:",e)}).on("receipt",e=>{console.log("交易收据:",e),Pe["a"].success("transaction success"),this.loadData()}).on("error",e=>{console.error("交易失败:",e)})},maxBurn(){this.burnAmount=this.tokenBalance},back(){this.$router.replace("/?notTo=1")},async connectBSC(){let e=this;if(window.ethereum)try{window.ethereum.on("accountsChanged",(function(t){console.log("change address:",t[0]),e.connectBSC()})),console.log(window.ethereum,"window.ethereum");const t=await window.ethereum.request({method:"eth_requestAccounts"});console.log(t,"accounts"),this.web3=new Be.a(window.ethereum),this.userAddress=t[0].toLowerCase();let a=await this.web3.eth.getBalance(this.userAddress);this.bnbBalance=this.web3.utils.fromWei(a,"ether"),console.log(Ae,"MyContractABI");const s=await this.web3.eth.net.getId();s!=this.networkId&&Pe["a"].error("err network，please select BNB chain"),this.contract=new this.web3.eth.Contract(Ae,this.contractAddress),this.connected=!0,this.loadData()}catch(t){console.error(t)}else alert("Please install MetaMask or a BSC-compatible wallet to use this DApp.")},async loadData(){if(this.contract)try{let e=await this.contract.methods.getStatData().call({});e[0]=parseInt(e[0]),e[3]=parseInt(e[3]);let t=await this.contract.methods.getParam().call({}),a=await this.contract.methods.getStatData2().call({});t[5]=this.web3.utils.fromWei(t[5],"ether"),t[6]=this.web3.utils.fromWei(t[6],"ether"),a[0]=parseFloat(this.web3.utils.fromWei(a[0],"ether")),a[1]=parseFloat(this.web3.utils.fromWei(a[1],"ether")),e[10]=this.web3.utils.fromWei(e[10],"ether"),this.mintEnable=parseInt(e[8]),this.param=t,this.dataStat2=a,this.dataStat=e,console.log(e,"dataStat:")}catch(e){console.error(e)}else console.error("Contract not initialized.")}}},Ve=(a("066d"),a("6b0d")),Se=a.n(Ve);const Ee=Se()(De,[["render",ve]]);t["default"]=Ee},"0cb2":function(e,t,a){"use strict";var s=a("e330"),o=a("7b0b"),n=Math.floor,r=s("".charAt),c=s("".replace),l=s("".slice),i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,s,u,p){var h=a+e.length,b=s.length,m=d;return void 0!==u&&(u=o(u),m=i),c(p,m,(function(o,c){var i;switch(r(c,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,a);case"'":return l(t,h);case"<":i=u[l(c,1,-1)];break;default:var d=+c;if(0===d)return o;if(d>b){var p=n(d/10);return 0===p?o:p<=b?void 0===s[p-1]?r(c,1):s[p-1]+r(c,1):o}i=s[d-1]}return void 0===i?"":i}))}},"44e7":function(e,t,a){"use strict";var s=a("861d"),o=a("c6b6"),n=a("b622"),r=n("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[r])?!!t:"RegExp"===o(e))}},"5b81":function(e,t,a){"use strict";var s=a("23e7"),o=a("c65b"),n=a("e330"),r=a("1d80"),c=a("1626"),l=a("7234"),i=a("44e7"),d=a("577e"),u=a("dc4a"),p=a("90d8"),h=a("0cb2"),b=a("b622"),m=a("c430"),g=b("replace"),x=TypeError,O=n("".indexOf),j=n("".replace),y=n("".slice),w=Math.max;s({target:"String",proto:!0},{replaceAll:function(e,t){var a,s,n,b,f,v,k,B,A,P=r(this),C=0,D=0,V="";if(!l(e)){if(a=i(e),a&&(s=d(r(p(e))),!~O(s,"g")))throw new x("`.replaceAll` does not allow non-global regexes");if(n=u(e,g),n)return o(n,e,P,t);if(m&&a)return j(d(P),e,t)}b=d(P),f=d(e),v=c(t),v||(t=d(t)),k=f.length,B=w(1,k),C=O(b,f);while(-1!==C)A=v?d(t(f,C,b)):h(f,b,C,[],void 0,t),V+=y(b,D,C)+A,D=C+k,C=C+B>b.length?-1:O(b,f,C+B);return D<b.length&&(V+=y(b,D)),V}})},"5d5b":function(e,t,a){},"90d8":function(e,t,a){"use strict";var s=a("c65b"),o=a("1a2d"),n=a("3a9b"),r=a("ad6d"),c=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in c||o(e,"flags")||!n(c,e)?t:s(r,e)}},ad6d:function(e,t,a){"use strict";var s=a("825a");e.exports=function(){var e=s(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}}}]);
//# sourceMappingURL=chunk-46f243e3.1e698d42.js.map