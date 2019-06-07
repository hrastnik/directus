(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ad43937"],{"035b":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-many-to-many"},[!1===e.relationSetup?i("div",{staticClass:"notice"},[i("p",[i("v-icon",{attrs:{name:"warning"}}),e._v("\n      "+e._s(e.$t("interfaces-many-to-many-relation_not_setup"))+"\n    ")],1)]):e._e(),[e.items.length?i("div",{staticClass:"table"},[i("div",{staticClass:"header"},[i("div",{staticClass:"row"},e._l(e.columns,function(t){return i("button",{key:t.field,staticClass:"style-4",attrs:{type:"button"},on:{click:function(i){return e.changeSort(t.field)}}},[e._v("\n            "+e._s(t.name)+"\n            "),e.sort.field===t.field?i("v-icon",{attrs:{name:e.sort.asc?"arrow_downward":"arrow_upward",size:"16"}}):e._e()],1)}),0)]),i("div",{staticClass:"body"},e._l(e.items,function(t){return i("div",{key:t[e.junctionPrimaryKey],staticClass:"row",on:{click:function(i){e.editExisting=t}}},[e._l(e.columns,function(n){return i("div",{key:n.field,staticClass:"no-wrap"},[i("v-ext-display",{attrs:{"interface-type":(n.fieldInfo||{}).interface||null,name:n.field,collection:e.relatedCollection,type:n.fieldInfo.type,datatype:n.fieldInfo.datatype,options:n.fieldInfo.options,value:t[e.junctionRelatedKey][n.field],values:t[e.junctionRelatedKey]}})],1)}),i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("remove_related"),expression:"$t('remove_related')"}],staticClass:"remove-item",attrs:{type:"button"},on:{click:function(i){return i.stopPropagation(),e.removeRelated({junctionKey:t[e.junctionPrimaryKey],relatedKey:t[e.junctionRelatedKey][e.relatedKey],item:t})}}},[i("v-icon",{attrs:{name:"close"}})],1)],2)}),0)]):i("v-notice",[e._v(e._s(e.$t("no_items_selected")))]),i("div",{staticClass:"buttons"},[e.options.allow_create?i("v-button",{attrs:{type:"button",disabled:e.readonly,icon:"add"},on:{click:function(t){e.addNew=!0}}},[e._v("\n        "+e._s(e.$t("add_new"))+"\n      ")]):e._e(),e.options.allow_select?i("v-button",{attrs:{type:"button",disabled:e.readonly,icon:"playlist_add"},on:{click:function(t){e.selectExisting=!0}}},[e._v("\n        "+e._s(e.$t("select_existing"))+"\n      ")]):e._e()],1)],e.selectExisting?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("select_existing"),buttons:{save:{text:"Save",color:"accent",loading:e.selectionSaving}},"action-required":""},on:{close:e.dismissSelection,save:e.saveSelection}},[i("div",{staticClass:"search"},[i("v-input",{staticClass:"search-input",attrs:{type:"search",placeholder:e.$t("search")},on:{input:e.onSearchInput}})],1),i("v-items",{staticClass:"items",attrs:{collection:e.relatedCollection,filters:e.filters,"view-query":e.viewQuery,"view-type":e.viewType,"view-options":e.viewOptions,selection:e.selection},on:{options:e.setViewOptions,query:e.setViewQuery,select:function(t){e.selection=t}}})],1)],1):e._e(),e.editExisting?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("editing_item"),buttons:{save:{text:"Save",color:"accent",loading:e.selectionSaving}}},on:{close:function(t){e.editExisting=!1},save:e.saveEdits}},[i("div",{staticClass:"edit-modal-body"},[i("v-form",{attrs:{fields:e.relatedCollectionFields,collection:e.collection,values:e.editExisting[e.junctionRelatedKey]},on:{"stage-value":e.stageValue}})],1)])],1):e._e(),e.addNew?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("creating_item"),buttons:{save:{text:"Save",color:"accent",loading:e.selectionSaving}}},on:{close:function(t){e.addNew=null},save:e.addNewItem}},[i("div",{staticClass:"edit-modal-body"},[i("v-form",{attrs:{"new-item":"",fields:e.relatedCollectionFields,collection:e.collection,values:e.relatedDefaultsWithEdits},on:{"stage-value":e.stageValue}})],1)])],1):e._e()],2)},l=[],s=(i("ac6a"),i("bd86")),o=(i("6762"),i("2fdb"),i("75fc")),r=i("cebc"),a=(i("55dd"),i("28a5"),i("7514"),i("8db2")),c=i.n(a),u={name:"InterfaceManyToMany",mixins:[c.a],data:function(){return{sort:{field:null,asc:!0},selectExisting:!1,selectionSaving:!1,selection:[],editExisting:null,addNew:null,edits:{},viewOptionsOverride:{},viewTypeOverride:null,viewQueryOverride:{},filtersOverride:[]}},computed:{relationSetup:function(){return!!this.relation},relatedCollection:function(){return this.relation.junction.collection_one.collection},relatedCollectionFields:function(){return this.relation.junction.collection_one.fields},junctionCollectionFields:function(){return this.relation.collection_many.fields},relatedKey:function(){return _.find(this.relation.junction.collection_one.fields,{primary_key:!0}).field},junctionPrimaryKey:function(){return _.find(this.relation.collection_many.fields,{primary_key:!0}).field},junctionRelatedKey:function(){return this.relation.junction.field_many.field},visibleFields:function(){return!1===this.relationSetup?[]:this.options.fields?this.options.fields.split(",").map(function(e){return e.trim()}):[]},items:function(){var e=this;return!1===this.relationSetup?null:_.orderBy((this.value||[]).filter(function(e){return!e.$delete}).filter(function(t){return null!=t[e.junctionRelatedKey]}),function(t){return t[e.junctionRelatedKey][e.sort.field]},this.sort.asc?"asc":"desc")},columns:function(){var e=this;return!1===this.relationSetup?null:this.visibleFields.map(function(t){return{fieldInfo:e.relatedCollectionFields[t],field:t,name:e.$helpers.formatTitle(t)}})},relatedDefaultValues:function(){return!1===this.relationSetup?null:this.relatedCollectionFields?_.mapValues(this.relatedCollectionFields,function(e){return e.default_value}):null},relatedDefaultsWithEdits:function(){return!1===this.relationSetup?null:this.relatedDefaultValues?Object(r["a"])({},this.relatedDefaultValues,this.edits):null},filters:function(){return!1===this.relationSetup?null:[].concat(Object(o["a"])(this.options.preferences&&this.options.preferences.filters||[]),Object(o["a"])(this.filtersOverride))},viewOptions:function(){if(!1===this.relationSetup)return null;var e=this.options.preferences&&this.options.preferences.viewOptions||{};return Object(r["a"])({},e,this.viewOptionsOverride)},viewType:function(){return!1===this.relationSetup?null:this.viewTypeOverride?this.viewTypeOverride:this.options.preferences&&this.options.preferences.viewType||"tabular"},viewQuery:function(){if(!1===this.relationSetup)return null;var e=this.options.preferences&&this.options.preferences.viewQuery||{};return Object(r["a"])({},e,this.viewQueryOverride)}},watch:{value:function(){this.setSelection()},relation:function(){this.relationSetup&&(this.sort.field=this.visibleFields&&this.visibleFields[0],this.setSelection())}},created:function(){this.relationSetup&&(this.sort.field=this.visibleFields&&this.visibleFields[0],this.setSelection()),this.onSearchInput=_.debounce(this.onSearchInput,200)},methods:{setViewOptions:function(e){this.viewOptionsOverride=Object(r["a"])({},this.viewOptionsOverride,e)},setViewQuery:function(e){this.viewQueryOverride=Object(r["a"])({},this.viewQueryOverride,e)},setSelection:function(){var e=this;this.value&&(this.selection=this.value.filter(function(e){return!e.$delete}).filter(function(t){return null!=t[e.junctionRelatedKey]}).map(function(t){return t[e.junctionRelatedKey]}))},changeSort:function(e){this.sort.field!==e?(this.sort.asc=!0,this.sort.field=e):this.sort.asc=!this.sort.asc},saveSelection:function(){var e=this;this.selectionSaving=!0;var t=(this.value||[]).filter(function(e){return!e.$delete}).filter(function(t){return t[e.junctionRelatedKey]}).map(function(t){return t[e.junctionRelatedKey][e.relatedKey]}),i=this.selection.map(function(t){return t[e.relatedKey]}),n=(this.value||[]).map(function(t){var n,l=(t[e.junctionRelatedKey]||{})[e.relatedKey];if(!l)return t;if(!1===i.includes(l))return n={},Object(s["a"])(n,e.junctionPrimaryKey,t[e.junctionPrimaryKey]),Object(s["a"])(n,"$delete",!0),n;if(t.$delete&&i.includes(l)){var o=Object(r["a"])({},t);return delete o.$delete,o}return t}),l=i.filter(function(e){return!1===t.includes(e)});(l.length>0?this.$api.getItem(this.relatedCollection,l.join(",")):Promise.resolve()).then(function(e){return e?e.data:null}).then(function(t){t&&(Array.isArray(t)?t.forEach(function(t){return n.push(Object(s["a"])({},e.junctionRelatedKey,t))}):n.push(Object(s["a"])({},e.junctionRelatedKey,t))),e.$emit("input",n),e.selectExisting=!1,e.selectionSaving=!1}).catch(function(t){e.$events.emit("error",{notify:e.$t("something_went_wrong_body"),error:t}),e.selectionSaving=!1,e.selectExisting=!1})},dismissSelection:function(){this.setSelection(),this.selectExisting=!1},stageValue:function(e){var t=e.field,i=e.value;this.$set(this.edits,t,i)},saveEdits:function(){var e=this;this.$emit("input",Object(o["a"])((this.value||[]||[]).map(function(t){return t.id===e.editExisting[e.junctionPrimaryKey]?Object(r["a"])({},t,Object(s["a"])({},e.junctionRelatedKey,Object(r["a"])({},t[e.junctionRelatedKey],e.edits))):t}))),this.edits={},this.editExisting=!1},addNewItem:function(){this.$emit("input",[].concat(Object(o["a"])(this.value||[]),[Object(s["a"])({},this.junctionRelatedKey,this.edits)])),this.edits={},this.addNew=!1},removeRelated:function(e){var t=this,i=e.junctionKey,n=e.relatedKey,l=e.item;i?this.$emit("input",(this.value||[]).map(function(e){var n;return e[t.junctionPrimaryKey]===i?(n={},Object(s["a"])(n,t.junctionPrimaryKey,e[t.junctionPrimaryKey]),Object(s["a"])(n,"$delete",!0),n):e})):i||n?this.$emit("input",(this.value||[]).filter(function(e){return(e[t.junctionRelatedKey]||{})[t.relatedKey]!==n})):this.$emit("input",(this.value||[]).filter(function(e){return!1===_.isEqual(e,l)}))},onSearchInput:function(e){this.setViewQuery({q:e})}}},d=u,f=(i("d667"),i("2877")),v=Object(f["a"])(d,n,l,!1,null,"b6e1e610",null);t["default"]=v.exports},"2b91":function(e,t,i){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},d667:function(e,t,i){"use strict";var n=i("2b91"),l=i.n(n);l.a}}]);
//# sourceMappingURL=chunk-1ad43937.ac56cb3d.js.map