//= require active_admin/base
//= require active_admin_flat_skin

//= require_tree .

var detachedMenuItems;
var detachedMenuButton;
function openNav() {
    $("div#menu_modal")[0].style.setProperty('display','block');
    $("#header")[0].style.setProperty('transform', 'translateX(0px) translateZ(0px)');
    document.getElementById("tabs").style.width = "100%";
    $(".eBLDUv")[0].style.setProperty('bottom', '4rem');
    $(".eBLDUv")[0].style.setProperty('transform', 'translateX(10vw) rotate(0deg) translateZ(0px)');
    $(".jYpagw")[0].style.setProperty('transform', 'rotate(0deg)');
}

function closeNav() {
    $("div#menu_modal")[0].style.setProperty('display','none');
    $("#header")[0].style.setProperty('transform', 'translateX(-90%) translateZ(0px)');
    document.getElementById("tabs").style.width = "0%";
    document.getElementById("site_title").innerText="Android Spyware";
    $(".eBLDUv")[0].style.setProperty('bottom', '0rem');
    $(".eBLDUv")[0].style.setProperty('transform', 'translateX(46vw) rotate(-90deg) translateZ(0px)');
    $(".jYpagw")[0].style.setProperty('transform', 'rotate(90deg)');
}




$(document).ready(function(){
    $("#main_content > .columns:first-child > .column:first-child > .columns:first-child > .column, #main_content > .columns:nth-child(2) > .column:first-child > .columns:first-child > .column").on({
        mouseenter: function () {
            $(".dashboard_icon_container > .dashboard_icon > .count_icon",this)[0].style.setProperty('padding-left','0');
            this.style.setProperty('background-color','white');
            $('.dashboard_icon_container > .dashboard_counts_container > .category', this)[0].style.setProperty('right','40%');
            $('.dashboard_icon_container > .dashboard_counts_container > .category', this)[0].style.setProperty('font-size','x-large');
        },
        mouseleave: function () {
            this.style.setProperty('background-color','rgba(52, 58, 67, 0.3)');
            $(".dashboard_icon_container > .dashboard_icon > .count_icon",this)[0].style.setProperty('padding-left','15%');
            $('.dashboard_icon_container > .dashboard_counts_container > .category', this)[0].style.setProperty('right','0');
            $('.dashboard_icon_container > .dashboard_counts_container > .category', this)[0].style.setProperty('font-size','initial');
        }
    });



    $("div#wrapper").prepend("<div id=\"menu_modal\"/>");

    $(".alerttt" ).fadeOut(3000);
    $("#carouselContainer").hide();

    $("<button class=\"sc-htpNat WQebA\" onclick=\"openNav()\" style=\"transform: scaleX(1.04) translateZ(0px);\"><div class=\"phoneSvg\"><svg class=\"menu_icon\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.0\" width=\"60\" height=\"90\" preserveAspectRatio=\"xMidYMid meet\"><rect id=\"backgroundrect\" width=\"100%\" height=\"100%\" x=\"0\" y=\"0\" fill=\"none\" stroke=\"none\" class=\"\" style=\"\"/><g class=\"currentLayer\" style=\"\"><title>Infected Smartphones</title><g transform=\"translate(0,512) scale(0.10000000149011612,-0.10000000149011612) \" stroke=\"none\" id=\"svg_1\" class=\"selected\" fill-opacity=\"1\"><path d=\"M53.64101947666597,5109.0213609513185 c-9.491839858436466,-4.118987142652071 -21.6956339621405,-14.603681687584613 -27.119542452675624,-23.02888266119112 c-2.5612901205304763,-3.931760454349702 -6.478557363694731,-12.169734739653844 -8.738519234751033,-18.160988765329577 l-4.067931367901343,-10.859147921537275 l0,-386.6231113443875 l0,-386.6231113443875 l4.067931367901343,-10.859147921537275 c5.574572615272213,-14.790908375886977 11.751801729492769,-24.15224279100532 21.24364158792924,-31.828537011402357 c16.422389596342466,-13.480321557770411 3.1639466194788226,-12.731414804560943 199.3286370271658,-12.169734739653844 l176.12636181765444,0.5616800649071008 l8.587855110013946,5.0551205841639035 c10.245160482121904,5.8040273373733715 21.092977463192152,17.973762077027214 26.366221828990177,29.020136686866852 c7.834534486328513,16.850401947213015 7.9851986110655995,18.909895518539052 8.135862735802686,114.9571866176532 l0,89.30713032022899 l11.149145230544425,10.67192123323491 c14.46375597476033,13.667548246072778 41.28197017796179,48.491712270313016 52.5817795332433,68.15051454206154 c37.96735943374586,65.90379428243313 64.78557363694729,164.5722590177804 69.60682562853408,255.9388829093354 c1.0546488731596075,18.160988765329577 0.9039847484225216,18.909895518539052 -2.862618370004649,24.15224279100532 l-3.76660311842717,5.6168006490710045 l-22.448954585825927,1.123360129814201 c-19.586336215821287,0.9361334415118345 -23.955595833196803,1.872266883023668 -36.31005406163792,7.1146141554899405 c-22.147626336351756,9.174107726815974 -36.61138231111208,20.78216240156272 -53.33510015692873,42.874911621242006 c-5.574572615272213,7.489067532094672 -11.149145230544425,15.914268505701179 -12.354458228441118,18.909895518539052 c-1.958633621582128,4.493440519256803 -2.259961871056302,16.850401947213015 -2.259961871056302,77.13739558057513 c0,77.3246222688775 -0.3013282494741744,81.25638272322722 -8.135862735802686,97.73233129383547 c-5.273244365798039,11.046374609839642 -16.121061346868288,23.216109349493486 -26.366221828990177,29.020136686866852 l-8.587855110013946,5.0551205841639035 l-177.030346566077,0.3744533766047343 c-157.59467447499276,0.18722668830236733 -177.78366718976238,0 -183.8102321792459,-2.621173636233136 zm357.9779603753182,-36.50920421896152 c6.779885613168905,-4.680667207559171 13.861099475811983,-15.352588440794078 15.669068972657026,-23.965016102702958 c0.9039847484225216,-4.118987142652071 1.3559771226337822,-16.101495194003544 1.2053129978966945,-26.58618973893609 l-0.4519923742112613,-19.284348895143783 l-192.39808728925982,-0.5616800649071008 l-192.5487514139969,-0.3744533766047343 l0,23.02888266119112 c0,20.220482336655614 0.4519923742112613,23.965016102702958 3.4652748689529957,31.266856946495245 c1.807969496845043,4.493440519256803 5.122580241060952,9.735787791723077 7.231877987380165,11.608054674746743 c9.943832232647727,9.174107726815974 4.5199237421126055,8.799654350211242 184.4128886781942,8.425200973606508 c155.63604085341063,-0.3744533766047343 169.04514795501137,-0.5616800649071008 173.41440757238695,-3.5573070777449716 zm17.17571022002789,-137.6116159022396 c0,-28.832909998564485 0,-29.39459006347159 -4.067931367901343,-35.94752415405443 c-12.806450602652378,-20.96938908986508 -30.13282494741736,-39.317604543497026 -48.21251991586777,-50.55120584163904 c-15.669068972657026,-9.735787791723077 -29.078176074257748,-13.480321557770411 -52.88310778271746,-14.790908375886977 c-21.39430571266633,-1.3105868181165685 -21.6956339621405,-1.3105868181165685 -25.31157295583058,-6.55293409058284 c-4.3692596173755165,-6.36570740228047 -4.670587866849691,-16.66317525891065 -1.3559771226337822,-49.42784571182483 c13.559771226337812,-131.43313518826147 57.40303152483006,-240.02461440363425 121.58594866282907,-300.68606141360107 l10.245160482121904,-9.735787791723077 l-0.3013282494741744,-27.147869803843193 l-0.4519923742112613,-27.147869803843193 l-192.39808728925982,-0.5616800649071008 l-192.5487514139969,-0.3744533766047343 l0,276.1593652459911 l0,276.1593652459911 l192.8500796634711,0 l192.8500796634711,0 l0,-29.39459006347159 zm50.92447416113535,-108.02979915046565 c20.038328590032535,-16.47594857060828 41.1313060532247,-26.024509674028995 66.14155075958114,-29.76904344007632 l14.915748348971595,-2.2467202596284017 l-2.5612901205304763,-23.403336037795857 c-8.738519234751033,-75.63958207415621 -30.43415319689153,-148.65799051207932 -59.66299339588637,-200.3325564835325 c-10.39582460685899,-18.160988765329577 -44.5965809221777,-62.53371389299049 -51.97912303429496,-67.21438110054969 c-3.9172672431642557,-2.43394694793077 -4.5199237421126055,-2.059493571326035 -13.559771226337812,6.9273874671875735 c-52.43111540850622,52.04901934805799 -91.90511608962295,149.78135064189348 -104.41023844280116,259.1217366104756 c-3.1639466194788226,27.70954986875029 -4.067931367901343,25.088376232517152 9.642503983173556,26.58618973893609 c33.899428065844546,3.5573070777449716 67.49752788221488,23.59056272609822 93.41175733699377,56.168006490710056 l11.149145230544425,14.042001622677514 l13.258442976863641,-15.539815129096448 c7.231877987380165,-8.612427661908873 17.929030843713328,-19.471575583446153 23.654267583722632,-24.339469479307688 zm-50.92447416113535,-490.15946997559627 c0,-20.96938908986508 -0.7533206236854364,-41.18987142652068 -1.6573053721079565,-45.12163188087041 c-0.9039847484225216,-3.931760454349702 -3.9172672431642557,-10.484694544932541 -6.9305497379059915,-14.603681687584613 c-9.793168107910644,-13.480321557770411 -0.7533206236854364,-12.918641492863308 -184.86488105240554,-12.918641492863308 c-105.46488731596071,0 -166.33319370974385,0.7489067532094682 -169.7984685786968,1.872266883023668 c-8.587855110013946,2.9956270128378697 -15.36774072318285,9.548561103420708 -18.98367971687293,18.722668830236685 c-3.3146107442159103,7.863520908699406 -3.4652748689529957,10.484694544932541 -3.4652748689529957,49.05339233522012 l0,40.81541804991597 l192.8500796634711,0 l192.8500796634711,0 l0,-37.819791037078105 z\" id=\"svg_2\" fill-opacity=\"1\"/><path d=\"M389.1700252661581,4769.953828435732 c-3.0132824947417363,-3.931760454349702 -4.067931367901343,-7.1146141554899405 -4.067931367901343,-12.731414804560943 c0,-6.9273874671875735 1.0546488731596075,-8.612427661908873 18.07969496845042,-29.76904344007632 c9.943832232647727,-12.356961427956207 18.07969496845042,-23.216109349493486 18.07969496845042,-24.15224279100532 c0,-1.123360129814201 -8.135862735802686,-12.169734739653844 -18.07969496845042,-24.52669616761006 c-17.025046095290808,-21.531069154772183 -18.07969496845042,-23.216109349493486 -18.07969496845042,-30.330723504983418 c0,-10.859147921537275 5.574572615272213,-17.412082012120113 14.614420099497421,-17.412082012120113 c6.6292214884318215,0 7.231877987380165,0.5616800649071008 25.462237080567675,22.84165597288876 l18.833015592135855,22.84165597288876 l18.38102321792459,-22.84165597288876 c17.627702594239157,-21.71829584307455 18.682351467398764,-22.84165597288876 24.55825233214514,-22.84165597288876 c8.587855110013946,0 14.16242772528616,6.9273874671875735 14.16242772528616,17.599308700422483 c0,7.3018408437923075 -0.9039847484225216,8.612427661908873 -18.38102321792459,30.5179501932858 l-18.38102321792459,22.84165597288876 l18.38102321792459,23.403336037795857 c17.929030843713328,22.654429284586385 18.38102321792459,23.403336037795857 18.38102321792459,31.6413103231 c0,11.233601298142007 -5.273244365798039,18.160988765329577 -14.011763600549068,18.160988765329577 c-5.7252367400093,0 -7.08121386264308,-1.3105868181165685 -24.407588207408068,-22.467202596284018 c-9.943832232647727,-12.356961427956207 -18.833015592135855,-22.467202596284018 -19.737000340558374,-22.467202596284018 c-0.7533206236854364,0 -9.491839858436466,10.110241168327807 -19.4356720910842,22.467202596284018 c-17.17571022002789,21.34384246646982 -18.38102321792459,22.467202596284018 -24.106259957933887,22.467202596284018 c-4.821251991586778,0 -7.08121386264308,-1.123360129814201 -10.245160482121904,-5.2423472724662705 z\" id=\"svg_3\" fill-opacity=\"1\"/><path d=\"M207.9210832074427,4337.085725080661 c-4.5199237421126055,-2.2467202596284017 -9.642503983173556,-10.859147921537275 -9.642503983173556,-16.28872188230591 c0,-6.9273874671875735 3.9172672431642557,-14.790908375886977 8.738519234751033,-17.22485532381775 c3.0132824947417363,-1.6850401947213018 12.65578647791529,-2.059493571326035 31.187473820576965,-1.6850401947213018 l26.667550078464366,0.5616800649071008 l3.6159389936900843,5.2423472724662705 c3.9172672431642557,5.6168006490710045 4.821251991586778,15.539815129096448 2.109297746319215,22.092749219679284 c-3.4652748689529957,7.67629422039704 -9.03984748422521,9.174107726815974 -34.95407693900413,8.986881038513607 c-13.559771226337812,0 -26.06489357951602,-0.7489067532094682 -27.722198951623966,-1.6850401947213018 z\" id=\"svg_4\" fill-opacity=\"1\"/></g></g></svg></div><div class=\"sc-bxivhb lEoFR\"></div><div \
        class=\"sc-bxivhb lEoFR\"></div><div class=\"sc-bxivhb lEoFR\"></div></button>").insertAfter("#site_title");
    $("<div class=\"sc-bZQynM eBLDUv\" style=\"bottom: 4rem; transform: translateX(10vw) rotate(0deg) translateZ(0px); transform-origin: \
    0% 0px 0px;\"><svg style=\"transform: rotate(0deg);\" \
    viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sc-gzVnrw jYpagw\"><path d=\"m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 \
    33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 \
    135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0\"></path><path d=\"m407 \
    90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0\"></path><path d=\"m257 150c-57.890625 0-105 47.109375-105 105s47.109375 \
    105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0\"></path></svg><svg style=\"transform: rotate(0deg\
        );\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sc-gzVnrw jYpagw\"><path d=\"m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 \
        75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 \
        30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0\"></path></svg><svg style=\"transform: rotate(0deg);\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sc-gzVnrw jYpagw\"><path d=\"m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0\" id=\"svg_1\" class=\"\" fill-opacity=\"1\"/></g></svg></div>").insertAfter("#tabs");

    $("#current_user > a").eq(0).html("<svg class=\"menu_icon\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.0\" width=\"60\" height=\"60\" preserveAspectRatio=\"xMidYMid meet\" style=\"\"><rect id=\"backgroundrect\" width=\"100%\" height=\"100%\" x=\"0\" y=\"0\" fill=\"none\" stroke=\"none\" class=\"\" style=\"\"/><g class=\"currentLayer\" style=\"\"><title>User Details</title><g transform=\"translate(0,64) scale(0.10000000149011612,-0.10000000149011612) \" stroke=\"none\" id=\"svg_1\" class=\"\" fill-opacity=\"1\"><path d=\"M234.74835628088232,612.041595812351 c-78.94722132406844,-20.246462474718115 -148.13692091145418,-77.46472599022582 -188.0540552887922,-153.16889002612834 c-20.40209090397274,-38.73236299511291 -23.950280626402776,-57.218263515507715 -23.950280626402776,-120.59849387114699 c-0.8870474306075139,-65.14079230996262 2.6611422918225327,-80.98584989887246 23.950280626402776,-120.59849387114699 c31.046660071262856,-58.97882546983104 74.51198417103087,-102.11259335075222 133.05711459112652,-132.04214657424853 c39.917134377337966,-20.246462474718115 56.77103555888067,-23.767586383364737 121.52549799322894,-23.767586383364737 c64.75446243434824,0 81.60836361589097,3.521123908646629 121.52549799322894,23.767586383364737 c58.54513042009568,29.929553223496335 102.8975019504712,73.94360208157919 133.05711459112652,132.04214657424853 c20.40209090397274,39.61264397227456 23.950280626402776,56.33798253834606 23.950280626402776,120.59849387114699 c0,64.26051133280096 -3.5481897224300427,80.98584989887246 -23.950280626402776,120.59849387114699 c-49.67465611402058,95.07034553345895 -133.94416202173406,150.52804709464334 -235.06756911099026,156.69001393477495 c-32.82075493247788,1.760561954323316 -70.96379444860082,0.8802809771616589 -86.0436007689285,-3.521123908646629 zm192.48929244182972,-47.535172766729474 c43.465324099768,-25.528148337688055 86.0436007689285,-69.54219719577091 110.88092882593881,-114.43652703101543 c12.418664028505145,-21.126743451879772 15.966853750935185,-48.41545374389114 15.966853750935185,-111.79568409953045 c0,-74.82388305874085 -2.6611422918225327,-88.0280977161657 -23.950280626402776,-124.11961777979363 c-37.25599208551544,-63.380230355639306 -43.465324099768,-66.02107328712427 -98.46226479743365,-43.1337678809212 c-83.38245847710598,35.21123908646628 -94.91407507500361,61.61966840131599 -55.88398812827316,129.40130364276362 c20.40209090397274,34.330958109304625 23.950280626402776,58.09854449266937 25.7243754876178,151.40832807180502 c0,23.767586383364737 -6.209332014252573,35.21123908646628 -28.385517779440335,54.57742058402274 c-34.5948497936929,28.16899126917303 -62.09332014252571,34.330958109304625 -105.55864424229371,24.647867360526398 c-53.222845836450624,-11.443652703101543 -63.86741500374074,-33.45067713214298 -62.98036757313322,-119.71821289398534 c0.8870474306075139,-61.61966840131599 4.435237153037551,-80.98584989887246 22.176185765187757,-110.91540312236879 c39.030086946730464,-67.78163524144759 27.498470348832818,-94.1900645562973 -55.88398812827316,-129.40130364276362 c-54.10989326705813,-22.887305406203087 -61.20627271191821,-20.246462474718115 -97.57521736682614,42.253486903759544 c-27.498470348832818,45.77461081240617 -37.25599208551544,142.60551830018846 -21.289138334580247,200.7040627928578 c18.62799604275772,68.66191621860925 86.930648199536,140.8449563458651 157.89444264813687,167.25338566071483 c22.176185765187757,7.922528794454913 59.432177850703205,11.443652703101543 105.55864424229371,9.683090748778227 c58.54513042009568,-2.640842931484972 78.94722132406844,-7.042247817293258 111.76797625654632,-26.40842931484972 z\" id=\"svg_2\" fill-opacity=\"1\"/></g></g></svg>");
    $("#logout > a").eq(0).html("<svg class=\"menu_icon\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.0\" width=\"60\" height=\"60\" preserveAspectRatio=\"xMidYMid meet\"><rect id=\"backgroundrect\" width=\"100%\" height=\"100%\" x=\"0\" y=\"0\" fill=\"none\" stroke=\"none\" class=\"\" style=\"\"/><g class=\"currentLayer\" style=\"\"><title>Log Out</title><g transform=\"translate(0,256) scale(0.10000000149011612,-0.10000000149011612) \" stroke=\"none\" id=\"svg_1\" class=\"\" fill-opacity=\"1\"><path d=\"M278.15212144754,2547.338205972374 c-11.53172998213981,-5.183510024812658 -20.123999380596928,-16.001270076595596 -23.515684669461578,-29.523470141324268 c-1.8088988207278138,-6.9864700334431475 -2.2611235259097664,-45.975480220077486 -1.8088988207278138,-127.33405060952833 c0.6783370577729315,-116.29092055666659 0.6783370577729315,-117.19240056098181 5.652808814774419,-126.65794060629189 c16.280089386550323,-30.42495014563951 61.95478460992762,-30.42495014563951 78.23487399647794,0 c4.9744717570014885,9.465540045310071 4.9744717570014885,10.367020049625316 5.652808814774419,126.65794060629189 c0.4522247051819547,81.35857038945083 0,120.34758057608516 -1.8088988207278138,127.33405060952833 c-5.200584109592466,20.50867009817182 -21.93289820132474,33.805500161821676 -42.96134699228557,33.805500161821676 c-5.652808814774419,0 -14.471190565822509,-2.028330009709301 -19.445662322823996,-4.282030020497412 z\" id=\"svg_2\" fill-opacity=\"1\"/><path d=\"M120.55181169162923,2486.0375656789374 c-14.018965860640554,-9.240170044231258 -46.12691992855924,-43.271040207131755 -59.01532402624491,-62.42749029883071 c-21.028448790960834,-31.777170152112383 -37.30853817751116,-70.5408103376679 -44.544133460422415,-107.50149051459292 c-2.03501117331879,-9.690910046388884 -3.1655729362736733,-30.42495014563951 -3.1655729362736733,-52.96195025352063 c0,-40.56660019418602 2.2611235259097664,-56.5678702707816 12.888404097685669,-88.79578042505162 c14.018965860640554,-43.72178020928936 35.49963935678335,-78.20339037434749 69.41649224542984,-111.78352053509036 c34.36907759382846,-34.2562401639793 68.73815518765691,-55.44102026538756 112.3778392377154,-69.41396033227387 c32.334066420509664,-10.592390050704127 48.388043454469006,-12.846090061492239 89.08826692084483,-12.846090061492239 c40.70022346637581,0 56.754200500335145,2.2537000107881116 89.31437927343578,12.846090061492239 c71.90372812393058,23.21311011111755 131.82350156053943,74.82284035816532 166.19257915436785,143.10995068504513 c20.57622408577888,41.01734019634363 28.26404407387209,75.72432036248057 28.26404407387209,126.88331060737072 c0,22.537000107881116 -1.1305617629548828,43.271040207131755 -3.1655729362736733,52.96195025352063 c-7.235595282911254,36.96068017692503 -23.289572316870593,75.49895036140175 -44.77024581301338,107.95223051675056 c-12.662291745094695,18.931080090620142 -44.77024581301338,52.736580252441826 -59.01532402624491,62.2021202977519 c-27.359594663508183,18.029600086304892 -59.467548731426874,-2.028330009709301 -53.588627564061476,-33.35476015966406 c1.1305617629548828,-6.535730031285527 6.10503351995637,-12.846090061492239 23.967909374643533,-29.974210143481894 c24.646246432416465,-24.114590115432797 43.41357169746752,-50.93362024381134 54.2669646218344,-76.85117036787463 c27.81181936869013,-67.38563032256457 20.80233643836986,-139.95477066994175 -19.219549970233015,-201.25541096337844 c-31.203504657554785,-47.55307022762916 -82.53100869570649,-82.71079039592371 -138.15464743308678,-94.65540045310071 c-23.967909374643533,-5.183510024812658 -64.21590813583738,-5.183510024812658 -88.1838175104809,0 c-83.88768281125233,18.029600086304892 -151.72138858854538,85.64060040994826 -169.5842644432325,169.02750080910837 c-4.9744717570014885,23.438480112196366 -4.9744717570014885,64.00508030638238 0,87.89430042073637 c8.818381751048094,42.36956020281651 31.429617010145762,81.35857038945083 66.47703166174713,115.61481055343013 c20.350111733187905,20.057930096014196 22.61123525909767,22.76237010895993 23.967909374643533,32.45328015534881 c4.522247051819533,30.1995801445607 -27.359594663508183,48.454550231944395 -53.81473991665244,30.87569014779714 z\" id=\"svg_3\" fill-opacity=\"1\"/></g></g></svg>");
    //document.getElementById(\"dashboardContainer\").style.opacity = \"0.1\";
    
    window.addEventListener('click', function(e){
        var target = event.target || event.srcElement || event.currentTarget;   
        if (document.getElementById('header').contains(target) || (event.target.parentElement.id == 'header')){
          // Clicked in box
    
        } else{
          closeNav();
        }
      });


    closeNav();

    $(".load").on('click', function(event){
        $(".alerttt" ).fadeIn(3000);
        $(".alerttt" ).fadeOut(3000);
        
    
        //(... rest of your JS code)
    });

    $("#customSwitch1").change(function() {
        if(this.checked){
            $("#dashboardContainer").hide()
            $("#carouselContainer").fadeIn(1000);
        }
        else{
            $("#carouselContainer").hide()
            $("#dashboardContainer").fadeIn(1000);
        }
    });




    (function(win, dom){
        'use strict';
      
        // Check for .rangeControl class
        var rangeControlList = dom.getElementsByClassName('custom-rangeInput');
      
        // Inits components
        var init = function(){
          
          // Loop all controls
          for (var i = 0; i < rangeControlList.length; i++) {
            
            // Apply inital
            updateController(rangeControlList[i]);
            // Update when changed
            rangeControlList[i].addEventListener('input', function() {
              updateController(this);
            });
            // Update when changed ( for older browsers )
            rangeControlList[i].addEventListener('change', function() {
              updateController(this);
            });
          }
        }
        
        // Updates components
        var update = function(){
          for (var i = 0; i < rangeControlList.length; i++) {
             updateController(rangeControlList[i]);
          }
        }
    
        // Update controller
        var updateController = function(obj){
          // Thumb Position
          var thumbPos = getThumbPercentage(obj);
          var thumPosPX = getThumbPosition(obj);
          if(obj.getAttribute("data-tooltip") != "false"){
            updateTooltip(obj.nextElementSibling, obj.value, thumPosPX, thumbPos);
          }else{
            obj.nextElementSibling.style.display = "none";
          }
          updateProgress(obj, '#9c9e9f', '#33ccff', thumbPos);
        }
    
        // Retun range slider pixel position according to offset
        // obj : target object
        var getThumbPosition = function(obj){
          return Math.round((obj.offsetWidth / 100) * obj.value); // Pixel
        }
    
        // Retun range slider percentage to thumb position
        // obj : target object
        var getThumbPercentage = function(obj){
          return Math.round(100 * obj.value/obj.getAttribute("max")); // Percentage
        }
        
        // Updated range slider tooltip
        // obj : target object
        // text : tooltip label
        // position : absolute position
        // percentage : percentage of current value
        var updateTooltip = function(obj, text, position, percentage){
          obj.innerHTML = text; // Tooltip text
          obj.style.left = position + 'px'; // Tooltip position
    
          // Tooltip Position
          var tooltipStartPos = 26;
          var tooltipPosFix = percentage / 1.8;
          if(percentage > 50){
            tooltipPosFix = percentage / 2.2;
          }
          obj.style.transform = 'translate(-'+ (tooltipStartPos + tooltipPosFix) +'%, 0)';
        }
        
        // Updated background progress bar of range slider
        // obj : target object
        // progressBgColor : background color
        // progressFillColor : fill color
        // percentage : percentage of current value
        var updateProgress = function(obj, progressBgColor, progressFillColor, percentage){
          var rangeBg = 'linear-gradient(to right,  '+ progressFillColor +' 0%, '+ progressFillColor +' '+ percentage +'%, '+ progressBgColor +' '+ percentage +'%, '+ progressBgColor +' 100%)';
          var cssRule = '#'+ obj.id +'::-webkit-slider-runnable-track { background : '+ rangeBg +' } ';
          cssRule += '#'+ obj.id +'::-moz-range-track { background : '+ rangeBg +' } ';
          cssRule += '#'+ obj.id +'::-ms-track { background : '+ rangeBg +' } ';
          var applyStyle = function(styleName, cssText) {
              var styleElement = dom.getElementById(styleName);
              if (styleElement) dom.getElementsByTagName('head')[0].removeChild(styleElement);
              
              styleElement = dom.createElement('style');
              styleElement.type = 'text/css';
              styleElement.id = styleName;
              styleElement.innerHTML = cssText;
              dom.getElementsByTagName('head')[0].appendChild(styleElement);
          }
          applyStyle('range_'+ obj.id, cssRule);
        }
        
      // Refresh on resize
      var fireOnceOnResize;
      win.addEventListener('resize', function () {
        fireOnceOnResize = setTimeout(update, 100);
      });
      
      // Init Component
      init();
      
    }(window, document));









    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });










    var elem = document.querySelector('#slide_count');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);
   

});







