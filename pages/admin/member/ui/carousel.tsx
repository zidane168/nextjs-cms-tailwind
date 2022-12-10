import LeftArrow from '/public/img/cms1/carousel/left-arrow.svg'
import RightArrow from '/public/img/cms1/carousel/right-arrow.svg'
import Head from 'next/head'
import Image from 'next/image';

export default function carousel() {
  return (
    <>
      <Head> 
        <script>
        $(document).ready(function() { 
        let stop = false;
        let timer = setInterval(() => {
          if (!stop) {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').appendChild(lists[0]); 
          } else {
            clearInterval(timer)
          }
          
        }, 6000)

        document.getElementById('next').onclick = function(){
          let lists = document.querySelectorAll('.item');
          document.getElementById('slide').appendChild(lists[0]);
          stop = true;
        }

        document.getElementById('prev').onclick = function(){
          let lists = document.querySelectorAll('.item');
          document.getElementById('slide').prepend(lists[lists.length - 1]);
          stop = true;
        }

        })

        </script> 
      </Head>
    
      <div className="w-full p-2">
        <div className="container mx-auto">
          <div id="slide">
            <div className="item hover:cursor-pointer ">
              <a href="https://learn-tech-tips.blogspot.com/2022/09/how-to-create-docker-compose-for-mssql-database-service.html">
                <div className="image ">
                  <img
                    className="w-full object-cover"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6mTj-dv8mgyuse85fuH6NKVbGqZ4R8igNtA-D4rrF3iIvUbzgxPy8zqfGHQAt8o0myEhGp4uJLtfMmlHpQ1z6iAqiI3a1i7xJxPLPcAavQ_vkaTPCjA9QUF1z6twNsWbymqtjCDsnmY5w17w49tzUoO6eYC54Jx-Qoh_joP28Q2CqM4IkmkseC8aO/s1024/MSSQL.webp"
                  />
                </div>
                <div className="content">
                  <div className="right">
                    <h2>
                      {" "}
                      How to create a Docker Compose file for MSSQL Database
                      Service{" "}
                    </h2>
                    <div>
                      {" "}
                      Docker is a set of platform as a service products that use
                      OS-level virtualization to deliver software in packages
                      called containers. The service has both free and premium
                      tiers. The software that hosts the containers is called
                      Docker Engine. It was first started in 2013 and is developed
                      by Docker, Inc{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="item hover:cursor-pointer ">
              <a href="https://learn-tech-tips.blogspot.com/2022/11/fast-build-sal-category-items-with-tailwindcss-nextjs.html">
                <div className="image">
                  <img
                    className=" w-full object-cover"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju5ylBP8qf-d7jznEGySRspAu3JsRBgnYs40-2LxRYbaPHE3EnjBRQcI9WhNnPqE62ydy90-AadtpjeeYojujl5gG10dotHBKTq86XuQjpnzSaqkb8yYA9xoBNf8rQUm0QG2KkIqGtkivgkxNo_PHx5KM0FnmxJtBuWOzCVEvTOKNpg1Mnc_YpXew9/s1088/fast%20build%20sale%20cateogry%20items%20with%20tailwind%20css%20and%20nextjs.png"
                  />
                </div>
                <div className="content">
                  <div className="right">
                    <h2>
                      {" "}
                      Fast build sale category items with Tailwind CSS and NextJS{" "}
                    </h2>
                    <div>
                      {" "}
                      On this topic I will use Tailwind css (Slogan: Rapid build
                      modern website without ever leaving your HTML) - The slogan
                      is so impressive that I was fascinated and curious when I
                      first met, The Tailwind is very cool and very useful for
                      frontend developer now{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="item hover:cursor-pointer ">
              <a href="https://learn-tech-tips.blogspot.com/2022/02/how-to-easily-use-select2-into-cakephp.html">
                <div className="image">
                  <img
                    className=" w-full object-cover"
                    src="https://blogger.googleusercontent.com/img/a/AVvXsEjvAGb8y4pBeRAYqDSgU8xvYat1tFvMCqh10SOpJEPy-paJ95NRqJC1oP7Zxrc6JY9qvKW18s4YBSHnMPXUpo23GxIYez9LoZgDDm4avTugIYfMgJm9_KO_-GeJ10ns3HTetrscOsZALjK22MZXzaBYAka0W0Z6e0yPl0RVmI_T0zzdbrj-HRY7oEEm=s1161"
                  />
                </div>
                <div className="content">
                  <div className="right">
                    <h2> How to EASILY use Select2 into CAKEPHP </h2>
                    <div>
                      {" "}
                      This Topic I will share with you how to easy integrated
                      Select2 Library into CAKEPHP{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="directional">
            <button id="prev">
                <Image src={ LeftArrow } alt="Left Arrow" width="30px" height="30px"/>
            </button>
            <button id="next">
              <Image src={ RightArrow } alt="Left Arrow" width="30px" height="30px"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
