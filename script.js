var x = 35,
                y = 200;
              document.getElementById("jumpbox").style.transform =
                "translate(" + 35 + "%," + y + "%)";
              function right() {
                if (x < 150) {
                  x += 140;
                  // console.log(x,y);
                  var left = document.getElementById("jumpbox");
                  left.style.transform = "translate(" + x + "%," + y + "%)";
                } else {
                  // left.style.backgroundColor='red';
                  //console.log(x,y);
                }
              }

              function left() {
                if (x > 35) {
                  x -= 140;
                  // console.log(x,y);
                  var left = document.getElementById("jumpbox");
                  left.style.transform = "translate(" + x + "%," + y + "%)";
                } else {
                }
              }
              function up() {
                if (y > 30) {
                  y -= 50;
                  console.log(x, y);
                  var left = document.getElementById("jumpbox");
                  left.style.transform = "translate(" + x + "%," + y + "%)";
                } else {
                  console.log(x, y);
                }
              }

              function down() {
                if (y < 180) {
                  y += 50;
                  console.log(x, y);
                  var left = document.getElementById("jumpbox");
                  left.style.transform = "translate(" + x + "%," + y + "%)";
                } else {
                  console.log(x, y);
                  k = 0;
                }
              }
              /*
              var aud = document.getElementById("myaudio1");
              var aud1 = document.getElementById("myaudio2");
              var audcrash = document.querySelector("#myaudio");
              function playaud() {
                aud.play();
              }
              function playtruck() {
                aud1.play();
              }
              function pausetruck() {
                aud1.pause();
              }
              function playcrash() {
                audcrash.play();
              } */
              var myinterval;
              var yy = 0;
              var gamescore = 0;
              var overtack = 0;
              const enemy = document.querySelectorAll(".enemy");
              const ele = document.querySelector("#jumpbox");
              const gamescor = document.querySelector(".gamescore");
              const lif = document.querySelector(".life");
              const resetbtn = document.querySelector("#reset");
              lif.innerHTML = "❤️❤️❤️";

              //roa[1].style.display='none';
              const textbox = document.querySelector(".main11");
              const roa = document.getElementById("roadimg");

              function road() {
                roa.style.animationName='roa';
              }

              /*  function selectcar(){
            const choise=document.querySelectorAll['.choise'];
            addEventListener('onclick',function(e){
                target = e.target;
                console.log(target);
                if(target.classList.contains='choise'){
                    console.log(target);
                    
                }
            })
       }*/
              function rn() {
                return Math.floor(Math.random() * 2);
              }

              var m = Math.floor(Math.random() * 9);

              gamescor.innerHTML = gamescore;

              var n = rn();
              var life = 3;

              function truck() {
                var arr = [35, 175];
                let ikk = y - yy;

                if (yy > 305) {
                  for (let i = 0; i < 8; i++) {
                    enemy[i].style.display = "none";
                    enemy[i].style.transform = "translate(35%,-110%)";
                  }

                  n = rn();
                  m = Math.floor(Math.random() * 5);
                  gamescore += 30;
                  overtack += 1;
                  yy = -110;
                  gamescor.innerHTML = gamescore;
                } else {
                  if (arr[n] == x && ikk < 80) {
                    
                    life -= 1;
                    gamescore -= 5;
                    enemy[m].style.display = "none";
                    yy = -110;
                    enemy[m].style.animationName = "cardelay";
                   
                    if (life == 0) {
                      colision();
                    } else {
                      if (life == 2) {
                        lif.innerHTML = "❤️❤️";
                      } else if (life == 1) {
                        lif.innerHTML = "❤️";
                      }
                      n = rn();
                      enemy[m].style.transition = "transform 0.3s,display 2s";

                      m = Math.floor(Math.random() * 8);
                    }
                  } else {
                    enemy[m].style.display = "block";
                    gamescore += 1;
                    gamescor.innerHTML = gamescore;
                    yy += 5;
                    //var lef = document.getElementById('enemy');
                    enemy[m].style.transform =
                      "translate(" + arr[n] + "%," + yy + "%)";
                    // console.log(y,ikk); console.log(x,arr[n]);

                    // ele.style.top=''+yy+'%';
                    //ele.style.left=''+arr[n]+'%';
                  }
                }
              }
              

              const startgame = document.querySelector(".startgame");
              const startbtn = document.querySelector("#start");
              
              function strt() {
                setTimeout(start, 3000);
              }

              function start() {
                road();
                document.querySelector(".main121").style.display = "none";
                ele.style.display = "block";
                startgame.remove();
                startbtn.remove();
                myinterval = setInterval(truck, 100);
                /*if (gamescore > 2000000) {
                  times -= 50;
                  if (gamescore > 300) {
                    times -= 30;
                  } else {
                    myinterval = setInterval(truck, times);
                  }
                } else {
                  myinterval = setInterval(truck, times);
                }*/
              }
             
              //const gameend = document.getElementById('gameend');
              //gameend.style.display='flex';
              function colision() {
                document.querySelector(".main121").style.display = "flex";
                clearInterval(myinterval);
                resetbtn.style.display = "block";
                console.log("GAME OVER", y, yy);
                ele.parentNode.style.display = "none";
                gameend.style.display='flex';
                gameend.innerHTML =
                  "GAME OVER <br>Score : " +
                  gamescore +
                  "<br> Overtack : " +
                  overtack;
                //textbox.appendChild(gameend);
                lif.innerHTML = " ";
                yy = -110;
              }

              function rese() {
                for (let i = 0; i < 8; i++) {
                    enemy[i].style.display = "none";
                    enemy[i].style.transform = "translate(35%,-110%)";
                  }
                  document.querySelector(".main121").style.display = "none";
                lif.innerHTML = "❤️❤️❤️";
                gameend.style.display='none';
                ele.parentNode.style.display = "flex";
                resetbtn.style.display = "none";
                gamescore = 0;
                life = 3;
                overtack = 0;
                //times = 100;
                start();
                rn();
              }
              //        if();

              /* function for attack of gun 
                      function down(){
                         console.log('tere');
                        if(a<96){ 
                            b=2;
                            a+=b;
                           
                        //var lef = document.getElementById('enemy');
                        var ele=document.querySelector('.enemy');
                        ele.style.top=''+a+'%';
                        
                    }
                        else{
                            b=0;
                            //ele.remove();
                        } 
                         if(a<16){
                        setInterval("down()",100);
                     }
                     else{
                        
                     }
                     } */