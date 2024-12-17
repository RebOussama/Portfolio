import { useState } from 'react'
import  './Main.css'


const myProjects=[
  {index:1,cat:'html&css',imgPath:'./1.png',title:'Leon',subtitle:'A modern, minimalistic website template for "Leon" agency, showcasing services, projects, and contact details with a clean design.',link:'https://reboussama.github.io/Leon/',githubLink:'https://github.com/RebOussama/Leon',moreLink:'#'},
  {index:2,cat:'html&css',imgPath:'./2.png',title:'Sushiman',subtitle:'A clean, modern website template for "Sushiman," featuring Japanese food and drinks with sections for menu, services, and contact details.',link:'https://reboussama.github.io/Sushiman/',githubLink:'https://github.com/RebOussama/Sushiman',moreLink:'#'},
  {index:3,cat:'react',imgPath:'./3.png',title:'.REACT',subtitle:'A sleek, modern landing page for ".REACT," offering data analytics solutions with different pricing plans and a simple, professional design.',link:'https://reboussama.github.io/.REACT/',githubLink:'https://github.com/RebOussama/.REACT',moreLink:'#'},
  {index:4,cat:'react',imgPath:'./4.png',title:'Portfolio',subtitle:'A minimalistic portfolio website showcasing creative projects with a clean design and sections for services, portfolio, and contact information.',link:'https://reboussama.github.io/Portfolio/',githubLink:'https://github.com/RebOussama/Portfolio',moreLink:'#'},
  {index:5,cat:'react',imgPath:'./5.png',title:'Rebooks',subtitle:'Rebooks" is an online marketplace for buying, selling, and exchanging books. It offers a simple platform for book lovers to find new and second-hand books',link:'https://reboussama.github.io/Rebooks/',githubLink:'https://github.com/RebOussama/Rebooks',moreLink:'#'},
  {index:6,cat:'js',imgPath:'./6.png',title:'Javascript Projects',subtitle:'Calculator,Hangman Game,Memory Game,Quiz App and Typing Test',link:'https://reboussama.github.io/Javascript-Projects/',githubLink:'https://github.com/RebOussama/Javascript-Projects',moreLink:'#'},
  

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
          return( 
            <article key={item.index} className="card">
          <img width={265} src={item.imgPath} alt="" />
          <div style={{width:"265px"}} className="box">
            <h1 className="title">{item.title}</h1>
            <p className="subtitle">{item.subtitle}</p>
            <div className="icons flex">
              <div style={{gap:"15px"}} className="flex linko">
                <a href={item.link} target="_blank" className="icon icon-link"></a>
                <a href={item.githubLink} target="_blank" className="icon icon-github"></a>
              </div>
              <a className="flex" href={item.moreLink}>
                more 
                <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>
          )
        })}

      </section>
    </main>
  );
};

export default Main;
