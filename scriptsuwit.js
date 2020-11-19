// gu = batu
// choki = gunting
// pa = kertas
function getpilihanComputer() {
   // membangkitkan bilangan random
   const comp = Math.random()
   
   if( comp < 0.34 ) return 'gu'
   if( comp >= 0.34 && comp < 0.67 ) return 'choki'
   return 'pa'
}
// aturan main
// batu gunting | menang kalah
// batu kertas | kalah menang
// gunting kertas | menang kalah
function getHasil(comp, player) {
   if( player == comp ) return 'Equal!'
   if( player == 'gu' ) return ( comp == 'choki' ) ? 'Win!' : 'Lose!'
   if( player == 'gu' ) return ( comp == 'pa' ) ? 'Lose!' : 'Win!'
   if( player == 'choki' )  return( comp == 'pa' ) ? 'Win!' : 'Lose!'
   if( player == 'pa' )  return( comp == 'gu' ) ? 'Win!' : 'Lose!'
}

function putar() {
   const imgComputer = document.querySelector('.img-computer')
   const gambar = ['gu', 'pa', 'choki']
   let i = 0
   const waktuMulai = new Date().getTime()
   setInterval(function(){
      if (new Date().getTime() - waktuMulai > 1000) {
         clearInterval
         return
      }
      imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
      if (i == gambar.length) {
         i = 0
      }
   }, 100)
}

const pilihan = document.querySelectorAll('img')
let win = 1
let lose = 1
pilihan.forEach(function (pil) {
   pil.addEventListener('click', function () {
      const pilihanComputer = getpilihanComputer()
      const pilihanPlayer = pil.className
      const hasil = getHasil(pilihanComputer, pilihanPlayer)

      putar()

      setTimeout(function(){
         const imgComputer = document.querySelector('.img-computer')
         imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
   
         const info = document.querySelector('.info')
         info.innerHTML = hasil

         // score
         const skorKomputer = document.querySelector('.skorKomputer')
			const skorPlayer = document.querySelector('.skorPlayer')
			
			if(hasil == 'Win!'){
				skorPlayer.innerHTML = 'Your Score: ' + win++
			}
			if(hasil == 'Lose!'){
				skorKomputer.innerHTML = 'Computer Score: ' + lose++
         }
         
         // reset
         const reset = document.getElementById('reset')
         reset.addEventListener('click', function () {
            location.reload();
         })

      }, 1000)
   })
})

const title = document.getElementsByTagName('title')[0]
title.innerHTML = 'Jan Ken Pon'
const h1 = document.getElementsByTagName('h1')[0]
h1.innerHTML = 'Jan Ken Pon'

// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function () {
//    const pilihanComputer = getpilihanComputer()
//    const pilihanPlayer = pGajah.className
//    const hasil = getHasil(pilihanComputer, pilihanPlayer)

//    const imgComputer = document.querySelector('.img-computer')
//    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//    const info = document.querySelector('.info')
//    info.innerHTML = hasil
// })

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function () {
//    const pilihanComputer = getpilihanComputer()
//    const pilihanPlayer = pOrang.className
//    const hasil = getHasil(pilihanComputer, pilihanPlayer)

//    const imgComputer = document.querySelector('.img-computer')
//    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//    const info = document.querySelector('.info')
//    info.innerHTML = hasil
// })

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function () {
//    const pilihanComputer = getpilihanComputer()
//    const pilihanPlayer = pSemut.className
//    const hasil = getHasil(pilihanComputer, pilihanPlayer)

//    const imgComputer = document.querySelector('.img-computer')
//    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//    const info = document.querySelector('.info')
//    info.innerHTML = hasil
// })