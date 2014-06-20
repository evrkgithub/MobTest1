/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.StandardListItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.m.StandardListItem",{metadata:{library:"sap.m",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"description":{type:"string",group:"Misc",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"iconInset":{type:"boolean",group:"Appearance",defaultValue:true},"iconDensityAware":{type:"boolean",group:"Misc",defaultValue:true},"activeIcon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"info":{type:"string",group:"Misc",defaultValue:null},"infoState":{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:sap.ui.core.ValueState.None},"adaptTitleSize":{type:"boolean",group:"Appearance",defaultValue:true}}}});jQuery.sap.require("sap.ui.core.EnabledPropagator");jQuery.sap.require("sap.ui.core.IconPool");
sap.m.StandardListItem.prototype.exit=function(){if(this._image){this._image.destroy()}sap.m.ListItemBase.prototype.exit.apply(this,arguments)};
sap.m.StandardListItem.prototype._getImage=function(i,I,s,b){var o=this._image;if(o){o.setSrc(s);if(o instanceof sap.m.Image)o.setDensityAware(b)}else{o=sap.ui.core.IconPool.createControlByURI({id:i,src:s,densityAware:b},sap.m.Image).setParent(this,null,true)}if(o instanceof sap.m.Image){o.addStyleClass(I,true)}else{o.addStyleClass(I+"Icon",true)}return this._image=o};
sap.m.StandardListItem.prototype._activeHandlingInheritor=function(){var i=sap.ui.getCore().byId(this.getId()+"-img");if(i instanceof sap.ui.core.Icon){i.$().toggleClass('sapMSLIIconActive',this._active);return}if(i&&this.getActiveIcon()){i.setSrc(this.getActiveIcon())}};
sap.m.StandardListItem.prototype._inactiveHandlingInheritor=function(){var i=sap.ui.getCore().byId(this.getId()+"-img");if(i instanceof sap.ui.core.Icon){i.$().toggleClass('sapMSLIIconActive',this._active);return}if(i){i.setSrc(this.getIcon())}};
