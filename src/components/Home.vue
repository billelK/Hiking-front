<template>
  <div x-data="{navBarOpen: false}" class="h-full flex flex-col justify-between m-0 overflow-hidden" data-test="page-container">
    <header class="fixed h-[150px] w-full flex flax-none justify-between items-center px-4 md:px-12">
      <a href="#">
        <img class="h-[100px] w-[100px] ml-10 " src="../assets/images/group-one/website-logo.png" alt="website logo">
      </a> <!-- md:h-[80px] md:w-[80px] -->

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
                  lg:relative lg:flex lg:min-h-0 lg:space-y-0 lg:space-x-6 lg:p-0 lg:translate-x-0 lg:items-center lg:gap-[45px]" 
                  :class="{'translate-x-full': !navbarOpen, 'translate-x-0': navbarOpen}"
             >
          <li>
            <a href="home" class="text-[#54514e] text-[17px] font-B tracking-widest">HOME</a>
          </li>
          <li>
            <a href="menu" class="text-[#54514e] text-[17px] font-B tracking-widest">MENU</a>
          </li>
          <li>
            <a href="our-story" class="text-[#54514e] text-[17px] font-B tracking-widest">OUR STORY</a>
          </li>
          <li>
            <a href="contact" class="text-[#54514e] text-[17px] font-B tracking-widest">CONTACT US</a>
          </li>
          <div class="relative flex items-center text-[#ffffff] focus-within:text-grey-600 ">
            <input class="bg-[#c3bfbc] rounded-[45px] w-[183px] h-[51px] opacity-24 form-input focus:outline-none px-5 py-3 lg:translate-x-0 lg:min-h-0" type="text" name="search" id="search-bar">
            <svg  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  class="w-9 h-9 ml-32 absolute fill-[#68635f]">
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
           </svg>
          </div>
        </ul>
    </header>


    <div class="bg-[url('/src/assets/images/group-one/Group-one-1440.png')]  w-screen bg-no-repeat  2xl:bg-[length:1920px_1077px]"> <!-- md:bg-[length:1000px_920px] -->
      <div class="w-[600px] h-screen ml-[90px] mt-[15px] flex flex-col justify-center 2xl:ml-[200px]"> <!-- md:w-[400px] md:mt-[0px] md:h-[950px] -->
          <h4 class="font-EB text-[92px] text-[#edb47c] text-left drop-shadow-lg cursor-default" >IT'S TIME FOR HIKING</h4>  <!-- md:text-[62px] -->
          <h1 class="font-BI  text-[25px] text-[#54514e] tracking-[4.61px] text-left ml-[5px] cursor-default">LOREMIPSUM DOLOR</h1> <!-- md:text-[15px] -->
          <button class="font-EB text-[25px] text-[#7c6c64] bg-white h-[47px] w-[218px] opacity-24  rounded-[40px]
                      px-6 py-[2px] text-center mt-[60px] 
                     "
          >READ MORE</button>  <!-- md:text-[15px] md:h-[35px] md:w-[158px] -->
          <p class="font-I text-[#565350] inline-block text-[21px] py-6 h-[71px] w-[475px] tracking-[0.96px] break-all cursor-default
                   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna.</p> <!--  md:text-[15px] md:h-[55px] md:w-[350px] -->
      </div>
      <h2 class="font-EB font-normal text-[63px] text-[#f6a44e] w-[286px]  ml-[40%] cursor-default">  <!-- md:text-[43px] md:ml-[38%] -->
            LET´S GO
          </h2>
    </div>
    
    <div class="bg-[url('/src/assets/images/group-two/Group-two-1440.png')] h-screen w-screen bg-no-repeat bg-cover 2xl:bg-[length:1920px_1077px]"> <!--  md:bg-[length:1000px_1077px] -->
      <div class="flex flex-col justify-between items-center mt-[60px] 2xl:mt-[30px]">

          <p class="font-R font-normal text-[27px] text-[#837971] h-[55px] w-[694px] mb-[120px] cursor-default 2xl:mb-[80px]">   <!-- md:mb-[60px] -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
          </p>

          <div>
            <div class="h-full">
 
              <section class="flex flex-row justify-between flex-wrap gap-[55px]">  <!-- md:gap-[20px] md:flex-col -->
                    
                  <article class="flex-[0_1_30%]">
                      <img class="w-[339px] h-[301px]" src="../assets/images/group-two/picture-one.png" alt="card 1"> <!--  md:h-[170px] md:w-[220px] -->
                      <div class="bg-[#7f7770] w-[339px] h-[227px] opacity-[.97] flex flex-col "> <!-- md:h-[180px] md:w-[220px] -->
                        <h1 class="font-B text-white text-[29px] w-full h-[30px] ml-2 mb-6 mt-10 cursor-default">Lorem ipsum</h1>
                        <p class="font-R text-white text-[23px] w-full h-[52px] ml-2 opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
                      </div>
                  </article>

                  <article class="flex-[0_1_30%]">
                      <img class="w-[339px] h-[301px]" src="../assets/images/group-two/picture-two.png" alt="card 2">    <!-- md:h-[170px] md:w-[220px]  -->                 
                      <div class="bg-[#7f7770] w-[339px] h-[227px] opacity-[.97] flex flex-col ">  <!--  md:h-[180px] md:w-[220px] -->
                        <h1 class="font-B text-white text-[29px] w-full h-[30px] ml-2 mb-6 mt-10 cursor-default">Lorem ipsum</h1>
                        <p class="font-R text-white text-[23px] w-full h-[52px] ml-2 opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
                      </div>
                  </article>

                  <article class="flex-[0_1_30%]">
                      <img class="w-[339px] h-[301px]" src="../assets/images/group-two/picture-three.png" alt="card 3"> <!--  md:h-[170px] md:w-[220px] -->
                      <div class="bg-[#7f7770] w-[339px] h-[227px] opacity-[.97] flex flex-col">   <!-- md:h-[180px] md:w-[220px] -->
                        <h1 class="font-B text-white text-[29px] w-full h-[30px] ml-2 mb-6 mt-10 cursor-default">Lorem ipsum</h1>
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

    <div class="flex">
        <img class="w-[50%]" src="../assets/images/group-three/left-pic.png" alt="group-three-hikers">
        <div class="flex flex-col justify-center bg-[#7f7770] h-[785px] w-[50%] 2xl:h-[1035px]">
          <h2 class="font-R font-bold text-[58px] text-white h-[115px] w-[533px] ml-[60px] mb-[90px] cursor-default 2xl:ml-[130px]">Discount up to 50% All Excursions</h2>
          <p class="font-R break-all text-[29px] text-white leading-[40px] h-[135px] w-[505px] ml-[60px] mb-[30px] cursor-default 2xl:ml-[130px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</p>
          <button class="font-R font-normal text-[29px] tracking-[7px] text-white bg-[#e2a355] h-[75px] w-[334px] rounded-[40px]
                      px-6 py-[2px] mt-[60px] text-center ml-[60px] 2xl:ml-[130px]">READ MORE</button>
        </div>
    </div>

    <div class="flex">
      <div class="flex flex-col justify-center bg-[#deb37e] h-[785px] w-[50%] 2xl:h-[1035px]">
          <h2 class="font-R font-bold text-[58px] text-white h-[115px] w-[533px] ml-[60px] mb-[90px] cursor-default 2xl:ml-[130px]">January’s Promo:
            Buy 1 Get 1 Free!</h2>
          <p class="font-R break-all text-[29px] text-white leading-[40px] h-[135px] w-[505px] ml-[60px] mb-[30px] cursor-default 2xl:ml-[130px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</p>
          <button class="font-R font-normal text-[23px] tracking-[7px] text-white bg-[#e2a355] h-[75px] w-[334px] rounded-[40px]
                      px-6 py-[2px] mt-[60px] text-center ml-[60px] 2xl:ml-[130px]">READ MORE</button>
        </div>
        <img class="w-[50%]" src="../assets/images/group-three/right-pic.png" alt="group-three-hikers back view">
    </div>

    <div class="bg-[url('/src/assets/images/group-four/Group-four-bg.png')] h-screen w-screen bg-no-repeat 2xl:bg-[length:1920px_800px]">
      <div class="flex flex-col justify-center items-center">
        <h2 class="font-R font-bold text-center text-[58px] text-white h-[115px] w-[50%] mt-[340px] cursor-default">Hiking in the mountains</h2>
        <p class="font-R break-all text-center text-[29px] text-white leading-[40px] h-[135px] w-[895px] opacity-[20px] mt-[10px] cursor-default">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis </p>
      </div>
    </div>
    
    <div class="bg-[url('/src/assets/images/group-five/Group-five-bg.png')] h-[850px] w-screen bg-no-repeat 2xl:bg-[url('/src/assets/images/group-five/Group-five-bg-1920px.png')] 2xl:h-[991px]">
      <div class="flex flex-col items-end mt-[250px] ml-[100px] 2xl:mt-[400px]">
        <h4 class="font-EBI font-bold text-[75px] text-[#edb47c] h-[115px] w-[533px] pl-[100px] drop-shadow-xl cursor-default">
          EXPLORE
        </h4>
        <h4 class="font-EBI font-bold text-[75px] text-[#54514e] h-[115px] w-[533px] drop-shadow-xl cursor-default">
          THE WORLD
        </h4>
      </div>
    </div>

    <div class="bg-[url('/src/assets/images/group-six/Group-six-bg.png')] h-screen w-screen bg-no-repeat 2xl:bg-cover 2xl:bg-bottom">
      <div class="flex flex-row justify-between ml-[160px] mr-[100px] mt-[150px]">

        <div class="w-[339px] h-[227px] opacity-[.97] flex flex-col ">
            <h1 class="font-B text-[#edb47c] text-[33px] w-full h-[30px] mb-8 cursor-default">Lorem ipsum</h1>
            <p class="font-R text-[#2d3d42] text-[19px] w-full h-[52px] opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consecte
                                                                                              sectetur adipisicing elit, tation omne 
                                                                                              ullamco laboris nisi ut aliqolore.</p>
       </div>
       <div class="w-[339px] h-[227px] opacity-[.97] flex flex-col">
            <h1 class="font-B text-[#edb47c] text-[33px] w-full h-[30px] mb-8 cursor-default">Lorem ipsum</h1>
            <p class="font-R text-[#2d3d42] text-[19px] w-full h-[52px] opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consecte
                                                                                              sectetur adipisicing elit, tation omne 
                                                                                              ullamco laboris nisi ut aliqolore.</p>
      </div>
      <div class="w-[339px] h-[227px] opacity-[.97] flex flex-col ">
            <h1 class="font-B text-[#edb47c] text-[33px] w-full h-[30px] mb-8 cursor-default">Lorem ipsum</h1>
            <p class="font-R text-[#2d3d42] text-[19px] w-full h-[52px] opacity-[.80] cursor-default">Lorem ipsum dolor sit amet, consecte
                                                                                              sectetur adipisicing elit, tation omne 
                                                                                              ullamco laboris nisi ut aliqolore.</p>
      </div>
      </div>

      <div class="flex flex-col items-center text-center mt-[250px] mr-[60px]">
        <p class="font-B text-[#3d3d3d] text-[100px] w-[43px] h-[25px] mb-[70px] cursor-default">“</p>
        <p class="font-SB text-[#3d3d3d] text-[25px] w-[792px] h-[85px] mb-[70px] break-all cursor-default">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
        <p class="font-B text-[#3d3d3d] text-[21px] w-[200px] h-[20px] cursor-default">Lorem Ipsum</p>
      </div>
    </div>

    <div class="bg-[url('/src/assets/images/group-seven/Group-seven-bg.png')] h-[900px] w-screen bg-no-repeat 2xl:bg-[length:1920px_800px]">
      <div class="flex flex-col items-center mt-[200px] text-center 2xl:mt-[250px]">
          <h4 class="font-B text-white text-[75px] w-[400px] h-[58px] mb-[90px] cursor-default">
            Title Here
          </h4>
          <p class="font-R text-[#54524f] text-[30px] w-[900px] h-[60px] mb-[90px] cursor-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
          </p>
          <div class="relative flex items-center justify-end">
            <input class="text-[#54524f] text-[25px] w-[659px] h-[63px] rounded-[55px] pl-10" type="email" placeholder="Your Email">
            <button class="font-B text-white text-[25px] bg-[#54524f] w-[222px] h-[65px] rounded-[55px] absolute ml-30">SUBSCRIBE</button>
          </div>
      </div>
    </div>

    <div class="bg-[url('/src/assets/images/fouter/fouter-bg.png')] h-[900px] w-screen bg-no-repeat 2xl:bg-[length:1920px_900px] ">
      <div class="flex -flex-row justify-between mr-[60px] mt-[100px] 2xl:justify-around">
          <div class="flex flex-col mt-[300px] ml-[80px] 2xl:ml-[80px]">
            <p class="font-MR text-white text-[32px] mb-[25px] cursor-default ">Title Here</p>
            <p class="font-MR text-white text-[24px] w-[480px] h-[25px] mb-[150px] cursor-default">Lorem ipsum dolor sit amet, consecte- <br>
                                                                                      tur adipiscing elit. Aliquam at dignis- <br>
                                                                                      sim nunc, id maximus ex. Etiam nec <br>
                                                                                      dignissim elit, at dignissim enim. </p>
            <div class="flex flex-row justify-between w-[200px]">
                <img class="cursor-pointer" src="../assets/images/fouter/Instagram.png" alt="instagram">
                <img class="cursor-pointer" src="../assets/images/fouter/Facebook.png" alt="facebook">
                <img class="cursor-pointer" src="../assets/images/fouter/Twitter.png" alt="twitter">
                <img class="cursor-pointer" src="../assets/images/fouter/WhatsApp.png" alt="whats app">
            </div>
          </div>
              <div class="flex flex-col mt-[300px] ml-[100px]">
                <p class="font-MR text-[32px] text-white h-[25px] w-[98px] mb-[40px] cursor-default">About</p>
                <p class="font-MR text-[24px] text-white h-[190px] w-[250px] leading-[3rem] cursor-default">History <br>
                  Our Team <br>
                  Brand Guidelines <br>
                  Terms & Condition <br>
                  Privacy Policy</p>
              </div>
              <div class="flex flex-col mt-[300px]">
                <p class="font-MR text-[32px] text-white h-[25px] w-[98px] mb-[40px] cursor-default">Services</p>
                <p class="font-MR text-[24px] text-white h-[190px] w-[229px] leading-[3rem] cursor-default">How to Order <br>
                  Our Product <br>
                  Order Status <br>
                  Promo <br>
                  Payment Method</p>
              </div>
              <div class="flex flex-col mt-[300px]">
                <p class="font-MR text-[32px] text-white h-[25px] w-[98px] mb-[40px] cursor-default">Other</p>
                <p class="font-MR text-[24px] text-white h-[190px] w-[140px] leading-[3rem] cursor-default">Contact Us <br>
                  Help <br>
                  Privacy
                  </p>
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
</style>
