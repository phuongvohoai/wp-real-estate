!function(t){var i=Upfront.Settings&&Upfront.Settings.l10n?Upfront.Settings.l10n.global.views:Upfront.mainData.l10n.global.views;define(["scripts/upfront/upfront-views-editor/breakpoint/storage","scripts/upfront/upfront-views-editor/fields"],function(t,e){return Backbone.View.extend({className:"breakpoint-width-input",initialize:function(i){this.options=i||{},this.collection=t.get_breakpoints(),this.listenTo(this.collection,"change:active",this.render)},render:function(){this.$el.html(""),this.active_breakpoint=this.collection.get_active();var t=_.debounce(this.propagate_change,1e3);return this.active_breakpoint.get("fixed")?this:(this.input=new e.Number({className:"inline-number plaintext-settings",min:1,label:i.viewport_width,suffix:i.px,default_value:this.active_breakpoint.get("width")}),this.input.render(),this.$el.html(this.input.el),this.listenTo(this.input,"changed",t),this)},propagate_change:function(){this.active_breakpoint.set({width:this.input.get_value()})}})})}(jQuery);