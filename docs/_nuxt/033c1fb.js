(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{222:function(e,t,n){var content=n(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(99).default)("0562cdd0",content,!0,{sourceMap:!1})},223:function(e,t,n){"use strict";n(222)},224:function(e,t,n){var o=n(98)(!1);o.push([e.i,'.wrapper[data-v-0cf6adf1]{display:block;position:relative;padding-left:35px;margin-bottom:6px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:16px}.wrapper input[data-v-0cf6adf1]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark[data-v-0cf6adf1]{position:absolute;top:0;left:0;height:21px;width:21px;border-radius:50%;background-color:#eee;border:1px solid #ccc}.wrapper:hover input~.checkmark[data-v-0cf6adf1]{background-color:#ccc}.wrapper input:checked~.checkmark[data-v-0cf6adf1]{background-color:#1cd4a7}.checkmark[data-v-0cf6adf1]:after{content:"";position:absolute;display:none}.wrapper input:checked~.checkmark[data-v-0cf6adf1]:after{display:block}.wrapper .checkmark[data-v-0cf6adf1]:after{top:5px;left:6px;width:8px;height:8px;border-radius:50%;background:#fff}',""]),e.exports=o},225:function(e,t,n){"use strict";n.r(t);var o={model:{prop:"modelValue",event:"change"},props:{label:{type:String,default:"",required:!0},modelValue:{default:"",type:String},value:{type:String,default:void 0}},computed:{isChecked:function(){return this.modelValue===this.value}}},r=(n(223),n(42)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"wrapper flex items-center"},[e._v("\n  "+e._s(e.label)+"\n  "),n("input",{staticClass:"checkbox",attrs:{type:"radio"},domProps:{checked:e.isChecked,value:e.value},on:{change:function(t){return e.$emit("change",t.target.value)}}}),e._v(" "),n("span",{staticClass:"checkmark"})])}),[],!1,null,"0cf6adf1",null);t.default=component.exports},226:function(e,t,n){var o=n(6),r=n(170).values;o({target:"Object",stat:!0},{values:function(e){return r(e)}})},227:function(e,t,n){"use strict";n.r(t);var o=n(20),r=(n(16),n(35),n(53),n(54),n(226),n(169),{name:"QuestionsPage",data:function(){return{testMcq:[{question:"Which of the following isn't a JSON type ? ",options:["String","Date","Array"],correctAnswer:"String"},{question:"Which is the file extension of JSON ?",options:["jsn","json","jn"],correctAnswer:"json"},{question:"Does whitespace matter in JSON ?",options:["No, it will be stripped out.","Yes, both inside and outside of strings","Yes, only within strings"],correctAnswer:"Yes, only within strings"},{question:"Who is the creator of JSON ?",options:["Sergey Brin","Douglas Crockford","Liam Crockford"],correctAnswer:"Douglas Crockford"}],indexToAnswer:{},totalCorrectAnswers:0,isQuestionsLoading:!1,showAnswerIncompleteError:!1,yetToBeAnsweredIndexs:[]}},computed:{totalQuestions:function(){return this.testMcq.length}},created:function(){var e=this;this.isQuestionsLoading=!0,this.testMcq.forEach((function(t,n){e.indexToAnswer[n]=void 0})),this.isQuestionsLoading=!1},methods:{handleSubmit:function(){var e=this;if(Object.values(this.indexToAnswer).includes(void 0))return this.showAnswerIncompleteError=!0,void this.indicateNotAnswered();this.showAnswerIncompleteError=!1,this.yetToBeAnsweredIndexs=[],this.testMcq.forEach((function(t,n){t.correctAnswer.toLowerCase()===e.indexToAnswer[n].toLowerCase()&&(e.totalCorrectAnswers+=1)})),this.$store.dispatch("updateResult",{totalCorrectAnswers:this.totalCorrectAnswers,totalQuestions:this.totalQuestions}),this.$router.push({path:"/result"})},indicateNotAnswered:function(){for(var e=0,t=Object.entries(this.indexToAnswer);e<t.length;e++){var n=Object(o.a)(t[e],2),r=n[0];void 0===n[1]&&this.yetToBeAnsweredIndexs.push(r)}}}}),c=n(42),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{directives:[{name:"show",rawName:"v-show",value:e.showAnswerIncompleteError,expression:"showAnswerIncompleteError"}],staticClass:"text-danger text-center"},[e._v("\n    Please answer all the questions\n  ")]),e._v(" "),e.isQuestionsLoading?n("p",[e._v("Loading...")]):n("form",{staticClass:"w-50 m-auto",on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._l(e.testMcq,(function(t,o){return n("section",{key:o},[n("p",{class:{"text-danger":e.yetToBeAnsweredIndexs.includes(o.toString())}},[e._v("\n        "+e._s(t.question)+"\n      ")]),e._v(" "),e._l(t.options,(function(t,r){return n("custom-radio",{key:r,staticClass:"w-25",attrs:{label:t,value:t},model:{value:e.indexToAnswer[o],callback:function(t){e.$set(e.indexToAnswer,o,t)},expression:"indexToAnswer[index]"}})}))],2)})),e._v(" "),n("button",{staticClass:"mt-5",attrs:{type:"submit"}},[e._v("Submit")])],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomRadio:n(225).default})}}]);