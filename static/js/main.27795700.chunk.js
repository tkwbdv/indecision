(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),r=n.n(i),s=n(1),l=n(2),c=n(5),u=n(3),d=n(6),m=function(e){var t=e.title,n=e.subtitle;return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"header__title"},t),n&&a.a.createElement("h2",{className:"header__subtitle"},n)))};m.defaultProps={title:"Indecision"};var p=m,h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={error:void 0},n.handleFormSubmit=function(e){e.preventDefault();var t=e.target.elements.option.value.trim(),o=n.props.onAddOption(t);n.setState(function(){return{error:o}}),o||(e.target.elements.option.value="")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,this.state.error&&a.a.createElement("p",{className:"add-option-error"},this.state.error),a.a.createElement("form",{className:"add-option",onSubmit:this.handleFormSubmit},this.state.error?a.a.createElement("input",{className:"add-option__input",type:"text",name:"option",style:{borderColor:"red"}}):a.a.createElement("input",{className:"add-option__input",type:"text",name:"option"}),a.a.createElement("button",{className:"button"},"Add option")))}}]),t}(a.a.Component),f=function(e){var t=e.hasOptions,n=e.onMakeDecision;return a.a.createElement("div",null,a.a.createElement("button",{className:"big-button",disabled:!t,onClick:n},"What should I do?"))},v=function(e){var t=e.option,n=e.onRemoveOption,o=e.count;return a.a.createElement("li",{className:"option"},a.a.createElement("p",{className:"option__text"},o,". ",t),a.a.createElement("button",{className:"button button--link",onClick:function(){return n(t)}},"remove"))},O=function(e){var t=e.hasOptions,n=e.options,o=e.onRemoveAll,i=e.onRemoveOption;return a.a.createElement("div",null,a.a.createElement("div",{className:"widget-header"},a.a.createElement("h3",{className:"widget-header__title"},"Your Options"),a.a.createElement("button",{className:"button button--link",disabled:!t,onClick:o},"Remove All")),!t&&a.a.createElement("p",{className:"widget__message"},"Please add an option to get started"),n.map(function(e,t){return a.a.createElement(v,{key:e,option:e,count:t+1,onRemoveOption:i})}))},E=n(4),b=n.n(E),N=function(e){var t=e.onCloseModal,n=e.selectedOption,o=e.showModal;return a.a.createElement(b.a,{isOpen:o,onRequestClose:t,contentLabel:"Selected Option",closeTimeoutMS:200,className:"modal"},a.a.createElement("h3",{className:"modal__title"},"Selected Option"),a.a.createElement("p",{className:"modal__body"},n),a.a.createElement("button",{className:"button",onClick:t},"Okay"))};b.a.setAppElement("#root");var g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={options:n.props.defaultOptions,selectedOption:void 0,showModal:!1},n.addOptionRef=a.a.createRef(),n.onAddOption=function(e){return e?n.state.options.indexOf(e)>=0?"This options already exists":void n.setState(function(){return{options:n.state.options.concat(e)}}):"Enter valid value to add item"},n.onRemoveAll=function(){n.setState(function(){return{options:[]}}),n.addOptionRef.current.setState(function(){return{error:void 0}})},n.onMakeDecision=function(){var e=Math.floor(Math.random()*n.state.options.length);n.setState(function(){return{selectedOption:n.state.options[e],showModal:!0}})},n.onRemoveOption=function(e){var t=n.state.options.filter(function(t){return t!==e});n.setState(function(){return{options:t}})},n.onCloseModal=function(){n.setState(function(){return{showModal:!1}})},n.componentDidMount=function(){try{var e=JSON.parse(localStorage.getItem("options"));null!==e&&n.setState(function(){return{options:e}})}catch(t){}},n.componentDidUpdate=function(e,t){t.options.length!==n.state.options.length&&localStorage.setItem("options",JSON.stringify(n.state.options))},n.componentWillUnmount=function(){console.log("willUnmount")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.options.length>0;return a.a.createElement("div",null,a.a.createElement(p,{subtitle:"Put your life in the hands of a computer"}),a.a.createElement("div",{className:"container"},a.a.createElement(f,{hasOptions:e,onMakeDecision:this.onMakeDecision}),a.a.createElement("div",{className:"widget"},a.a.createElement(O,{hasOptions:e,options:this.state.options,onRemoveAll:this.onRemoveAll,onRemoveOption:this.onRemoveOption}),a.a.createElement(h,{ref:this.addOptionRef,onAddOption:this.onAddOption}))),a.a.createElement(N,{onCloseModal:this.onCloseModal,selectedOption:this.state.selectedOption,showModal:this.state.showModal}))}}]),t}(a.a.Component);g.defaultProps={defaultOptions:[]};var w=g;n(29),n(30);r.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.27795700.chunk.js.map