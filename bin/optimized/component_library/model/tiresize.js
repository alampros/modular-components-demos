define([],function(){var t=function(t){switch(console.log("TireSize constructor called:",t),this.width=null,this.ratio=null,this.diameter=null,typeof t){case"string":this.fromString(t);break;case"object":this.fromMap(t);break;case"array":this.fromArray(t);break;default:throw new Error("Unknown initialization parameter")}};return t._RE=/(^\d{2,3})[\/\ ]?(\d{2}).?(\d{2}$)/,t.prototype.fromString=function(i){var r=i.match(t._RE);console.log(r),this.width=r[1],this.ratio=r[2],this.diameter=r[3]},t.prototype.fromMap=function(t){this.width=t.width,this.ratio=t.ratio,this.diameter=t.diameter},t.prototype.fromArray=function(t){this.width=t[0],this.ratio=t[1],this.diameter=t[2]},t.prototype.toString=function(){return"stub"},t});