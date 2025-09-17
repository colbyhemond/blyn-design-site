import { client } from "../sanity/lib/client";


export default async function sitemap() {
  
    const links = [
    {
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`, // Replace with your homepage
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/about`, // Replace with your about page
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/services`, // Replace with your blog page
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/projects`, // Replace with your blog page
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/contact`, // Replace with your blog page
      lastModified: new Date(),
    },
  ]


    // const POSTS_QUERY = `*[ _type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{slug, publishedAt}`;
    // const posts = await client.fetch(POSTS_QUERY);
    // posts.forEach((post) => {
    //     links.push({
    //         url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug.current}`,
    //         lastModified: new Date(post.publishedAt),
    //     });
    // }); 

    const SERVICES_QUERY = `*[_type == "service" && defined(slug.current)]|order(_createdAt desc){slug, _updatedAt}`;
    const services = await client.fetch(SERVICES_QUERY);
    services.forEach((service) => {
        links.push({
            url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/services/${service.slug.current}`,
            lastModified: new Date(service._updatedAt),
        });
    });
    const PROJECTS_QUERY = `*[_type == "project" && defined(slug.current)]|order(_createdAt desc){slug, _updatedAt}`;
    const projects = await client.fetch(PROJECTS_QUERY);
    projects.forEach((project) => {
        links.push({
            url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/projects/${project.slug.current}`,
            lastModified: new Date(project._updatedAt),
        });
    });


  return links;
}