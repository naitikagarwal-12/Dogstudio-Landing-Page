import { Canvas } from "@react-three/fiber";
import "./App.css";
import Dog from "./components/Dog";
import usa from "./assets/united-states-flag-icon.svg";
import mexico from "./assets/mexico-flag-icon.svg";
import { useState } from "react";

function App() {
  const languages = [
    { language: "English", flag: usa },
    { language: "Español", flag: mexico },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  return (
    <main>
      <div className="images">
        <img id="tomorrowland" src="/background/tomorrowland.png" />
        <img id="navy-pier" src="/background/navy-pier.png" />
        <img id="msi" src="/background/msi.png" />
        <img id="phone" src="/background/phone.png" />
        <img id="kikk" src="/background/kikk.png" />
        <img id="kennedy" src="/background/kennedy.png" />
        <img id="opera" src="/background/opera.png" />
      </div>
      <Canvas
        id="canvas-elem"
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Dog />
      </Canvas>
      <section id="section-1">
        <nav className="flex justify-between items-center w-full">
          <a href="#" className="w-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 401.23099 116.838"
            >
              <path d="M97.9212,84.4793c0-13.21301-7.2132-23.3924-25.54961-23.3924h-19.6172v46.7851h19.6172c18.3364,0,25.54961-10.1797,25.54961-23.3927Zm-13.3478,0c0,9.2356-5.1908,12.6737-12.404,12.6737h-6.6739v-25.3474h6.6739c7.2132,0,12.404,3.4381,12.404,12.6737Z"></path>
              <path d="M100.972,107.872h37.078v-10.6516h-24.33701v-8.0222h21.37v-10.112h-21.37v-7.348h23.73v-10.6513h-36.47099v46.7851Z"></path>
              <path d="M181.211,77.3335c0-11.7973-7.55-16.2466-19.28-16.2466h-20.29199v46.7851h12.741v-14.2919h7.55099c11.73,0,19.28-4.4493,19.28-16.2466Zm-13.213,0c0,4.5841-2.157,6.47169-7.34801,6.47169h-6.26999v-12.9434h6.26999c5.19101,0,7.34801,1.8876,7.34801,6.4717Z"></path>
              <path d="M182.601,72.0079h14.76401v35.86411h12.741v-35.86411h14.763v-10.921h-42.26801v10.921Z"></path>
              <path d="M219.575,101.66c0,4.23399,3.427,7.661,7.661,7.661,4.233,0,7.694-3.427,7.694-7.661,0-4.23331-3.461-7.69421-7.694-7.69421-4.23399,0-7.661,3.4609-7.661,7.69421Zm1.478,0c0-3.4941,2.755-6.35011,6.183-6.35011,3.427,0,6.216,2.856,6.216,6.35011,0,3.495-2.789,6.31699-6.216,6.31699-3.42799,0-6.183-2.822-6.183-6.31699Zm2.58701,3.797h2.42v-2.621h1.377l1.44501,2.621h2.621l-1.74701-3.091c.806-.336,1.41101-1.243,1.41101-2.251,0-1.781-1.14201-2.6211-3.091-2.6211h-4.436v7.9631Zm5.07401-5.309c0,.639-.403,.908-1.17601,.908h-1.478v-1.6804h1.478c.77301,0,1.17601,.2016,1.17601,.7724Z"></path>
              <path d="M48.0438,24.4527C48.0438,11.1965,40.807,.98386,22.4106,.98386H2.72925V47.9216H22.4106c18.3964,0,25.6332-10.2127,25.6332-23.4689Zm-13.3915,0c0,9.2658-5.2078,12.7152-12.4446,12.7152h-6.6957V11.7376h6.6957c7.2368,0,12.4446,3.4493,12.4446,12.7151Z"></path>
              <path d="M99.8921,24.4527C99.8921,9.84386,90.8292,.17226,75.2734,.17226s-24.6186,9.6716-24.6186,24.28044,9.0629,24.2805,24.6186,24.2805,24.6187-9.6716,24.6187-24.2805Zm-13.4591,0c0,7.8455-4.2609,13.5944-11.1596,13.5944s-11.1595-5.7489-11.1595-13.5944,4.2609-13.5943,11.1595-13.5943,11.1596,5.7488,11.1596,13.5943Z"></path>
              <path d="M175.40601,48.7332c12.715,0,20.696-5.9517,20.696-15.4205,0-7.7102-5.073-11.7006-12.98601-13.3238l-10.145-2.0966c-4.058-.8116-5.27499-2.0967-5.27499-4.1933,0-2.2996,2.367-4.1933,6.62801-4.1933,4.73399,0,8.183,2.029,8.52199,6.2899h12.57901c0-11.22716-9.468-15.62334-21.16901-15.62334-11.22699,0-19.411,5.61359-19.411,14.74414,0,7.7102,5.073,11.7006,12.98599,13.3238l10.145,2.0967c4.058,.8116,5.27501,2.0966,5.27501,4.1932,0,2.9759-2.908,4.6668-7.507,4.6668-5.20801,0-8.99501-2.7054-9.26601-7.575h-12.58c.27101,10.5508,7.44,17.1113,21.50801,17.1113Z"></path>
              <path d="M196.80901,11.9405h14.812V47.9216h12.782V11.9405h14.812V.98386h-42.40599V11.9405Z"></path>
              <path d="M263.302,48.7332c13.59399,0,21.16901-6.1547,21.16901-20.4254V.98386h-12.78302V28.3078c0,6.29-3.17899,9.5364-8.38599,9.5364-5.276,0-8.455-3.2464-8.455-9.5364V.98386h-12.782V28.3078c0,14.2707,7.575,20.4254,21.237,20.4254Z"></path>
              <path d="M332.995,24.4527c0-13.2562-7.237-23.46884-25.633-23.46884h-19.68201V47.9216h19.68201c18.396,0,25.633-10.2127,25.633-23.4689Zm-13.39099,0c0,9.2658-5.20801,12.7152-12.44501,12.7152h-6.69598V11.7376h6.69598c7.237,0,12.44501,3.4493,12.44501,12.7151Z"></path>
              <path d="M335.90399,47.9216h12.78302V.98386h-12.78302V47.9216Z"></path>
              <path d="M401.23099,24.4527c0-14.60884-9.06299-24.28044-24.61899-24.28044s-24.61899,9.6716-24.61899,24.28044,9.06299,24.2805,24.61899,24.2805,24.61899-9.6716,24.61899-24.2805Zm-13.45999,0c0,7.8455-4.26001,13.5944-11.159,13.5944s-11.16-5.7489-11.16-13.5944,4.26102-13.5943,11.16-13.5943,11.159,5.7488,11.159,13.5943Z"></path>
              <path d="M128.905,30.638h10.41501c-1.21701,4.802-5.74901,7.5074-11.22701,7.5074-7.169,0-11.904-5.2754-11.904-13.8649,0-7.8455,4.32899-13.5944,11.769-13.5944,4.464,0,8.31899,1.8938,9.40099,6.1547h13.59401c-1.48801-10.68614-10.88901-16.8408-23.26601-16.8408-15.758,0-24.95699,9.67161-24.95699,24.2805,0,14.6765,9.46899,24.2805,22.184,24.2805,7.237,0,11.76801-2.7054,14.88-6.5605v5.7489h11.29399V21.3046h-22.183v9.3334Z"></path>
              <path d="M30.4351,61.1758h-10.4155L0,116.838H10.3479L30.4351,61.1758Z"></path>
            </svg>
          </a>
          <div className="group text-white text-xl flex items-center justify-start gap-2 w-full max-w-70">
            <i className="ri-arrow-right-s-line text-red-500"></i>
            <p className="text-[14px] font-semibold">Our Showreel</p>
          </div>
          <div className="flex justify-end">
            <i className="ri-menu-3-line text-white text-2xl"></i>
          </div>
        </nav>

        <div className="h-screen flex justify-center items-center">
          <div className="flex gap-10 w-full">
            <div className="flex justify-end items-center md:text-[110px] font-bold text-white md:text-right w-[50%] font-gt-sectra leading-25">
              <h1>
                We
                <br />
                Make
                <br />
                Good
                <br />
                Shit
              </h1>
            </div>
            <div></div>
          </div>
          <div className="absolute top-135 -left-12 rotate-45 bg-red-400 w-[40rem] h-[1.1px] opacity-90"></div>
          <div className="absolute top-75 right-60 rotate-135 bg-red-400 w-[10rem] h-[1.1px] opacity-90"></div>
        </div>

        <div className="h-[350px] flex gap-10">
          <div className="md:min-w-[60%]"></div>
          <div className="flex justify-start text-white md:max-w-[50%]">
            <div className="flex flex-col gap-5 md:max-w-[20rem]">
              <h2 className="text-2xl opacity-90">
                Dogstudio is a multidisciplinary creative studio at the
                intersection of art, design and technology.
              </h2>
              <p className="font-extralight opacity-50">
                Our goal is to deliver amazing experiences that make people
                talk, and build strategic value for brands, tech, entertainment,
                arts & culture.
              </p>
              <div className="flex gap-1 font-semibold text-xs mt-7">
                <a href="#" id="social">
                  Facebook
                </a>{" "}
                {" / "}
                <a href="#" id="social">
                  Instagram
                </a>{" "}
                {" / "}
                <a href="#" id="social">
                  Dribbble
                </a>{" "}
                {" / "}
                <a href="#" id="social">
                  Twitter
                </a>{" "}
                {" / "}
                <a href="#" id="social">
                  Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-2">
        <div className="titles text-white tracking-[0.2rem]">
          <div className="heading">
            <div className="col1"></div>
            <small>FEATURED PROJECTS</small>
          </div>
          <div img-title="tomorrowland" className="title gap-15 items-start">
            <small className="col1 mt-2">2020 - ONGOING</small>
            <h1 className="col2 text-7xl font-extralight">Tomorrowland</h1>
          </div>
          <div img-title="navy-pier" className="title gap-15 items-start">
            <small className="col1 mt-2">2018 - TODAY</small>
            <h1 className="col2 text-7xl font-extralight">Navy Pier</h1>
          </div>
          <div img-title="msi" className="title gap-15 items-start">
            <small className="col1 mt-2">2015 - TODAY</small>
            <h1 className="col2 text-7xl font-extralight">MSI Chicago</h1>
          </div>
          <div img-title="phone" className="title gap-15 items-start">
            <small className="col1 mt-2">2016</small>
            <h1 className="col2 text-7xl font-extralight">
              This Was Louise's Phone
            </h1>
          </div>
          <div img-title="kikk" className="title gap-15 items-start">
            <small className="col1 mt-2">2012 - TODAY</small>
            <h1 className="col2 text-7xl font-extralight">
              KIKK Festival 2018
            </h1>
          </div>
          <div img-title="kennedy" className="title gap-15 items-start">
            <small className="col1 mt-2">2017</small>
            <h1 className="col2 text-7xl font-extralight">
              The Kennedy Center
            </h1>
          </div>
          <div img-title="opera" className="title gap-15 items-start">
            <small className="col1 mt-2">2016 - ONGOING</small>
            <h1 className="col2 text-7xl font-extralight">
              Royal Opera Of Wallonia
            </h1>
          </div>
        </div>
        <div className="absolute -right-25 rotate-135 bg-red-400 w-[40rem] h-[1.1px] opacity-90"></div>
      </section>
      <section id="section-3">
        <div className="bg-purple-600 w-50 h-50 rounded-full opacity-40 absolute z-1 top-150 left-45 blur-3xl"></div>
        <div className="bg-blue-900 w-85 h-85 rounded-full opacity-40 absolute z-1 top-130 left-80 blur-3xl"></div>
        <div className="bg-black w-screen h-110 rounded-full absolute z-2 bottom-0 blur-3xl"></div>
        <div className="relative z-0 w-full mt-[380px]">
          <div className="text-white max-w-[40%]">
            <small className="text-[9px] tracking-[4px] opacity-50">
              THIS IS HOW WE DO IT
            </small>
            <h1 className="font-gt-sectra text-5xl mt-7">
              We're crafting <br /> emotional <br /> experiences aimed <br />
              at improving <br /> results
            </h1>
          </div>
        </div>
        <div className="relative z-20 flex flex-col items-end text-white w-full">
          <div className="flex gap-15 text-md w-[45%]">
            <div>
              <p className="opacity-50 font-light">
                Dogstudio is a design & technology firm working globally from
                our offices based in Belgium and Chicago. Our strong focus on
                producing high quality & emotional brandings, digital products
                and experiences became a signature.
              </p>
              <div className="discover mt-10 flex flex-col items-start">
                <div className="font-semibold text-white -tracking-[0.5px]">
                  Discover our values
                </div>
                <div className="line bg-red-500 -translate-x-7 mt-2 w-[10rem] h-[2px]"></div>
              </div>
            </div>

            <p className="opacity-50 font-light">
              Dogstudio is a design & technology firm working globally from our
              offices based in Belgium and Chicago. Our strong focus on
              producing high quality & emotional brandings, digital products and
              experiences became a signature.
            </p>
          </div>
        </div>

        <div className="relative z-2 bg-red-600 rotate-45 w-[18rem] h-[1.1px]"></div>

        <div className="relative z-2 pb-5 w-full mt-25">
          <div className="flex justify-end font-gt-sectra text-white text-xl text-right w-full leading-6">
            <p className="cursor-default">
              We <br /> Make <br /> Good <br /> Shit
            </p>
          </div>
          <div className="text-white text-2xl mt-7">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between w-[50%]">
                <div>
                  Chicago <span className="text-red-600">.</span>
                </div>
                <div>
                  Amsterdam <span className="text-red-600">.</span>
                </div>
                <div>
                  Paris <span className="text-red-600">.</span>
                </div>
              </div>
              <div className="flex gap-1 font-extralight text-xs opacity-50 tracking-[1px]">
                <a href="#" id="social">
                  Fb
                </a>{" "}
                {" / "}
                <a href="#" id="social">
                  Ins
                </a>{" "}
                {" / "}
                <a href="#" id="social">
                  Dri
                </a>{" "}
                {" / "}
                <a href="#" id="social">
                  Tw
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white opacity-10 mt-16"></div>

          <div className="flex justify-between text-white mt-4 font-semibold text-[15px] -tracking-[0.8px]">
            <div className="flex gap-5 items-center">
              <small className="opacity-50">We'd love to hear from you</small>
              <div className="w-[2rem] h-[1px] bg-white opacity-25"></div>
              <small className="cursor-pointer">biz@dogstudio.be</small>
            </div>

            <div className="flex gap-5 items-center">
              <small className="opacity-50">We'd love to hear from you</small>
              <div className="w-[2rem] h-[1px] bg-white opacity-25"></div>
              <div className="relative flex gap-3 items-center p-1">
                <small className="opacity-50">Language:</small>

                <div
                  className="relative flex gap-3 items-center p-1"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <div className="flex gap-5 items-center cursor-pointer">
                    <div className="flex gap-2 items-center">
                      <img
                        src={selected.flag}
                        alt={selected.language}
                        className="w-4"
                      />
                      <small className="text-[10px]">{selected.language}</small>
                    </div>

                    <i className="ri-arrow-drop-down-line text-xl opacity-30"></i>
                  </div>

                  {open && (
                    <div className="absolute right-1 mb-5 min-w-[100px] overflow-hidden bg-black/90">
                      <div
                        onClick={() => {
                          setSelected(languages[1]);
                          setOpen(false);
                        }}
                        className="flex cursor-pointer items-center gap-2 px-2 py-0.5 border-t border-l border-r text-[13px] rounded-t border-white/40"
                      >
                        <img
                          src={languages[1].flag}
                          alt={languages[1].language}
                          className="w-4"
                        />
                        <small>{languages[1].language}</small>
                      </div>
                      <div
                        onClick={() => {
                          setSelected(languages[0]);
                          setOpen(false);
                        }}
                        className="flex cursor-pointer items-center gap-2 px-2 py-0.5 border-b text-[13px] border rounded-b border-white/40"
                      >
                        <img
                          src={languages[0].flag}
                          alt={languages[0].language}
                          className="w-4"
                        />
                        <small>{languages[0].language}</small>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
