(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){},55:function(e,t,a){e.exports=a(79)},60:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(16),c=a.n(r),o=(a(60),a(8)),s=a(9),i=a(11),u=a(10),m=a(12),d=(a(28),a(29),a(24),a(30),a(31),a(17)),f=function(){return l.a.createElement("div",{className:"sidebar"},l.a.createElement(d.b,{to:"/",className:"nav-item"},"STAN AUT"),l.a.createElement(d.b,{to:"/wydane",className:"nav-item"},"WYDANE AUTA"),l.a.createElement(d.b,{to:"/generuj",className:"nav-item"},"GENERUJ "),l.a.createElement(d.b,{className:"nav-item "},l.a.createElement("div",{className:"circleAdd"},l.a.createElement("i",{class:"fa fa-plus","aria-hidden":"true"}))))},h=a(23),E=a(26),g=a(6),p=a.n(g),b=function(e){return l.a.createElement(l.a.Fragment,null,null===e.data?"WOLNY":function(){var t=new Date,a=new Date(1e3*e.data);return p()(t,"m")===p()(a,"m")?p()(t,"d")===p()(a,"d")?"dzisiaj "+p()(a,"HH:MM"):parseInt(p()(t,"d"))+1===parseInt(p()(a,"d"))?"jutro "+p()(a,"HH:MM"):p()(a,"dd/mm/yy HH:MM"):p()(a,"dd/mm/yy HH:MM")}())},y=[{rej:"WD 99999",model:"Austin Maestro",segment:"C+",czysty:!1,kto:null,kiedy:null,wraca:null},{rej:"DW 4234LW",model:"Maruti 800",segment:"B",czysty:!1,kto:"jan kowalski",kiedy:1554341400,wraca:1564267600},{rej:"WD 324234",model:"Kia Besta",segment:"D+",czysty:!0,kto:"janusz nosacz",kiedy:1556701200,wraca:null},{rej:"WI ZZ2123",model:"Opel Corsa",segment:"B",czysty:!1,kto:"marek mostowiak",kiedy:1554323640,wraca:null},{rej:"WI ZZ2123",model:"Suzuki Grand Vitara",segment:"B",czysty:!1,kto:"patryk szober",kiedy:1554267600,wraca:1564267600}],v=new Date,w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).Columns=[{Header:function(){return p()(v,"yyyy-mm-dd")},headerClassName:"",columns:[{Header:"REJESTRACJA",accessor:"rej",filterable:!0},{Header:"MODEL",accessor:"model",filterable:!0},{Header:"SEGMENT",accessor:"segment",width:100,filterable:!0},{Header:"CZYSTY",filterable:!1,accessor:"czysty",Cell:function(e){return l.a.createElement("div",{style:{color:!0===e.value?null:"red",fontWeight:!0===e.value?null:"bold"}}," ",e.value?"CZYSTY":"BRUDNY")}},{Header:"KTO BIERZE",accessor:"kto",resizable:!1,filterable:!0},{Header:"KIEDY",accessor:"kiedy",filterable:!0,Cell:function(e){return l.a.createElement("div",{style:{color:null!==e.value?null:"green",fontWeight:null!==e.value?null:"bold"}}," ",l.a.createElement(b,{data:e.value}))}},{Header:"AKCJA",accessor:"akcja",sortable:!1,filterable:!1,Cell:function(e){return l.a.createElement("div",null,l.a.createElement("i",{"data-toggle":"modal",onClick:function(){return a.changeState(e.row)},className:"fa fa-trash","aria-hidden":"true"}),l.a.createElement(d.b,{to:"/car/".concat(e.row.rej)},"   ",l.a.createElement("i",{className:"fa fa-pencil","aria-hidden":"true"})),l.a.createElement("i",{className:"fa fa-hourglass-end","aria-hidden":"true"}))}}]}],a.state={startDate:new Date,model:null,rej:null,segment:null,czysty:null,kto:null,kiedy:null},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleValue",value:function(e){this.setState({model:e.target.value})}},{key:"handleChange",value:function(e){this.setState({startDate:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement(E.a,{style:{textAlign:"center"},filterable:!0,defaultPageSize:10,className:"-striped",columns:this.Columns,data:y,showPagination:!1}))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a.tab=[1,2,3,0,5,6,666,8,9],a.tabs=a.tab.reduce(function(e,t){return e+t}),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.tabs,l.a.createElement("code",null,"NOT FOUND",this.tabs))}}]),t}(n.Component),j=(n.Component,new Date),O=[{Header:function(){return p()(j,"yyyy-mm-dd")},headerClassName:"",columns:[{Header:"REJESTRACJA",accessor:"rej",filterable:!0},{Header:"MODEL",accessor:"model",filterable:!0},{Header:"SEGMENT",accessor:"segment",width:100,filterable:!0},{Header:"Wraca",accessor:"wraca",filterable:!0,Cell:function(e){return l.a.createElement("div",{style:{color:null!==e.value?null:"green",fontWeight:null!==e.value?null:"bold"}}," ",l.a.createElement(b,{data:e.value}))}},{Header:"AKCJA",accessor:"akcja",sortable:!1,width:150,filterable:!1,Cell:function(e){return l.a.createElement("button",{onClick:function(){console.log(e.row)},className:"btn btn-primary"},"TEST")}}]}],C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onlyrows=y.filter(function(e){if(null!==e.wraca)return!0}),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement(E.a,{style:{textAlign:"center"},className:"-highlight",filterable:!0,defaultPageSize:15,showPagination:!1,getProps:function(e,t,a){if(!t||!t.row)return{};console.log(t)},getTrProps:function(e,t,a){if(t&&t.row){var n=Number(p()(t.row._original.wraca,"HH")),l=Number(p()(j,"HH"));return Number(p()(t.row._original.wraca,"mm"))===Number(p()(j,"mm"))?{style:{background:n<l?"rgba(241, 159, 34,0.3)":""}}:{}}return{}},columns:O,data:this.onlyrows}))}}]),t}(n.Component),N=a(45),D=a(33),H=a(49),S=a.n(H),A=(a(69),a(54)),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={row:null,id:a.props.match.params.id,startDate:new Date,data:[{model:null,rej:null,segment:null,czysty:null,kto:null,kiedy:null}],options:[]},a.handleValue=function(e){console.log(e.target.id),a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handleChange=function(e){a.setState({startDate:e})},a.handleSubmit=function(){var e=new Date(a.state.startDate.valueOf());alert(a.state.row.model+" segment:"+a.state.row.segment+"<br/> OD: "+e.toISOString())},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=y.filter(function(t){if(e.state.id===t.rej)return!0}),a=S.a.all().filter(function(e,t){if(t%100==0)return e});console.log(a);var n=new Array;a.forEach(function(e){n.push({value:e,label:e})});console.log(n),this.setState({row:t[0],options:n})}},{key:"render",value:function(){var e=this.state,t=e.row,a=(e.id,e.startDate,e.data),n=e.options;return l.a.createElement(l.a.Fragment,null,null===t?"Loading ....":l.a.createElement("div",{class:"form"},l.a.createElement("h5",null,l.a.createElement("code",null,t.rej)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{class:"form-group"},a.model,l.a.createElement("label",{for:"model"},"MODEL"),l.a.createElement(A.a,{isDisabled:!0,options:n,isSearchable:!0,defaultInputValue:t.model}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"segment"},"segment"),l.a.createElement("input",{type:"text",disabled:!0,class:"form-control",id:"segment",value:t.segment,onChange:this.handleValue})))),l.a.createElement("div",{class:"form-group text-center"},l.a.createElement("h4",{style:{color:!1!==t.czysty?null:"red",fontWeight:!1!==t.czysty?null:"bold"}},t.czysty?"CZYSTY":"BRUDNY!!")),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"kto"},t.kiedy?"REZERWACJA DLA":"WOLNY"),l.a.createElement("input",{type:"text",class:"form-control",id:"kto",onChange:this.handleValue,placeholder:"Wpisz nazwisko",value:t.kiedy?t.kto:t.data})),l.a.createElement("div",{class:"form-group"},"OD KIEDY:",l.a.createElement("div",{class:"input-group date",id:"picker","data-target-input":"nearest"},l.a.createElement(D.a,{className:"form-control",selected:this.state.startDate,onChange:this.handleChange,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:30,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time"}),l.a.createElement("div",{class:"input-group-append","data-target":"#datetimepicker1","data-toggle":"datetimepicker"},l.a.createElement("div",{class:"input-group-text"},l.a.createElement("i",{class:"fa fa-calendar"}))))),l.a.createElement("div",{class:"form-group"},"DO:",l.a.createElement("div",{class:"input-group date",id:"picker","data-target-input":"nearest"},l.a.createElement(D.a,{className:"form-control",selected:this.state.startDate,onChange:this.handleChange,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:30,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time"}),l.a.createElement("div",{class:"input-group-append","data-target":"#datetimepicker1","data-toggle":"datetimepicker"},l.a.createElement("div",{class:"input-group-text"},l.a.createElement("i",{class:"fa fa-calendar"}))))),l.a.createElement("button",{type:"submit",onClick:this.handleSubmit,class:"btn btn-primary"},"Submit")," "))}}]),t}(n.Component),z=a(19),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(d.a,null,l.a.createElement(f,null),l.a.createElement(z.c,null,l.a.createElement(z.a,{path:"/",exact:!0,component:w}),l.a.createElement(z.a,{path:"/wydane",exact:!0,component:C}),l.a.createElement(z.a,{path:"/generuj",exact:!0,component:function(){return l.a.createElement("div",null,"xD")}}),l.a.createElement(z.a,{path:"/car/:id",exact:!0,component:M}),l.a.createElement(z.a,{component:k}))))}}]),t}(n.Component);c.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.1b967d1e.chunk.js.map