<template>
<div class="sections">
<div class="logo container center">
    <img id="logos" src="https://res.cloudinary.com/aolfiligre/image/upload/v1539616825/polll.png" alt="logo">
    <h3>Atlas</h3>
</div>
<div class="cards card ">
    <div class="card-content container center">
        <h2 class="grey-darken-4 center">LOG IN</h2>
        <div class="welcome">
         <p class="center grey-darken-4-text"> Welcome! We are happy to have you back </p>
         <p class="center grey-darken-4-text">Have a delightful experience!</p>
         </div>
    <label class="email">
    <input type="text" required="required"/>
    <span>Email Address</span>
    <i class="material-icons">mail</i>
  </label>
  <label class="password">
    <input type="password" required="required"/>
    <span>Password</span>
    <i class="material-icons">lock</i>
    <i class="visible material-icons">visibility</i>
  </label>
    </div>
    <a class="green btn login">Log in</a>
    
</div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data (){
        return{

        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Abel|Bai+Jamjuree|Dosis');;
.sections{
    
    width: 100%;
    background-size: cover;
    height: 100%;
    background: rgba(3, 17, 49, 0.9);
    border: 1px solid rgba(3, 17, 49, 0.9);
}
.logo{

width: 150px;
margin-top: 120px;
}
.logo h3{
    padding:0%;
    margin: 0%;
    color:white;
    font-size: 1.7rem;
    font-family: 'Abel', sans-serif;


}
#logos{
    width: 40px;
     
}
.cards{
    width:400px;
    height:380px;
    border-radius: 7px;
    margin: auto;
    margin-top: 15px;
}
.cards h2{
    padding:0%;
    margin: 0%;
    font-size: 1.3rem;
    font-family: 'Abel', sans-serif;
    font-weight: bold;
    padding-top: 15px;
}
.card-content{
 
    width:100%;
}
.welcome {
padding-top: 20px;
}
.input-field{
padding:0% !important;
margin:20px 0;
width: 90%;
}
.input-field input{
    margin-top: 60px;
}
label {
  position: relative;
}
label > input {
  position: relative;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 45px;
  width: 90%;
  font-size: 16px;
  margin: 0 0 30px 0;
  padding-left: 895px;
  box-shadow: none;
  box-sizing: content-box;
  transition: all .4s;
}
label > input:valid + span {
  transform: translateY(-25px) scale(0.8);
  transform-origin: 0;
}
label > input:valid {
  border-bottom: 1px solid #3F51B5;
  box-shadow: 0 1px 0 0 #3F51B5;
}
label > span {
  color: #9e9e9e;
  position: absolute;
  top: 0;
  left: 45px;
  font-size: 16px;
  cursor: text;
  transition: .2s ease-out;
  
}
label > i {
  color: rgba(3, 17, 49, 0.9);
  position: absolute;
  top: 3px;
  left: 10px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}
label > input:focus + span {
  transform: translateY(-25px) scale(0.8);
  transform-origin: 0;
  opacity: 0;
  /* color: rgba(3, 17, 49, 0.9); */
}
label > input:focus {
  border-bottom: 1px solid rgba(3, 17, 49, 0.9)5;
  box-shadow: 0 1px 0 0 rgba(3, 17, 49, 0.9);
}
.email{
    top: 20px
    
}
.email span{
    width:100px;
}
.password{
    
    top:40px;
}
.email input{
    width: 300px !important;
    top:0px;
    padding-left:44px !important;
}
.password input{
    width: 300px !important;
    top:0px;
    padding-left:44px !important;
}
input[type=text]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
}

.visible{
    left: 320px !important;
}
.btn{
 
    margin-top: 40px;
    margin-left: 125px;
    position:relative;
    width:140px;
    
   
}
</style>
