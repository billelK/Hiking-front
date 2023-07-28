<template>
  <div x-data="{navBarOpen: false}" class="h-full flex flex-col justify-between m-0 overflow-hidden" data-test="page-container">
    <nav class="fixed lg:h-[120px] h-[75px] w-full flex flax-none justify-between items-center px-4 py-[10px]">
      <a href="#">
        <img class="h-[60px] w-[60px] mt-[10px] lg:h-[80px] lg:w-[80px] lg:ml-10 ml-2 md:ml-5" src="../assets/images/group-one/website-logo.png" alt="website logo">
      </a> 

      <button class="lg:hidden" @click="navbarOpen= !navbarOpen" >
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-8 w-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path 
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
      </button>

        <ul class="fixed left-0 right-0 min-h-screen bg-[length:500px_500px] space-y-4 p-4 transform translate-x-full  
                  lg:relative lg:flex lg:min-h-0 lg:space-y-0 lg:space-x-6 md:space-x-0 lg:p-0 lg:translate-x-0 lg:items-center xl:gap-[45px] lg:gap-[10px]" 
                  :class="{'translate-x-full': !navbarOpen, 'translate-x-0': navbarOpen}"
             >
          <li>
            <a href="home" class="text-[#54514e] lg:text-[15px] xl:text-[17px] font-B tracking-widest">HOME</a>
          </li>
          <li>
            <a href="menu" class="text-[#54514e] lg:text-[15px] xl:text-[17px] font-B tracking-widest">MENU</a>
          </li>
          <li>
            <a href="our-story" class="text-[#54514e] lg:text-[15px] xl:text-[17px] font-B tracking-widest">OUR STORY</a>
          </li>
          <li>
            <a href="contact" class="text-[#54514e] lg:text-[15px] xl:text-[17px] font-B tracking-widest">CONTACT US</a>
          </li>
          <div class="relative flex items-center text-[#ffffff] focus-within:text-grey-600 ">
            <input class="bg-[#c3bfbc] rounded-[45px] xl:w-[183px] xl:h-[51px] w-[163px] h-[45px] opacity-24 form-input focus:outline-none px-5 py-3 lg:translate-x-0 lg:min-h-0" type="text" name="search" id="search-bar">
            <svg  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  class="w-9 h-9 xl:ml-32 ml-[120px] absolute fill-[#68635f]">
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
           </svg>
          </div>
        </ul>
    </nav>


    <div class="hero-section"> 
      <div class="w-[200] pt-[130px] items-center md:items-start 2xl:pt-[170px] xl:pt-[130px] lg:pt-[135px] md:pt-[110px] xl:w-[600px] lg:w-[480px] md:w-[400px] h-full  flex flex-col xl:justify-center 2xl:ml-[200px] xl:ml-[90px] lg:ml-[90px] md:ml-[10%] mb-[70px] md:mt-[120px] lg:mt-0"> 
          <h4 class="font-EB text-[50px] 2xl:text-[89px] xl:text-[70px] lg:text-[72px] md:text-[65px] text-[#edb47c] md:text-left text-center drop-shadow-lg cursor-default " >IT'S TIME <br> FOR HIKING</h4>  
          <h1 class="font-BI pt-5 text-[20px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[15px] text-[#54514e] tracking-[4.61px] text-center md:text-left ml-[5px] cursor-default">LOREMIPSUM DOLOR</h1> 
          <button class="font-EB text-[20px] w-[200px] h-[50px] mt-[30px] 2xl:text-[25px] xl:text-[25px] lg:text-[18px] md:text-[15px] text-[#7c6c64] bg-white xl:h-[47px] xl:w-[218px] lg:h-[37px] lg:w-[175px] md:h-[30px] md:w-[148px] opacity-24  rounded-[40px]
                      px-6 py-[2px] text-center lg:mt-[60px] md:mt-[30px] 
                     "
          >READ MORE</button> 
          <p class="lorem-hero hidden md:visible font-B md:font-I text-white md:text-[#565350] text-[20px] 2xl:text-[20px] xl:text-[16px] lg:text-[17px]  md:text-[13px] py-6 h-[71px] md:w-[300px] mt-[100px] md:mt-[0px] w-[340px] xl:w-[475px] lg:w-[420px] tracking-[0.96px] break-all cursor-default
                   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
    </div>

    <div class="section-two"> 
      <div class="flex flex-col justify-between items-center  mb-[200px]">
        <h2 class="font-EB font-normal text-[63px] text-[#f6a44e] w-[286px] mb-[30px] mt-[50px] lg:mt-[0px] cursor-default">  
            LET´S GO
          </h2>
          <p class="font-R font-normal md:text-[27px] text-[22px] text-[#837971] h-[55px] md:w-[694px] w-[300px] md:mb-[120px] mb-[100px] cursor-default 2xl:mb-[80px]">  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
          </p>

          <div>
            <div class="h-full">
 
              <section class="md:flex md:flex-row flex flex-col items-center justify-around flex-wrap 2xl:gap-[150px] lg:gap-[40px] gap-[30px] ">  <!-- md:gap-[20px] md:flex-col -->
                    
                  <article class="hover:">
                      <img class="xl:w-[339px] lg:w-[280px] md:w-[500px] w-[339px] md:h-[400px] lg:h-[300px] h-[250px]" src="../assets/images/group-two/picture-one.png" alt="card 1"> <!--  md:h-[170px] md:w-[220px] -->
                      <div class="bg-[#7f7770] xl:w-[339px] lg:w-[280px] md:w-[500px] w-[339px] md:h-[227px] h-[150px] opacity-[.97] flex flex-col  "> <!-- md:h-[180px] md:w-[220px] -->
                        <h1 class="font-B text-white md:text-[29px] text-[22px] w-full h-[30px] ml-2 mb-6 md:mt-10 mt-2 cursor-default">Lorem ipsum</h1>
                        <p class="font-R text-white text-[23px] w-full h-[52px] ml-2 opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
                      </div>
                  </article>


                  <article class="">
                      <img class="xl:w-[339px] lg:w-[280px] md:w-[500px] w-[339px] md:h-[400px] lg:h-[300px] h-[250px]" src="../assets/images/group-two/picture-two.png" alt="card 2"> <!--  md:h-[170px] md:w-[220px] -->
                      <div class="bg-[#7f7770] xl:w-[339px] lg:w-[280px] md:w-[500px] w-[339px] md:h-[227px] h-[150px] opacity-[.97] flex flex-col  "> <!-- md:h-[180px] md:w-[220px] -->
                        <h1 class="font-B text-white md:text-[29px] text-[22px] w-full h-[30px] ml-2 mb-6 md:mt-10 mt-2 cursor-default">Lorem ipsum</h1>
                        <p class="font-R text-white text-[23px] w-full h-[52px] ml-2 opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
                      </div>
                  </article>

                  <article class="">
                      <img class="xl:w-[339px] lg:w-[280px] md:w-[500px] w-[339px] md:h-[400px] lg:h-[300px] h-[250px]" src="../assets/images/group-two/picture-three.png" alt="card 3"> <!--  md:h-[170px] md:w-[220px] -->
                      <div class="bg-[#7f7770] xl:w-[339px] lg:w-[280px] md:w-[500px] w-[339px] md:h-[227px] h-[150px] opacity-[.97] flex flex-col  "> <!-- md:h-[180px] md:w-[220px] -->
                        <h1 class="font-B text-white md:text-[29px] text-[22px] w-full h-[30px] ml-2 mb-6 md:mt-10 mt-2 cursor-default">Lorem ipsum</h1>
                        <p class="font-R text-white text-[23px] w-full h-[52px] ml-2 opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
                      </div>
                  </article>

              </section>
            </div>
          </div>
          
          <button class="font-EB text-[23px] tracking-[7px] text-white bg-[#7f7770] h-[75px] w-[334px] rounded-[40px]
                      px-6 py-[2px] mt-[60px] text-center">SHOW MORE</button>

      </div>
    </div> 
    
    <div class="md:flex md:flex-row flex-col">
        <img class="md:w-[50%] 2xl:h-[1035px] lg:h-[785px] " src="../assets/images/group-three/left-pic.png" alt="group-three-hikers">
        <div class="flex flex-col xl:items-start items-center md:justify-center bg-[#7f7770] lg:h-[785px] md:w-[50%] 2xl:h-[1035px] ">
          <h2 class="font-R font-bold xl:text-[58px] lg:text-[40px] text-[30px]  text-white md:h-[115px] h-[100px] xl:w-[533px] lg:w-[400px] md:w-[300px] w-[295px] xl:ml-[60px] md:mt-[0px] mt-[15px] xl:mb-[90px] lg:mb-[45px] cursor-default 2xl:ml-[130px]">Discount up to 50% All Excursions</h2>
          <p class="font-R break-all xl:text-[29px] lg:text-[29px] md:text-[20px] text-white leading-[40px] h-[135px] xl:w-[505px] lg:w-[400px] w-[300px] xl:ml-[60px] xl:mb-[30px] lg:mb-[40px] md:mb-[25px] cursor-default 2xl:ml-[130px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</p>
          <button class="font-R font-normal lg:text-[29px] md:text-[24px] tracking-[7px] text-white bg-[#e2a355] lg:h-[75px] lg:w-[334px] md:h-[68px] h-[55px] md:w-[280px] w-[250px] mb-[40px] rounded-[40px]
                      px-6 py-[2px] mt-[60px] text-center xl:ml-[60px] 2xl:ml-[130px]">READ MORE</button>
        </div>
    </div>

    <div class="flex md:flex-row flex-col-reverse">
      <div class="flex flex-col xl:items-start items-center md:justify-center bg-[#deb37e] lg:h-[785px] md:w-[50%] 2xl:h-[1035px]">
          <h2 class="font-R font-bold xl:text-[58px] lg:text-[40px] md:text-[30px] text-[30px] text-white md:h-[115px] h-[100px] xl:w-[533px] lg:w-[400px] md:w-[300px] w-[295px] xl:ml-[60px] md:mt-[0px] mt-[15px] xl:mb-[90px] lg:mb-[45px] cursor-default 2xl:ml-[130px]">January’s Promo:
            Buy 1 Get 1 Free!</h2>
          <p class="font-R break-all  xl:text-[29px] lg:text-[29px] md:text-[20px] text-white leading-[40px] h-[135px] xl:w-[505px] lg:w-[400px] w-[300px] xl:ml-[60px] xl:mb-[30px] lg:mb-[40px] md:mb-[25px] cursor-default 2xl:ml-[130px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</p>
          <button class="font-R font-normal lg:text-[23px] md:text-[20px] tracking-[7px] text-white bg-[#e2a355] lg:h-[75px]  lg:w-[334px] md:h-[68px] h-[55px] md:w-[280px] w-[250px] mb-[40px] rounded-[40px]
                      px-6 py-[2px] mt-[60px] text-center xl:ml-[60px] 2xl:ml-[130px]">READ MORE</button>
        </div>
        <img class="md:w-[50%] 2xl:h-[1035px] lg:h-[785px]" src="../assets/images/group-three/right-pic.png" alt="group-three-hikers back view">
    </div>

    <div class="section-four bg-[url('/src/assets/images/group-four/Group-four-bg.png')] h-screen w-screen bg-no-repeat 2xl:bg-[length:1920px_800px]')]">
      <div class="flex flex-col justify-center items-center">
        <h2 class="font-R font-bold text-center md:text-[58px] text-[45px] text-white h-[115px] w-[100%] 2xl:mt-[35vh] xl:mt-[30vh] lg:mt-[30vh] md:mt-[32vh] mt-[30vh] md:mb-[24px] mb-[30px] cursor-default">Hiking in the mountains</h2>
        <p class="font-R break-all text-center md:text-[29px] text-[22px] text-white leading-[40px] h-[135px] lg:w-[895px] md:w-[600px] w-[300px] opacity-[20px] mt-[10px] cursor-default">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis </p>
      </div>
    </div>
    
    <div class="section-five">
      <div class="flex flex-col lg:items-end items-center md:py-[200px] py-[100px] md:ml-[100px] ">
        <h4 class="font-EBI font-bold md:text-[75px] text-[50px] text-[#edb47c] md:h-[115px] md:w-[533px]  lg:pl-[100px] drop-shadow-xl cursor-default">
          EXPLORE
        </h4>
        <h4 class="font-EBI font-bold md:text-[75px] text-[50px] text-[#54514e] md:h-[115px] md:w-[533px] drop-shadow-xl cursor-default">
          THE WORLD
        </h4>
      </div>
    </div>

    <div class="section-six">
      <div class="md:flex md:flex-row md:items-start flex flex-col items-center lg:justify-around md:gap-[40px] 2xl:mx-[100px] xl:mx-0 2xl:mt-[100px] mt-[60px] ml-[5%]">

        <div class="lg:w-[260px] md:w-[300px] w-[200px] h-[227px] opacity-[.97] flex flex-col">
            <h1 class="font-B text-[#edb47c] lg:text-[33px] text-[28px] w-full h-[30px] mb-8 cursor-default">Lorem ipsum</h1>
            <p class="font-R text-[#2d3d42] xl:text-[19px] lg:text-[16px] text-[14px] 2xl:w-full xl:w-[300px] lg:w-[230px] w-[200px] h-[52px] opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consecte
                                                                                              sectetur adipisicing elit, tation omne 
                                                                                              ullamco laboris nisi ut aliqolore.</p>
       </div>
       <div class="lg:w-[260px] md:w-[300px] w-[200px] h-[227px] opacity-[.97] flex flex-col">
            <h1 class="font-B text-[#edb47c] lg:text-[33px] text-[28px] w-full h-[30px] mb-8 cursor-default">Lorem ipsum</h1>
            <p class="font-R text-[#2d3d42] xl:text-[19px] lg:text-[16px] text-[14px] 2xl:w-full xl:w-[300px] lg:w-[230px] w-[200px] h-[52px] opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consecte
                                                                                              sectetur adipisicing elit, tation omne 
                                                                                              ullamco laboris nisi ut aliqolore.</p>
      </div>
      <div class="lg:w-[260px] md:w-[300px] w-[200px] h-[227px] opacity-[.97] flex flex-col ">
            <h1 class="font-B text-[#edb47c]  lg:text-[33px] text-[28px] w-full h-[30px] mb-8 cursor-default">Lorem ipsum</h1>
            <p class="font-R text-[#2d3d42] xl:text-[19px] lg:text-[16px] text-[14px] 2xl:w-full  xl:w-[300px] lg:w-[230px] w-[200px] h-[52px] opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consecte
                                                                                              sectetur adipisicing elit, tation omne 
                                                                                              ullamco laboris nisi ut aliqolore.</p>
      </div>
      </div>

      <div class="flex flex-col items-center text-center mt-[100px] lg:mr-[60px] mb-[100px]">
        <p class="font-B text-[#3d3d3d] text-[100px] w-[43px] h-[25px] mb-[70px] cursor-default">“</p>
        <p class="font-SB text-[#3d3d3d] lg:text-[25px] text-[20px] lg:w-[792px] md:w-[650px] w-[350px] h-[85px] mb-[70px] break-all cursor-default">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
        <p class="font-B text-[#3d3d3d] text-[21px] w-[200px] h-[20px] mt-[20px]  cursor-default">Lorem Ipsum</p>
      </div>
    </div>

    <div class="bg-[url('/src/assets/images/group-seven/Group-seven-bg.png')] h-[900px] w-screen bg-no-repeat 2xl:bg-[length:1920px_800px]">
      <div class="flex flex-col items-center md:mt-[180px]  mt-[140px] text-center 2xl:mt-[190px]">
          <h4 class="font-B text-white md:text-[75px] text-[60px] w-[400px] h-[58px] md:mb-[90px] mb-[60px] cursor-default">
            Title Here
          </h4>
          <p class="font-R text-[#54524f] md:text-[30px] text-[24px] lg:w-[900px] md:w-[600px] w-[380px] h-[60px] lg:mb-[90px] mb-[120px] cursor-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
          </p>
          <div class="md:relative md:flex md:flex-row flex flex-col items-center justify-end">
            <input class="text-[#54524f] text-[25px] md:w-[659px] w-[370px] h-[63px] rounded-[55px] pl-10 md:mb-0 mb-[30px]" type="email" placeholder="Your Email">
            <button class="font-B text-white text-[25px] bg-[#54524f] w-[222px] h-[65px] rounded-[55px] md:absolute ml-30">SUBSCRIBE</button>
          </div>
      </div>
    </div>

    <div class="footer bg-[url('/src/assets/images/fouter/fouter-bg.png')] md:h-[900px] w-screen bg-no-repeat 2xl:bg-[length:1920px_900px]">
      <div class="flex xl:flex-row flex-col items-center justify-between md:mr-[60px] md:mt-[100px] mt-[300px] 2xl:justify-around">
          <div class="flex flex-col items-center xl:items-start mb-[45px] md:mt-[100px] xl:mt-[300px]  md:ml-[80px] 2xl:ml-[80px]">
            <p class="font-MR text-white md:text-[32px] text-[25px] mt-[px] mb-[25px] cursor-default ">Title Here</p>
            <p class="font-MR text-white md:text-[24px] text-[18px] md:w-[480px] w-[400px] h-[25px] md:mb-[150px] mb-[100px] md:pl-0 pl-[30px] cursor-default">Lorem ipsum dolor sit amet, consecte- <br>
                                                                                                    tur adipiscing elit. Aliquam at dignis- <br>
                                                                                                    sim nunc, id maximus ex. Etiam neclks <br>
                                                                                                    dignissim elit, at dignissim enim bor. </p>
            <div class="flex flex-row justify-between xl:w-[200px] md:w-[300px] w-[300px]">
                <img class="cursor-pointer" src="../assets/images/fouter/Instagram.png" alt="instagram">
                <img class="cursor-pointer" src="../assets/images/fouter/Facebook.png" alt="facebook">
                <img class="cursor-pointer" src="../assets/images/fouter/Twitter.png" alt="twitter">
                <img class="cursor-pointer" src="../assets/images/fouter/WhatsApp.png" alt="whats app">
            </div>
          </div>
            <div class="md:flex justify-between mb-[80px]">
              <div class="flex flex-col xl:mt-[300px] md:ml-[100px] md:items-start items-center md:pb-[35px] pb-[100px]">
                <p class="font-MR text-[32px] text-white h-[25px] w-[98px] mb-[40px] cursor-default">About</p>
                <p class="font-MR md:text-start text-center text-[24px] text-white h-[190px] w-[250px] leading-[3rem] cursor-default">History <br>
                  Our Team <br>
                  Brand Guidelines <br>
                  Terms & Condition <br>
                  Privacy Policy</p>
              </div>
              <div class="flex flex-col md:items-start items-center xl:mt-[300px] md:pb-0 pb-[100px]">
                <p class="font-MR text-[32px] text-white h-[25px] md:w-[98px] w-[140px] mb-[40px] cursor-default">Services</p>
                <p class="font-MR md:text-start text-center text-[24px] text-white h-[190px] w-[229px] leading-[3rem] cursor-default">How to Order <br>
                  Our Product <br>
                  Order Status <br>
                  Promo <br>
                  Payment Method</p>
              </div>
              <div class="flex flex-col md:items-start items-center xl:mt-[300px] md:pb-0 pb-[100px]">
                <p class="font-MR text-[32px] text-white h-[25px] w-[98px] mb-[40px] cursor-default">Other</p>
                <p class="font-MR md:text-start text-center text-[24px] text-white h-[190px] w-[140px] leading-[3rem] cursor-default">Contact Us <br>
                  Help <br>
                  Privacy
                  </p>
              </div>
            </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      navbarOpen: false
    }
  }
}
</script>

