(()=>{window.onload=function(){new t};class t{constructor(){this.textJsonCsv=document.getElementById("textJsonCsv"),this.incluirNullable=document.getElementById("incluirNullable"),this.resultJsonCsv=document.getElementById("resultJsonCsv"),document.getElementById("converterCsv").onclick=()=>this.converterCsv(),document.getElementById("converterJson").onclick=()=>this.converterJson(),this.textJsonCsv.value="Id,UserName\n1,Sam Smith\n2,Fred Frankly\n1,Zachary Zupers"}converterCsv(){let t=null;try{t=JSON.parse(this.textJsonCsv.value.trim())}catch(t){return void this.alert()}let e="";if(void 0===t[0])Object.keys(t).forEach(((t,l,s)=>{e+=t+(l===s.length-1?"":";")})),e+="\n",Object.values(t).forEach(((t,l,s)=>{e+=t+(l===s.length-1?"":";")}));else{let l="";if(this.incluirNullable.checked){let e=[];t.map((t=>{Object.keys(t).forEach((t=>{-1===e.indexOf(t)&&e.push(t)}))})),l=e.join(";")}else Object.keys(t[0]).forEach(((t,e,s)=>{l+=t+(e===s.length-1?"":";")}));t.forEach((t=>{let s="";Object.values(t).map(((t,e,n)=>{this.incluirNullable.checked?s+=t+(e===n.length-1?"":";"):e<l.split(";").length&&(s+=t+(e===l.split(";").length-1?"":";"))})),e+="\n"+s})),e=l+e}this.resultJsonCsv.value=e}converterJson(){const t=this.textJsonCsv.value.trim().split(",");if(!t)return this.alert();for(var e=0;e<t.length;e++)if(!String(t[e]).trim().length)return this.alert();let l=[],s=[];l=this.textJsonCsv.value.trim().replaceAll(",",";").split(/[;]/);for(let t of l){if(/[\n|\n\r]/.test(t)){s.push(t.split(/[\n|\n\r]/)[0]);break}s.push(t)}let n=this.textJsonCsv.value.trim().split(/[;]/);n=n.join(",").split(/[\n|\n\r]/),n.splice(0,1);let r="[";if(n.length){n.map(((t,e,l)=>{r+="{";const i=t.split(",");s.map(((t,e)=>{r+=`"${t}": "${i[e]??""}"${e===s.length-1?"":","}`})),r+="}"+(e===n.length-1?"":",")})),r+="]";try{JSON.parse(r)}catch(t){return void this.alert()}}else r+="{",s.map(((t,e,l)=>{r+=`"${t}": "" ${e===l.length-1?"":","}`})),r+="}]";this.resultJsonCsv.value=r}alert(){}}})();