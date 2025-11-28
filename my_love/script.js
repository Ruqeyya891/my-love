const compliments = [
  "Həyatımda yaxşı ki varsann 🤍",
  "Sənin üçün ölürəəmm ee 🥹ürəyim gedir sənin üçün🙈",
  "Sənə qurban olaramm həyatımm🥰",
  "Səni tanımaq ən böyük şansımdır ,yaxşı ki varımsan həyatımm yaxşı ki yarımsann💕səninlə o qədərr xoşbəxtəm kii heç olmadığım qədər🥹",
  "Sən hər şeyin ən gözəlinə layiqsən 🤗🌸",
  "Başqa qızlara baxsan bittin sennn🤨 özün bilirsəndə deməyimə ehtiyac yoxdu məncə🥱ona görə ağıllı ol  ",
  "Gözlərinə heyranamm😍 , baxışlarına vurğunam ",
  "Sən mənimsən 😊səni heçkimə vermərəmmm ƏSLAA OLMAAZZ dodaqların yalnız mənimdi🫦 yalnız mən öpə bilərəmm anladınmı lann sen benimsin❤️‍🔥",
  "Səninlə  keçən hər anım çox özəldir və gözəldir🤍",
  "Yaraşığına qurban olaram ee səninn ömrüm günümm 🥹🤍",
  "Sənə hər baxanda elə hiss edirəmki sanki ürəyim sənə tərəf yığılır ❤️‍🔥",
 "Gozlərin baxışlarınn saçların əllərinn dodaqların burnun duruşun yerişin davranışın toxunuşun  🫠 mükəmməllsəndəə ömrümm 🥹aşiqəm sənə aşiq",
   "Könlümü almağı o qədər gözəl bacarırsannkii🥹 lap bütün gün sənə naz edəsim gəlir🫠🥹",
   "Sən mənim həyatımsan aşkımsan birdənəmsənn🤗 sənə qurban olaram yaraşıqlımm🫠 gözumun nuru, üzümün gülüşü ,hərşeyimm🥹 ",
];

 //✔ Tək funksiyaya saldım
 function showCompliment(){
   const randomText = compliments[Math.floor(Math.random() * compliments.length)];
 document.getElementById("complimentText").innerText += randomText + "\n\n";
 }




// Göstərilmiş cümlələr üçün ayrıca array
let shownCompliments = [];

function showCompliment(){
  if(compliments.length === 0){
    // Hamısı göstərilib, istəsən array-i sıfırlaya bilərsən
    alert("Bütün cümlələr göstərildi ❤️");
    return;
  }

  // Random index tap
  const index = Math.floor(Math.random() * compliments.length);
  const randomText = compliments[index];

  // Cümləni göstər
  document.getElementById("complimentText").innerText += randomText + "\n\n";

  // Cümləni moved et
  shownCompliments.push(randomText);
  compliments.splice(index, 1); // array-dən çıxar

  createHearts();    
  createRedHearts(); 
}




function showCompliment(){
  if(compliments.length === 0){
    alert("Bütün cümlələr bitdi ❤️");
    return;
  }

  const index = Math.floor(Math.random() * compliments.length);
  const randomText = compliments[index];

  // ❗ ALT-ALTA GƏLMƏSİN DEYƏ → ƏVVƏLKİNİ SİLİRİK
  document.getElementById("complimentText").innerText = randomText;

  compliments.splice(index, 1); // cümləni siyahıdan çıxar (təkrar olmasın)

  createHearts();
  createRedHearts();
}

