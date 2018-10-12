//import axios from 'axios'

//import withCss from 'react-static/lib/plugins/withCssLoader'
//import withFiles from 'react-static/lib/plugins/withFileLoader'
import { myPresentations } from './src/data/presentations';
import { myProjects } from './src/data/projects';

console.log(myPresentations)
export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    //const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const presentations = myPresentations;
    const projects = myProjects;
    return [
      {
        path: '/',
        component: 'src/containers/Projects',
        getData: () => ({
          projects,
        })
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        path: '/presentations',
        component: 'src/containers/Presentations',
        getData: () => ({
          presentations,
        }),
        // children: presentations.map(presentation => ({
        //   component: 'src/containers/Presentation',
        //   getData: () => ({
        //     presentation,
        //   }),
        // })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  //webpack: [withCss, withFiles],
}
