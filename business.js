const card = document.getElementById("maincontainerbottom");

async function func() {
  const domainresponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=134f5058cd784ef0ab1f0968a3c948f0`
  );
  console.log(domainresponse);

  const data = await domainresponse.json();
  console.log(data);
  const div = document.createElement("div");
  for (let i = 0; i < 20; i++) {
    const card = document.getElementById("maincontainerbottom");
    div.innerHTML += `<div class="maincontainerbottom1"><img src="${data.articles[i].urlToImage}" alt="">
      <div class="maincontainerbottom2">
        <h4>${data.articles[i].title}</h4>
        <span><b>short</b>&nbspby&nbsp${data.articles[i].author}&nbsp/&nbsp${data.articles[i].publishedAt}</span><a href=${data.articles[i].url}  style="text-decoration: none; magin-bottom ="40px"">
                 <p style="margin-bottom="20px": none" class="paragraph">${data.articles[i].description}</p>
              
  <p>
    <span>read more at&nbsp</span><b>${data.articles[i].source.name}</b>
  </p>
</a>

      </div>
      
      </div>`;

    div.classList.add("maincontainer");
  }
  card.appendChild(div);
}
func();

$(".btn").click(function () {
  $(this).toggleClass("click");
  $(".sidebar").toggleClass("show");
});
$(".feat-btn").click(function () {
  $("nav ul .feat-show").toggleClass("show");
  $("nav ul .first").toggleClass("rotate");
});
$(".serv-btn").click(function () {
  $("nav ul .serv-show").toggleClass("show1");
  $("nav ul .second").toggleClass("rotate");
});
$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
