import HeroSection from '../../components/modules/home/HeroSection'
import AboutMeSection from '../../components/modules/home/AboutMeSection'
import BlogSection from '../../components/modules/home/BlogSection'
import ProjectsSection from '../../components/modules/home/ProjectsSection'
import { getBlogData } from '@/action/blogAction';
import { getProjectData } from '@/action/projectAction';










export default async function page() {
  const blogs = await getBlogData({limit:3,page:1}).then((res)=>res.data.data);
  const projects = await getProjectData({limit:4,page:1}).then((res)=>res.data.data);
  // const projects = await getAllProjects({limit:4,page:1});
  // console.log(blogs)
  return (
    <main >
      <HeroSection/>
      <AboutMeSection/>


      <BlogSection blogs={blogs}/>
      <ProjectsSection projects={projects}/>
    </main>
  )
}
