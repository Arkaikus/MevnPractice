<template>
  <Navbar />
  <DefaultHeader />
  <SvgFeatures />

  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Columns with icons</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#collection" />
          </svg>
        </div>
        <h2>Featured title</h2>
        <p>
          Paragraph of text beneath the heading to explain the heading. We'll
          add onto it with another sentence and probably just keep going until
          we run out of words.
        </p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#chevron-right" />
          </svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#people-circle" />
          </svg>
        </div>
        <h2>Featured title</h2>
        <p>
          Paragraph of text beneath the heading to explain the heading. We'll
          add onto it with another sentence and probably just keep going until
          we run out of words.
        </p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#chevron-right" />
          </svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#toggles2" />
          </svg>
        </div>
        <h2>Featured title</h2>
        <p>
          Paragraph of text beneath the heading to explain the heading. We'll
          add onto it with another sentence and probably just keep going until
          we run out of words.
        </p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#chevron-right" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Hanging icons</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#toggles2" />
          </svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#cpu-fill" />
          </svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#tools" />
          </svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
    </div>
  </div>

  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Custom cards</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div
          class="
            card card-cover
            h-100
            overflow-hidden
            text-white
            bg-dark
            rounded-5
            shadow-lg
          "
          :style="{
            backgroundImage:
              'url(' + require('@/assets/unsplash-photo-1.jpg') + ')',
          }"
        >
          <div
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              Short title, long jacket
            </h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill" />
                </svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3" />
                </svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="
            card card-cover
            h-100
            overflow-hidden
            text-white
            bg-dark
            rounded-5
            shadow-lg
          "
          :style="{
            backgroundImage:
              'url(' + require('@/assets/unsplash-photo-2.jpg') + ')',
          }"
        >
          <div
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              Much longer title that wraps to multiple lines
            </h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill" />
                </svg>
                <small>Pakistan</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3" />
                </svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <!-- Include assets image as background -->
        <div
          class="
            card card-cover
            h-100
            overflow-hidden
            text-white
            bg-dark
            rounded-5
            shadow-lg
          "
          :style="{
            backgroundImage:
              'url(' + require('@/assets/unsplash-photo-3.jpg') + ')',
          }"
        >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              Another longer title belongs here
            </h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill" />
                </svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3" />
                </svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container px-4 py-5" id="icon-grid">
    <h2 class="pb-2 border-bottom">Icon grid</h2>

    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
    >
      <div class="col d-flex align-items-start">
        <svg
          class="bi text-muted flex-shrink-0 me-3"
          width="1.75em"
          height="1.75em"
        >
          <use xlink:href="#bootstrap" />
        </svg>
        <div>
          <h4 class="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg
          class="bi text-muted flex-shrink-0 me-3"
          width="1.75em"
          height="1.75em"
        >
          <use xlink:href="#cpu-fill" />
        </svg>
        <div>
          <h4 class="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg
          class="bi text-muted flex-shrink-0 me-3"
          width="1.75em"
          height="1.75em"
        >
          <use xlink:href="#calendar3" />
        </svg>
        <div>
          <h4 class="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg
          class="bi text-muted flex-shrink-0 me-3"
          width="1.75em"
          height="1.75em"
        >
          <use xlink:href="#home" />
        </svg>
        <div>
          <h4 class="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg
          class="bi text-muted flex-shrink-0 me-3"
          width="1.75em"
          height="1.75em"
        >
          <use xlink:href="#speedometer2" />
        </svg>
        <div>
          <h4 class="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg
          class="bi text-muted flex-shrink-0 me-3"
          width="1.75em"
          height="1.75em"
        >
          <use xlink:href="#toggles2" />
        </svg>
        <div>
          <h4 class="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg
          class="bi text-muted flex-shrink-0 me-3"
          width="1.75em"
          height="1.75em"
        >
          <use xlink:href="#geo-fill" />
        </svg>
        <div>
          <h4 class="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg
          class="bi text-muted flex-shrink-0 me-3"
          width="1.75em"
          height="1.75em"
        >
          <use xlink:href="#tools" />
        </svg>
        <div>
          <h4 class="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import DefaultHeader from "@/components/DefaultHeader.vue";
import SvgFeatures from "@/components/Svg/Features.vue";

export default {
  name: "Features",
  components: {
    Navbar,
    Footer,
    DefaultHeader,
    SvgFeatures,
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
}
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #fff;
  border-radius: 0.75rem;
}

.icon-link {
  display: inline-flex;
  align-items: center;
}
.icon-link > .bi {
  margin-top: 0.125rem;
  margin-left: 0.125rem;
  transition: transform 0.25s ease-in-out;
  fill: currentColor;
}
.icon-link:hover > .bi {
  transform: translate(0.25rem);
}

.icon-square {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 0.75rem;
}

.rounded-4 {
  border-radius: 0.5rem;
}
.rounded-5 {
  border-radius: 1rem;
}

.text-shadow-1 {
  text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
}
.text-shadow-2 {
  text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
}
.text-shadow-3 {
  text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
}

.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>