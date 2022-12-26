/* document.querySelector('#b_1').addEventListener('click', () =>{
    let e = document.querySelector('#circ_r').value;
    if (e.target.value <=0) {
        alert('Фигуры не существует!');
    }
     else {
        document.querySelector('#circ_d input').value = '';
        document.querySelector('#circ_p').innerHTML = (2*e.target.value *Math.PI).toFixed(5); //периметр
        document.querySelector('#circ_s output').innerHTML = (e.target.value**2 * Math.PI).toFixed(5); //площадь
     }
 })*/
//круг
document.querySelector('#circ_r').oninput = (e) => {
    if (e.target.value <=0) {
        alert('Фигуры не существует!');
    }
     else {
        document.querySelector('#circ_d').value ='';
        document.querySelector('#circ_p').innerHTML = (2*e.target.value *Math.PI).toFixed(5); //периметр
        document.querySelector('#circ_s').innerHTML = (e.target.value**2 * Math.PI).toFixed(5); //площадь
     }}

     document.querySelector('#circ_d').oninput = (e) => {
        if (e.target.value <=0) {
            alert('Фигуры не существует!');
        }
         else {
            document.querySelector('#circ_r').value ='';
            document.querySelector('#circ_p').innerHTML = (e.target.value *Math.PI).toFixed(5); //периметр
            document.querySelector('#circ_s').innerHTML = (0.25*e.target.value**2 * Math.PI).toFixed(5); //площадь
         }}
//квадрат
document.querySelector('#kv_a').oninput= (m) => {
    
    if (m.target.value <=0) {
        alert('Фигуры не существует!');
    }
     else {
        document.querySelector('#kv_d').value = '';
        document.querySelector('#kv_p').innerHTML = (4*m.target.value).toFixed(5); //периметр
        document.querySelector('#kv_s').innerHTML = (m.target.value**2).toFixed(5); //площадь
     }
}

document.querySelector('#kv_d').oninput= (e) => {
    
    if (e.target.value <=0) {
        alert('Фигуры не существует!');
    }
     else {
        document.querySelector('#kv_a').value = '';
        document.querySelector('#kv_p').innerHTML ='';
        document.querySelector('#kv_s').innerHTML = (e.target.value**2 /2).toFixed(5); //площадь
     }
}

//треугольник

let a = document.querySelector('#tr_a');
let a2 = document.querySelector('#tr_a2');
let b = document.querySelector('#tr_b');
let b2 = document.querySelector('#tr_b2');
let c = document.querySelector('#tr_c');
let h = document.querySelector('#tr_h');
let alpha = document.querySelector('#tr_alpha');
    
a.onchange=perimetr_pl;b.onchange=perimetr_pl;c.onchange=perimetr_pl;h.onchange=perimetr_pl;alpha.onchange=plosh;
a2.onchange=plosh; b2.onchange=plosh;

function perimetr_pl(){
    
    if(a.value !='' && b.value !='' && c.value !='' && h.value !='') {
        
        if (a.value <=0 || b.value <=0 || c.value <=0 || h.value <=0) {
            
            alert('Фигуры не существует!');
        }else {
        
            document.querySelector('#tr_p').innerHTML = (+a.value+ +b.value+ +c.value).toFixed(5);
            let p = (+a.value + +b.value + +c.value)/2;
            document.querySelector('#tr_s').innerHTML = (Math.sqrt(p*(p-a.value)*(p-b.value)*p-c.value)).toFixed(5); //площадь
        }
}}

function plosh() {
    if(a2.value !='' && b2.value !='' && alpha.value !='') {
        
        if (a2.value <=0 || b2.value <=0 ||  alpha.value <=0) {
            
            alert('Фигуры не существует!');
        }else {
        
            document.querySelector('#tr_s2').innerHTML = (0.5*a2.value*b2.value*Math.sin(alpha.value*Math.PI/180)).toFixed(5); //площадь
        }
}}


//трапеция
let a3 = document.querySelector('#trap_a');
let a4 = document.querySelector('#trap_a4');
let b3 = document.querySelector('#trap_b');
let c3 = document.querySelector('#trap_c');
let c4 = document.querySelector('#trap_c4');
let d3 = document.querySelector('#trap_d');
let h3 = document.querySelector('#trap_h');
let h4 = document.querySelector('#trap_h2');
let m = document.querySelector('#trap_m');

a3.onchange= perimetr_trap; b3.onchange= perimetr_trap; c3.onchange= perimetr_trap; d3.onchange= perimetr_trap;

function perimetr_trap(){
    
    if(a3.value !='' && b3.value !='' && c3.value !='' && d3.value !='') {
        
        if (a3.value <=0 || b3.value <=0 || c3.value <=0 || d3.value <=0) {
            
            alert('Фигуры не существует!');
        }else {
        
            document.querySelector('#trap_p').innerHTML = (+a3.value+ +b3.value+ +c3.value + +d3.value).toFixed(5);
            
        }
}}

a4.onchange= plosh_trap; c4.onchange= plosh_trap; h3.onchange= plosh_trap; 
function plosh_trap(){
    
    if(a4.value !='' && c4.value !='' && h3.value !='' ) {//&& m.value !=''
        
        if (a4.value <=0 || c4.value <=0 || h3.value <=0 ) {//|| m.value <=0
            
            alert('Фигуры не существует!');
        }else {
        
            document.querySelector('#trap_s').innerHTML = (0.5*(+a4.value+ +c4.value)*h3.value).toFixed(5);
           
            
        }
}}

m.onchange= plosh_trap2; h4.onchange=plosh_trap2;
function plosh_trap2(){
    
    if( m.value !='' && h4.value !='' ) {
        
        if ( m.value <=0 || h4.value <=0 ) {
            
            alert('Фигуры не существует!');
        }else {
        
            
         document.querySelector('#trap_s2').innerHTML = (m.value*h4.value).toFixed(5);
            
        }
}}