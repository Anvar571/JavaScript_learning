// mantiqiy operatorlar en: logocal operator
// jsda bu operatorlar 4 ta hisoblanadi ||(or), &&(and), !(not), ??(nullish)
// birinchi || operatorni ko'ramiz bu qanday ishlaydi
// || => ikkala holatdan agar birortasi true yoki truega teng ma'lumot bo'lsa o'sh qism bajariladi ya'ni result true
// && => faqatgina ikkita qiymat uchun bitta holatda true (true && true) qolganlarida false
// ! => inkor teskarisiga o'giradi !true => false
// ?? => kiyinroq ko'ramiz

// endi misollar ko'ramiz
console.log(true || false); // true
// true bo'lgan holatini qaytaradi
console.log(false || false || true); // true qaytaradi nechta bo'lsa ham
// false holatda birinchi qiymatni qaytaradi nechta bo'lsa ham
console.log(false+"3" || false+"2" || false+"1" || false+"0");
// bir nechta true qiymatlar qatnashsa faqatgina birinchi trueni qaytaradi
console.log("salom" || false || "alik" || "qale");