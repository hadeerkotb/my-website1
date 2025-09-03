<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  });

  document.getElementById("skillsLink").addEventListener("click", function (e) {
    e.preventDefault();
    const skillsSection = document.getElementById("skillsSection");
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
      skillsSection.style.display = "block";
      skillsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      skillsSection.style.display = "none";
    }
  });

  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
      nav.classList.add("affix");
    } else {
      nav.classList.remove("affix");
    }
  });
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  });

  document.getElementById("skillsLink").addEventListener("click", function (e) {
    e.preventDefault();
    const skillsSection = document.getElementById("skillsSection");
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
      skillsSection.style.display = "block";
      skillsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      skillsSection.style.display = "none";
    }
  });

  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
      nav.classList.add("affix");
    } else {
      nav.classList.remove("affix");
    }
  });
</script>
