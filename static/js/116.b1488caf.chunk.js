"use strict";(self.webpackChunktest_pokemon_cards=self.webpackChunktest_pokemon_cards||[]).push([[116],{2238:function(n,e,o){o.r(e),o.d(e,{default:function(){return mn}});var t,r,i,a,s,p,c,d,l,u,x,f,g,h,m,b,w,v,k=o(9434),Z=o(2791),j=o(7689),y=function(n){return n.pokemons.pokemons},P=function(n){return n.pokemons.result},C=function(n){return n.pokemons.page},A=function(n){return n.pokemons.perPage},B=function(n){return n.pokemons.count},F=function(n){return n.pokemons.isLoading},E=function(n){return n.pokemons.isLoadingPokemons},z=function(n){return n.pokemons.isFilterNamePokemon},_=function(n){return n.pokemons.types},D=function(n){return n.pokemons.filterName},T=function(n){return n.pokemons.filterTags},I=o(2526),L=o(168),N=o(4313),O=o(1087),q=N.ZP.section(t||(t=(0,L.Z)(["\n    max-width: 1280px; \n    margin: 40px auto;\n    padding: 0 30px;\n"]))),G=N.ZP.div(r||(r=(0,L.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    font-size: 36px;\n    height: 150px;\n    width: 80%;\n\n"]))),H=N.ZP.ul(i||(i=(0,L.Z)(["\n    max-width: 1280px;\n   \n    padding: 0;\n    margin-bottom: 30px;\n    margin-top: 30px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 50px;\n"]))),R=(N.ZP.button(a||(a=(0,L.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n   \n    width: 380px;\n    height: 50px;\n    margin: 0 auto;\n    margin-bottom: 40px;\n\n    background-color: #feffe0;\n    border: 3px solid #fad61f;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n    border-radius: 10.3108px;\n\n    cursor: pointer;\n\n    font-weight: 600;\n    font-size: 18px;\n    line-height: calc(22 / 18);\n    text-transform: uppercase;\n    color: #373737;\n    \n    transition-property: background-color, border-color, color;\n    transition-duration: 0.4s;\n    transition-timing-function: ease;\n\n    &:hover{\n        background-color: #fad61f;\n        border-color: #feffe0;\n        color: #feffe0;\n    }\n\n    &:disabled{\n        background-color: white;\n        color: grey;\n        border: none;\n        cursor: not-allowed;\n    }\n"]))),N.ZP.div(s||(s=(0,L.Z)(["\n    display: flex;\n    align-items: center;\n    padding-right: 140px;\n    max-width: 1280px;\n    margin-bottom: 30px;\n    @media (max-width: 768px) {\n    flex-wrap: wrap;\n    gap: 20px;\n    }\n"])))),U=(0,N.ZP)(O.OL)(p||(p=(0,L.Z)(["\n    display: block;\n    max-width: 180px;\n    padding: 12px 18px;\n\n    display: flex;\n    align-items: center;\n\n    border: none;\n    background-color: transparent;\n    border-radius: 10px;\n\n    color: #373737;\n    text-decoration-line: underline;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: calc(22 / 18);\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    \n    cursor: pointer;\n    transition: background-color 500ms ease;\n    &:hover,\n    &:focus {\n        color:#FBFCFB;\n        background-color: #fad61f;\n    }\n"]))),V=o(3313),J=o(7878),K={normal:"#BFBEBD",fighting:"#E04532",flying:"#37C5B0",poison:"#C02053",ground:"#8E5633",rock:"#557679",bug:"#93B45C",ghost:"#CFCA57",steel:"#9AA1BF",fire:"#FF520C",water:"#6082C9",grass:"#3DAF08",electric:"#2545C7",psychic:"#B62AA7",ice:"#4EA3E5",dragon:"#962EBD",dark:"#686563",fairy:"#D53CA4",unknown:"#9BB9AF",shadow:"#665353"},M=N.ZP.li(c||(c=(0,L.Z)(["\n    width: 200px;\n    padding: 15px;\n    background: #e6e3d2;\n    color: #1D1515;\n    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n    border-radius: 20px;\n    display: flex;\n    gap:15px;\n    flex-direction: column;\n    align-items: center;\n\n    @media (max-width: 768px) {\n    width: 90%;\n    max-width: 480px;\n    font-size: 28px;\n    }\n"]))),Q=N.ZP.h2(d||(d=(0,L.Z)(["\n    font-size: 26px;\n    letter-spacing: 1.2;\n    color: #1D1515;\n\n    @media (max-width: 768px) {\n    font-size: 38px;\n    }\n"]))),S=N.ZP.img(l||(l=(0,L.Z)(["\n    width: 150px;\n    height: 180px;\n\n    @media (max-width: 768px) {\n    width: 80%;\n    max-width: 250px;\n    height: auto;\n    margin-bottom: 20px;\n    }\n"]))),W=N.ZP.div(u||(u=(0,L.Z)(["\n    display: flex;\n    gap:10px;\n\n"]))),X=N.ZP.span(x||(x=(0,L.Z)(["\n    color: #fefff1;\n    background-color: ",";\n    border-radius: 4px;\n    padding: 2px 8px;\n\n    @media (max-width: 768px) {\n    font-size: 26px;\n    }\n"])),(function(n){return K[n.props]})),Y=N.ZP.ul(f||(f=(0,L.Z)(["\n    margin: 0;\n    padding: 0;\n"]))),$=N.ZP.li(g||(g=(0,L.Z)(["\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n    \n"]))),nn=o.p+"static/media/Pokemon.de13e6e7ec1233821760.png",en=o(184),on=function(n){var e=n.poke;return(0,en.jsxs)(M,{children:[(0,en.jsx)(Q,{children:e.name.charAt(0).toUpperCase()+e.name.slice(1)}),(0,en.jsx)(S,{src:e.sprites.other.dream_world.front_default||e.sprites.front_default||nn,alt:e.name,width:"150px"}),(0,en.jsxs)(W,{children:[e.types.map((function(n){return(0,en.jsxs)(X,{props:n.type.name,children:[n.type.name," "]},n.slot)}))," "]}),(0,en.jsx)(Y,{children:e.stats.map((function(n){return(0,en.jsxs)($,{children:[(0,en.jsxs)("span",{children:[n.stat.name,":"]})," ",(0,en.jsx)("span",{children:n.base_stat})]},n.stat.name)}))})]})},tn=N.ZP.div(h||(h=(0,L.Z)(["\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n"]))),rn=N.ZP.button(m||(m=(0,L.Z)(["\n    font-size: 24px;\n    background-color: ",";\n    border-width: 2px;\n    border-style: solid;\n    color: ",";\n    border-color: ",";\n    text-decoration:  ",";\n    border-radius: 8px;\n    padding: 4px 12px;\n    transform: ",";\n    cursor: pointer;\n    transition-property: box-shadow;\n    transition-duration: 0.4s;\n    transition-timing-function: ease;\n\n    :hover,\n    :focus{\n        box-shadow: 0px 7px 7px 0px rgba(0, 123, 255, 0.3);\n    }\n"])),(function(n){return K[n.color]}),(function(n){return n.isActive?"black":"#fefff1"}),(function(n){return n.isActive?"black":"#fefff1"}),(function(n){return n.isActive?"underline":"none"}),(function(n){return n.isActive?"scale(1.1)":"scale(1)"})),an=o(5440),sn=function(){var n=(0,k.I0)(),e=(0,k.v9)(_),o=(0,k.v9)(T);return(0,Z.useEffect)((function(){n((0,I.yu)())}),[n]),(0,en.jsx)(tn,{children:e.map((function(e){return(0,en.jsx)(rn,{type:"button",color:e,isActive:o.includes(e),onClick:function(){return function(e){n((0,an.oO)(1)),n((0,an.DT)(e))}(e)},children:e},e)}))})},pn=N.ZP.input(b||(b=(0,L.Z)(["\n    margin: 0 auto;\n    background-color: transparent;\n    border: none;\n    font-size: 18px;\n    padding: 7px 7px; \n    border-bottom: 2px solid #ccc;\n    width: 300px;\n    outline: none;\n    transition: box-shadow 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;\n\n\n    &:focus,\n    :hover {\n        box-shadow: 0px 7px 7px 0px rgba(0, 123, 255, 0.3);\n        border-bottom-color: green;\n    }\n"]))),cn=function(){var n=(0,k.v9)(D),e=(0,k.I0)();return(0,en.jsx)(en.Fragment,{children:(0,en.jsx)(pn,{value:n,onChange:function(n){e((0,an.nh)(n.target.value.toLowerCase()))},type:"text",name:"filter",placeholder:"Find Pokemon by name"})})},dn=o(2242),ln=N.ZP.div(w||(w=(0,L.Z)(["\n    display: flex;\n   margin-bottom: 30px;\n    justify-content: center;\n    gap: 30px;\n"]))),un=(0,N.ZP)(dn.ZP)(v||(v=(0,L.Z)(["\n    width: 90px;\n    transition: border-color 0.2s ease-in-out;\n \n    height: 36px;\n\n    &:hover {\n        /* box-shadow: 0px 7px 7px 0px rgba(0, 123, 255, 0.3); */\n        border-color: blue;\n    }\n"]))),xn=(o(7632),o(3440)),fn=[{value:10,label:10},{value:20,label:20},{value:50,label:50}],gn=function(){var n=(0,k.v9)(C),e=(0,k.v9)(A),o=(0,k.v9)(B),t=(0,k.I0)();return(0,en.jsxs)(ln,{children:[(0,en.jsx)(un,{defaultValue:e,onChange:function(n){t((0,an.nk)(n.value))},options:fn,placeholder:e,value:e}),(0,en.jsx)(xn.R,{page:n,between:3,total:o,limit:e,changePage:function(n){t((0,an.oO)(n))},ellipsis:2})]})},hn=function(){var n,e,o=(0,k.v9)(y),t=(0,k.v9)(P),r=(0,k.v9)(C),i=(0,k.v9)(A),a=(0,k.v9)(F),s=(0,k.v9)(E),p=(0,k.v9)(z),c=(0,k.v9)(D),d=(0,k.v9)(T),l=(0,k.I0)(),u=(0,j.TH)();return(0,Z.useEffect)((function(){0!==d.length?l((0,I.Z1)({page:r,perPage:i,type:d[0]})):l((0,I.Ci)({page:r,perPage:i}))}),[l,r,i,d]),(0,Z.useEffect)((function(){l((0,I.o)(t))}),[l,t]),(0,Z.useEffect)((function(){if(0!==c.length){var n=setTimeout((function(){l((0,I.jE)(c)),console.log("\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0437\u0430\u043f\u0438\u0442:")}),500);return function(){clearTimeout(n)}}l((0,I.o)(t))}),[l,c,t]),(0,en.jsxs)(q,{children:[a&&(0,en.jsx)(J.a,{}),(0,en.jsxs)(R,{children:[(0,en.jsxs)(U,{to:null!==(n=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:[(0,en.jsx)(V.Ao2,{style:{cursor:"pointer",padding:"2px",width:"30px",height:"25px"}}),(0,en.jsx)("span",{children:"Go Back"})]}),(0,en.jsx)(cn,{})]}),(0,en.jsx)(sn,{}),s&&(0,en.jsx)(J.a,{}),!s&&0===o.length||!o[0]?(0,en.jsx)(G,{children:"Nothing was found for your request"}):(0,en.jsx)(H,{children:o.map((function(n){return(0,en.jsx)(on,{poke:n},n.id)}))}),!s&&0!==o.length&&!p&&(0,en.jsx)(gn,{})]})};function mn(){return(0,en.jsx)("div",{children:(0,en.jsx)(hn,{})})}}}]);
//# sourceMappingURL=116.b1488caf.chunk.js.map