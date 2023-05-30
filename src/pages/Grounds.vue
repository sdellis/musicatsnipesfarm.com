<template>
  <Layout>
    <aside class="sidebar-left">
    </aside>
    <article>
      <section id="about">
      <h1>About the Venue</h1>
      <!-- <div width="100%"> -->
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image alt="Music at Snipes Farm" src="~/snipes-logo.png" width="300px" fit="contain" />
      <!-- </div> -->
      <h2>History</h2>
      <p>Snipes Farm is a certified organic farm, located in Morrisville, PA and established in ?. For ? years the farm has been a family-friendly setting for music and good times. Music at Snipes Farm is a registered nonprofit with the mission of ?.
      </p>
    </section>
    <section id="getting_there">
      <h2>Getting There</h2>
      <blockquote>
        "Not all those who wander are lost."<br/>
        -- J.R.R. Tolkien
      </blockquote>
      <p>
        Getting to Snipes Farm is easy, but there are a few things you should know...
      </p>
      <h3>Parking</h3>
      <p>
        Campers and day trippers, please park in the designated areas upon arrival. There is no parking in the camping pasture. Please pack light and be prepared to transport your camping supplies to the pasture.
      </p>
      <h3>Coming and Going</h3>
      <p>
        Your wristband proves you have purchased a ticket and allows attendees to come and go as they see fit.
      </p>
    </section>
    <section id="enjoy">
      <h2>Enjoying the Music</h2>
      <h3>Shade and Seating</h3>
      <p>
        We encourage attendees to bring their own portable chairs. We provide a shade tent, and there are areas of the pasture with shade trees. Attendees are welcome to bring your own shade tent, but should be mindful to not block the view of other attendees.
      </p>
      <h3>Food and Beverages</h3>
      <p>
        While we encourage you to try out our wonderful family of vendors, attendees are allowed to bring and responsibly consume their own food and beverages on the premesis. Glass bottles are strictly prohibited.
      </p>
      <h3>Vendors</h3>
      <p>
        We provide a space for local and independently owned vendors of food and merchandise. Please consider shopping with them as supporting our vendors supports the venue.
      </p>
      <h3>Pets</h3>
      <p>
        With the exception of therapy animals, we have a strict policy of no pets of any kind for everyone's safety. Please contact us if you have a certified pet for those with disabilities.
      </p>
    </section>
    <section id="camping_info">
      <h2>Camping Information</h2>
      <p>One of the beautiful attributes of Music at Snipes Farm is the proximity to the main stage, so you can enjoy the music without leaving your campsite.
      </p>
      <h3>Designated Camping Areas</h3>
      <p>Camping takes place in the pasture and around camp fire areas. No cars are allowed in the camping area. </p>
      <h3>Water Access</h3>
      <p>The farm has two water pumps, located at ?. The water source is an underground aquafer and it is safe to drink. Please bring portable containers so you can bring water back to your campsite.</p>
      <h3>Bathrooms</h3>
      <p>The Port-a-johns are cleaned each morning. They are located on the Southeast corner of the pasture. A wheel-chair accessible bathroom is provided.</p>
      <h3>Grills and Fires</h3>
      <p>Campers may bring propane/gas grills for cooking. Charcoal grills and fires of any kind are strictly prohibited. Fires may only be set and controlled by event staff at designated locations.</p>
    </section>
    <section id="philosophy">
      <h2>Principles of Having A Real Good Time</h2>
      <p>
        Our guiding principles are one of the keys to our success. If you are visiting the farm, please reflect on these principles and help us ensure the safety and well being of others.
      </p>
      <p>
        <ul>
          <li>Leave the space cleaner than you found it.</li>
          <li>Assume best intentions.</li>
          <li>Be respectful and responsible neighbors.</li>
          <li>Look out for one another.</li>
          <li>Practice random acts of kindness.</li>
        </ul>
      </p>
    </section>
    </article>
    <aside class="sidebar-right">
      <nav class="section-nav">
        <ol>
          <li><a href="#about">About the Venue</a></li>
          <li><a href="#getting_there">Getting There</a></li>
          <li><a href="#enjoy">Enjoying the Music</a></li>
          <li><a href="#camping_info">Camping Information</a>
          <li><a href="#philosophy">Our Principles</a></li>
        </ol>
      </nav>
    </aside>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style>
/* Styles for sub-pages */

main {
  /* min-height: 100%; */
  width: 100%;
  display: grid;
  grid-template-columns: 0px auto 0px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "sidebar-2" "article" "sidebar-1";
  grid-gap: 1rem;
}

@media screen and (min-width: 600px) {
  main {
    grid-template-columns: 0px auto 250px;
    grid-template-areas: "sidebar-1 article sidebar-2";
  }
  .sidebar-right {
    display: block;
  }
}

.sidebar-right {
  grid-area: sidebar-2;
  padding-right: 20px;
  position: sticky;
  top: 0;
  height: 100vh;
  box-sizing: border-box;
  display: none;
}

.sidebar-left {
  grid-area: sidebar-1;
  padding-left: 20px;
  display: none;
}

article {
  grid-area: article;
  margin-top: -3rem;
  padding: 2rem;
  grid-column: 1 / span 3;
}

.media {
  grid-area: media;
  height:auto;
  grid-column: 1 / span 3;
  grid-row: 4 / 5;
}

@media screen and (min-width: 900px) {
  header {
    margin-bottom: -20px;
    height: 120px;
  }
  .welcome {
    width: 50%;
    margin: auto;
  }
  .subheader {
    height: 80px;
  }
  main>article {
      grid-column: article;
  }
  article {
    padding: 0;
    grid-column: 2 / span 1;
  }
  media {
    padding: 0;
    grid-column: 2 / span 1;
  }
  .sidebar-right {
    display: block;
  }

  .sidebar-left {
    display: block;
  }
  main {
    grid-template-columns: 250px auto 250px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "sidebar-1 article sidebar-2";
  }
}

.full-width {
  grid-area: full;
  height:auto;
  grid-column: 1 / span 3;
  grid-row: 1 / 2;
}

/* Full is using for full width out of the container */
main>div.full-width {
    grid-column: full;
}

/* Scrollspy nav */

/* 2. Make nav sticky */
main > nav {
  position: sticky;
  top: 2rem;
  align-self: start;
}

/* 3. ScrollSpy active styles (see JS tab for activation) */
.section-nav li.active > a {
  color: #333;
  font-weight: 500;
}

/* Sidebar Navigation */
.section-nav {
  margin-left: 2rem;
  padding-top: 1rem;
  border-left: 1px solid #efefef;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: .125rem 0;
  color: #ccc;
  transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */
}

.section-nav a:hover,
.section-nav a:focus {
  color: #666;
}

/** Poor man's reset **/
* {
  box-sizing: border-box;
}

nav h1 {
  font-weight: 300;
}

nav ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-left: 1rem;
}
article p, article h3 {
  padding-left: 2em;
}
</style>
