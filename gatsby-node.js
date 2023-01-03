const path = require("path")

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/employerPage.js`)
  const tovalaSample = path.resolve(
    `./src/templates/work-samples/tovala/index.js`
  )

  data = [
    {
      path: "/foxtrot",
      title: "Foxtrot",
      date: "October 2021 \u2014 December 2022",
      jobDescription:
        "As the leader of the merchandising and discovery engineering team at Foxtrot, I developed and implemented various features to improve customer discovery and purchasing experience on the website, such as enhanced product detail pages and improved search functionality. I also created an artistic brand landing page to tell the story of Foxtrot and developed internal tools to improve cross-team collaboration and reduce lost inventory. In addition to these responsibilities, I mentored and managed junior engineers and interns, helping them learn our codebase and build new features such as web cafe pickup and a map view for our stores. I also proposed, documented, and implemented new patterns and practices to increase developer efficiency and designed and prototyped engaging features for customers, such as hidden Easter eggs with promo codes and collectible account badges.",
      sites: [
        {
          url: "foxtrotco.com",
          link: "https://foxtrotco.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1671559641/Work%20Site%20Screenshots/Screenshot_2022-12-20_at_12.06.21_PM_chjwtk.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "foxtrotco.com/our-story",
          link: "https://foxtrotco.com/our-story",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1671560268/Work%20Site%20Screenshots/Screenshot_2022-12-20_at_12.16.08_PM_htwezv.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
      ],
    },
    {
      path: "/grubhub",
      title: "Grubhub",
      date: "September 2019 \u2014 October 2021",
      jobDescription:
        "As a member of the web development team at Grubhub, I was responsible for maintaining and creating websites and web apps for the various internal marketing teams. My primary responsibilities included implementing updates, fixing bugs, and redesigning and redeveloping websites. One of my team's notable projects was the complete redevelopment of the Grubhub Corporate website, which involved modernizing the site from a Wordpress platform to a more efficient Gatsby website. In addition to these tasks, my team also created landing pages for marketing campaigns, developed custom marketing emails, and provided web development support for the marketing team and beyond. We also developed in-house apps for email development and deeplink generation, and set up microsites for longer-term campaigns. Overall, our team served as a one-stop shop for all web development needs within the organization.",
      sites: [
        {
          url: "blog.grubhub.com",
          link: "https://blog.grubhub.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008212/Work%20Site%20Screenshots/Blog_ijhcgq.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "driver.grubhub.com",
          link: "https://driver.grubhub.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008225/Work%20Site%20Screenshots/Driver_nubzyl.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "corporate.grubhub.com",
          link: "https://corporate.grubhub.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008221/Work%20Site%20Screenshots/Corporate_hs1h44.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "restauranther.com",
          link: "https://restauranther.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008211/Work%20Site%20Screenshots/RestaurantHER_uqmkl9.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "get.grubhub.com",
          link: "https://get.grubhub.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008209/Work%20Site%20Screenshots/Get_bkxs1i.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "Internal app at Grubhub",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008197/Work%20Site%20Screenshots/Linking-Park_e6elzp.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
      ],
    },
    {
      path: "/hfpg",
      title: "Heartland FPG",
      date: "May 2018 \u2014 June 2019",
      jobDescription:
        "At Heartland I was a solo web developer handling the websites listed below as well as custom developing all of the marketing emails for the various brands. The websites were primarily Wordpress based websites and the email development was originally just plain HTML/CSS however I intitiated the transition to using Foundation by Zurb to improve the email development experience and drastically speed up development time from about 1 week per email to about 1 day depending on complexity.",
      sites: [
        {
          url: "javahouse.com",
          link: "https://javahouse.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008218/Work%20Site%20Screenshots/Javahouse_bw1tfc.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "splenda.com",
          link: "https://splenda.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008216/Work%20Site%20Screenshots/Splenda_klx1p7.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "promisebeverages.com",
          link: "https://promisebeverages.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008218/Work%20Site%20Screenshots/Promise_qs9bbw.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
      ],
    },
    {
      path: "/other",
      title: "Personal, Freelance, and Other Projects",
      date: "2016 \u2014 Present",
      jobDescription:
        "As a primarily self-taught developer, personal and freelance projects allow me to further my skills and explore new areas of web development that may not be as relevant or applicable to what I do in my current job. Below are some of the projects I've worked on either personally or for clients/partners.",
      sites: [
        {
          url: "chefbrains.com",
          link: "https://chefbrains.com/",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1671560812/Work%20Site%20Screenshots/Screenshot_2022-12-20_at_12.26.45_PM_d4bk08.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "thevaultrox.com",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008223/Work%20Site%20Screenshots/The-Vault_btnjoo.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "dunbarsocial.com",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008200/Work%20Site%20Screenshots/Dunbar_gkcnci.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "Aubry Lane iOS App",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008218/Work%20Site%20Screenshots/Aubry-Lane_brse2u.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
        {
          url: "dailydigitalchallenge.com",
          imageSrc:
            "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008221/Work%20Site%20Screenshots/Daily-Digi_nj6eqw.png",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        },
      ],
    },
    {
      path: "/samples/tovala",
      title: "Tovala Work Sample",
    },
  ]
  data.forEach(node => {
    if (node.path === "/samples/tovala") {
      createPage({
        path: `${node.path}`,
        component: tovalaSample,
        context: {
          title: node.title,
          samples: node.samples,
        },
      })
      return
    }

    createPage({
      path: `${node.path}`,
      component: pageTemplate,
      context: {
        title: node.title,
        date: node.date,
        jobDescription: node.jobDescription,
        sites: node.sites,
      },
    })
  })
}
