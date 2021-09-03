bluedye.add({
  box:function(){
    return Box._E(_reshape([...arguments]));
  }
},true); //true : overwrite default `box`

let _reshape = function(a){
  if(a instanceof Array){
    let k =[];
    for(let i in a){
      k.push(..._reshape(a[i].slice()));
    }
    return k;
  }
  return [a];
};

let Box = bluedye.box.prototype ={
  _E : function(a){
    this._box=a.map(x=>bluedye(x));
    return this._U(); //update
  },
  _U : function(){
    this._raw=this._box.map(x=>x.hex());
    return this;
  },
  
}
