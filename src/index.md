---
title: Home
layout: "base.njk"
hero:
  header: Exquisite Craftsmanship for Discerning Clients
  content: We transform spaces into luxurious environments...
  image: "./assets/imgs/IMG_1655 Large.jpg"
  cta:
    - label: "View our Work"
      url: "/projects"
    - label: "Get In Touch"
      url: "/contact"
---

{% include "./components/navbar.njk" %}
{% include "./components/hero.njk" %}
{% include "./components/projectlist.njk" %}
{% include "./components/testimonials.njk" %}
{% include "./components/calltoaction.njk" %}
{% include "./components/footer.njk" %}

