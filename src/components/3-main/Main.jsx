import { useState } from 'react'
import  './Main.css'
import Zoom from 'react-reveal/Zoom';


const myProjects=[
  {index:1,cat:'html&css',imgPath:'./1.jpg',title:'Project Name 1 :',subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad praesentium nam! Totam sapiente vitae porro dolores, maiores, autem pariatur fuga doloribus.',link:'#',githubLink:'#',moreLink:'#'},
  {index:2,cat:'react',imgPath:'./1.jpg',title:'Project Name 2 :',subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad praesentium nam! Totam sapiente vitae porro dolores, maiores, autem pariatur fuga doloribus.',link:'#',githubLink:'#',moreLink:'#'},
  {index:3,cat:'js',imgPath:'./1.jpg',title:'Project Name 3 :',subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad praesentium nam! Totam sapiente vitae porro dolores, maiores, autem pariatur fuga doloribus.',link:'#',githubLink:'#',moreLink:'#'},
  {index:4,cat:'js',imgPath:'./1.jpg',title:'Project Name 4 :',subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad praesentium nam! Totam sapiente vitae porro dolores, maiores, autem pariatur fuga doloribus.',link:'#',githubLink:'#',moreLink:'#'},
  {index:5,cat:'js',imgPath:'./1.jpg',title:'Project Name 5 :',subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad praesentium nam! Totam sapiente vitae porro dolores, maiores, autem pariatur fuga doloribus.',link:'#',githubLink:'#',moreLink:'#'},


]

const Main = () => {
   const [buttonActive, setbuttonActive] =useState("all");
   const [arr, setarr] = useState(myProjects)
   const filterByStatus= (cate)=>{
        if(cate==='all'){
          setbuttonActive('all')
          setarr(myProjects);
        }else{
          setbuttonActive(cate)
          const newArr=myProjects.filter((item)=>{
            return item.cat ==cate
          })
          setarr(newArr);
        }
   }
  return (
    <main className="flex ">
      <section className="left-section flex ">
        
        <button onClick={()=>{filterByStatus("all")}} className={buttonActive==='all' ?"active":""}>All Prjects</button>
        
        
        <button onClick={()=>{
          filterByStatus("html&css")
          
        }} className={buttonActive==='html&css' ?"active":""}>HTML & CSS</button>
        
        
        <button onClick={()=>{filterByStatus("js")}} className={buttonActive==='js' ?"active":""}>JavaScript</button>
        
        
        <button onClick={()=>{filterByStatus("react")}} className={buttonActive==='react' ?"active":""}>React Js</button>
      </section>

      <section className="right-section flex">
        {arr.map((item)=>{
          return( <Zoom>
            <article key={item.index} className="card">
          <img width={265} src={item.imgPath} alt="" />
          <div style={{width:"265px"}} className="box">
            <h1 className="title">{item.title}</h1>
            <p className="subtitle">{item.subtitle}</p>
            <div className="icons flex">
              <div style={{gap:"15px"}} className="flex linko">
                <div className="icon icon-link"></div>
                <div className="icon icon-github"></div>
              </div>
              <a className="flex" href={item.moreLink}>
                more 
                <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>
        </Zoom>
          )
        })}

      </section>
    </main>
  );
};

export default Main;
