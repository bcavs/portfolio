const path = require('path');

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
const { createPage } = actions
const pageTemplate = path.resolve(`./src/templates/employerPage.js`)

data = [
    {
        path: "/grubhub",
        title: "Grubhub",
        date: "September 2019 \u2014 Present",
        jobDescription: "Currently employed at Grubhub, I work on a small team responsible for maintaining and creating the websites and web apps for the marketing team. Below are some of the main websites and apps I work with on a daily basis. My team is in charge of handling everything from small updates and bug fixes to full site redesigns and redevelopments for all of these domains. Our current largest project is a complete redevelopment of the Grubhub Corporate website, modernizing the site from an outdated Wordpress setup to a lean and fast Gatsby website. In addition to these websites, the team is responsible for creating landing pages for marketing campaigns, developing custom marketing emails, as well as any other web related tasks the marketing team finds a need for. We've developed in-house apps for email development and deeplink generation and set up microsites for campaigns with longer lifespans. We're a one-stop shop for all web development related topics for the marketing team and beyond.",
        sites: [
            { 
                url: "blog.grubhub.com",
                link: "https://blog.grubhub.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008212/Work%20Site%20Screenshots/Blog_ijhcgq.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{ 
                url: "driver.grubhub.com",
                link: "https://driver.grubhub.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008225/Work%20Site%20Screenshots/Driver_nubzyl.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{ 
                url: "corporate.grubhub.com",
                link: "https://corporate.grubhub.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008221/Work%20Site%20Screenshots/Corporate_hs1h44.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{ 
                url: "restauranther.com",
                link: "https://restauranther.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008211/Work%20Site%20Screenshots/RestaurantHER_uqmkl9.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{ 
                url: "get.grubhub.com",
                link: "https://get.grubhub.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008209/Work%20Site%20Screenshots/Get_bkxs1i.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{
                url:"Internal app at Grubhub",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008197/Work%20Site%20Screenshots/Linking-Park_e6elzp.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            }
        ]
    },
    {
        path: "/hfpg",
        title: "Heartland FPG",
        date: "May 2018 \u2014 June 2019",
        jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        sites: [
            { 
                url: "javahouse.com",
                link: "https://javahouse.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008218/Work%20Site%20Screenshots/Javahouse_bw1tfc.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{
                url: "splenda.com",
                link: "https://splenda.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008216/Work%20Site%20Screenshots/Splenda_klx1p7.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{
                url: "promisebeverages.com",
                link: "https://promisebeverages.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008218/Work%20Site%20Screenshots/Promise_qs9bbw.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            }
        ]
    },
    {
        path: "/other",
        title: "Personal, Freelance, and Other Projects",
        date: "2016 \u2014 Present",
        jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim.",
        sites: [
            { 
                url: "thevaultrox.com",
                link: "https://thevaultrox.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008223/Work%20Site%20Screenshots/The-Vault_btnjoo.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{
                url: "dunbarsocial.com",
                link: "https://dunbarsocial.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008200/Work%20Site%20Screenshots/Dunbar_gkcnci.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{
                url: "Aubry Lane iOS App",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008218/Work%20Site%20Screenshots/Aubry-Lane_brse2u.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            },{
                url: "dailydigitalchallenge.com",
                link: "https://dailydigitalchallenge.com/",
                imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1622008221/Work%20Site%20Screenshots/Daily-Digi_nj6eqw.png",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus lorem, non cursus tellus consequat ut. Donec id egestas risus. Nullam ultrices justo neque, ac fermentum mauris tempor placerat. Vestibulum ut tellus sollicitudin, faucibus neque quis, suscipit lacus. Mauris dignissim felis magna, vitae tempor elit vestibulum nec. Quisque mattis blandit tellus sit amet consequat. Suspendisse libero tortor, pretium vitae cursus ut, venenatis eu neque. Nam condimentum tempor rhoncus. Nam nec fermentum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id libero ac orci malesuada consectetur nec quis enim."
            }
        ]
    }
]
data.forEach(node => {
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