<style scoped>  

      .lorem-hero{
        text-transform: uppercase
      }
    .hero-section{
      background-image: url('../assets/images/group-one/Image.png');
      background-repeat: no-repeat;
      background-position: 100% ;
      /* background-position: center; */
      width: 100%;
      min-height:100vh ;

    }

    /* section five */


    .section-five{
        background-image: url('../assets/images/group-five/Image.png');
        background-repeat: no-repeat;
        background-position: 45%;
        width: 100%;
        min-height:100vh
       }

     @media only screen and (min-width: 768px){
      .section-five{
        background-image: url('../assets/images/group-five/Group-five-bg-1920px.png');
        background-repeat: no-repeat;
        background-size: 100vh 100%;
        background-position: 0 0;
        min-height: 0
       }
     }

    @media only screen and (min-width: 1024px){
      .section-five{
        background-image: url('../assets/images/group-five/Group-five-bg-1920px.png');
        background-repeat: no-repeat;
        background-size: 100% 100% ;
        background-position: 0 0;
        min-height: 0
      }
    }
    
    @media only screen and (min-width: 1280px){
      .section-five{
        background-image: url('../assets/images/group-five/Group-five-bg-1920px.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        min-height: 0
      }
    }

    @media only screen and (min-width: 1536px){
      .section-five{
        background-image: url('../assets/images/group-five/Group-five-bg-1920px.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        min-height: 0;
      }
    }


    /* hero section */


    @media only screen and (min-width: 768px) {
      .hero-section{
        background-image: url('../assets/images/group-one/Image.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
       }
     }

    @media only screen and (min-width: 1025px){
      .hero-section{
        background-image: url('../assets/images/group-one/Group-one-1440.png');
        background-repeat: no-repeat;
        background-size: 100% 100% ;
        background-position: 0 0;
      }
    }




    @media only screen and (min-width: 768px){
      .lorem-hero{
        text-transform: none;
        display: inline;
       }
     }

     
     /* section four */


     @media only screen and (max-width: 767px){
      .section-four{
        background-image: url('../assets/images/group-four/Design.png');
        background-repeat: no-repeat;
        background-position: 5%;
        width: 100%;
        min-height:100vh
       }
     }

     @media only screen and (min-width: 1024px){
      .section-four{
        background-image: url('../assets/images/group-four/Group-four-bg.png');
        background-repeat: no-repeat;
        background-size: 100% 85%;
       }
     }


     /* Footer */


     @media only screen and (max-width: 767px){
      .footer{
        background-image: url('../assets/images/fouter/fouter-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
       /*  width: 100%;
        min-height:100vh */
       }
     }


     /* section six */


     .section-six{
        background-image: url('../assets/images/group-six/Design.png');
        background-repeat: no-repeat;
        background-position: 50%;
        width: 100%;
        min-height:100vh
      }

     @media only screen and (min-width: 768px){
      .section-six{
        background-image: url('../assets/images/group-six/Group-six-bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        min-height: 0;
        min-height:0vh
       }
     }


     @media only screen and (min-width: 1024px){
      .section-six{
        background-image: url('../assets/images/group-six/Group-six-bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        min-height: 0;
        min-height:0vh
       }
     }

     @media only screen and (min-width: 1280px){
      .section-six{
        background-image: url('../assets/images/group-six/Group-six-bg.png');
        background-repeat: no-repeat;
        background-size: 100vw 100vh;
        background-position: bottom;
        min-height: 0;
        min-height:0vh
       }
     }



      /* section-two */ 



      .section-two {
        background-image: url('../assets/images/group-two/Design-section-two.png');
        background-repeat: no-repeat;
        background-position: 50%;
        width: 100%;
        min-height:100vh
      }

      @media only screen and (min-width: 768px){
      .section-two{
        background-image: url('../assets/images/group-two/Group-two-1440.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        min-height: 0;
        min-height:0vh
       }
     }

     @media only screen and (min-width: 1024px){
      .section-two{
        background-image: url('../assets/images/group-two/Group-two-1440.png');
        background-repeat: no-repeat;
        background-size: 100vw 100vh;
        background-position: bottom;
        background-position: 0 0;
       }
     }

     @media only screen and (min-width: 1536px){
      .section-two{
        background-image: url('../assets/images/group-two/Group-two-1440.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        min-height: 0;
        min-height:0vh
       }
     }

</style>
