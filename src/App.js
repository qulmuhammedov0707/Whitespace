import './App.css';
import logo from './images/Logo.svg'
import heroImage from './images/heroImage.png'
import managementImage from './images/managementImage.jpg'
import managementDecoration from './images/managementDecoration.png'
import togetherImage from './images/togetherImage.jpg'
import togetherDecoration from './images/togetherDecoration.png'
import extensionImage from './images/extensionImage.jpg'
import needsImage from './images/needsImage.png'
import needsDecoration from './images/needsDecoration.png'
import dataDecoration from './images/dataDecoration.png'
import dataImage from './images/dataImage.png'
import sponsorsDecoration from './images/sponsorsDecoration.png'
import apple from './images/Apple.png'
import microsoft from './images/microsoft.png'
import slack from './images/Slack.png'
import google from './images/Google.png'
import appsImage from './images/appsImage.png'
import saysDecoration from './images/saysDecoration.png'
import cardImage from './images/cardImage.png'
import card1Avatar from './images/card1Bashara.png'
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

function App() {
  return (
    <div className="container">
      <div className='header'>
        <img src={logo} className='header__logo' alt='Bu yerda logotip bor'></img>
        <ul className='header__ul'>
          <li className='header__ul--li'>Products<BsChevronDown className='header__ul--li-icon'/></li>
          <li className='header__ul--li'>Solutions<BsChevronDown className='header__ul--li-icon'/></li>
          <li className='header__ul--li'>Resources<BsChevronDown className='header__ul--li-icon'/></li>
          <li className='header__ul--li'>Pricing<BsChevronDown className='header__ul--li-icon'/></li>
        </ul>
        <button className='header__loginButton'>Login</button>
        <button className='header__button'>Try Whitepace free<AiOutlineArrowRight className='header__button--icon' /></button>
      </div>
      <div className='hero'>
        <div className='hero__content'>
          <h1 className='hero__content--h1'>Get More Done with whitepace</h1>
          <p className='hero__content--p'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          <button className='hero__content--button'>Try Whitespace free<AiOutlineArrowRight className='hero__content--button-icon' /></button>
        </div>
        <img src={heroImage} alt='heroImage' className='heroImage'></img>
      </div>
      <div className='management'>
        <div className='management__content'>
          <h1 className='management__content--h1'>Project management</h1>
          <div className='management__content--image'>
            <img className='management__content--image-img' src={managementDecoration} alt='managementDecoration'></img>
          </div>
          <p className='management__content--p'>
            Images, videos, PDFs and audio files are supported. Create math expressions
            and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className='management__content--button'>Try whitepace free <AiOutlineArrowRight className='header__button--icon' /></button>
        </div>
        <img className='management__image' src={managementImage} alt='managementImage'></img>
      </div>
      <div className='together'>
        <img className='togethter__image' alt='togetherImage'src={togetherImage}></img>
        <div className='together__content'>
          <h1 className='together__content--h1'>Work together</h1>
          <div className='together__content--image'>
            <img className='together__content--image-img' src={togetherDecoration} alt='togetherDecoration'></img>
          </div>
          <p className='together__content--p'>
            With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </p>
          <button className='together__content--button'>Try it now<AiOutlineArrowRight className='header__button--icon' /></button>
        </div>
      </div>
      <div className='extension'>
        <div className='extension__content'>
          <h1 className='extension__content--h1'>Use as Extension</h1>
          <div className='extension__content--image'>
            <img className='extension__conteny--image--img' src={togetherDecoration} alt='extensionDecoration'></img>
          </div>
          <p className='extension__content--p'>
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className='extension__content--button'>Let's go<AiOutlineArrowRight className='header__button--icon' /></button>
        </div>
        <img className='extension__image'src={extensionImage} alt='extensionImage'></img>
      </div>
      <div className='needs'>
        <img src={needsImage} alt='needsImage' className='needs__img'></img>
        <div className='needs__content'>
          <h1 className='needs__content--h1'>
          Customise it
          to your needs
          </h1>
          <div className='needs__content--image'>
            <img src={needsDecoration} alt='needsDecoration' className='needs__content--image-img'></img>
          </div>
          <p className='needs__content--p'>
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown).
           Or create your own scripts and plugins using the Extension API.
          </p>
          <button className='needs__content--button'>Let`s Go</button>
        </div>
      </div>
      <div className='plan'>
        <h1 className='plan__h1'>Choose your plan</h1>
        <p className='plan__p'>
          Whether you want to get organized,
          keep your personal life on track, or boost workplace productivity,
          Evernote has the right plan for you.
        </p>
        <div className='planCard'>
        <div className='plan__free'>
          <p className='plan__free--p'>Free</p>
          <h4 className='plan__free--h4'>0$</h4>
          <p className='plan__free--p2'>Capture ideas and find them quickly</p>
          <ul className='plan__free--ul'>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Sync unlimited devices</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>10 GB monthly uploads</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>200 MB max. note size</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Customize Home dashboard and access <br></br>extra widgets</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Connect primary Google Calendar account</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className='plan__free--button'>Get started</button>
        </div>
        <div className='plan__free'>
          <p className='plan__free--p'>Personal</p>
          <h4 className='plan__free--h4'>11.99$</h4>
          <p className='plan__free--p2'>Capture ideas and find them quickly</p>
          <ul className='plan__free--ul'>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Sync unlimited devices</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>10 GB monthly uploads</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>200 MB max. note size</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Customize Home dashboard and access <br></br>extra widgets</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Connect primary Google Calendar account</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className='plan__free--button'>Get started</button>
        </div>
        <div className='plan__free'>
          <p className='plan__free--p'>Organization</p>
          <h4 className='plan__free--h4'>49.99$</h4>
          <p className='plan__free--p2'>Capture ideas and find them quickly</p>
          <ul className='plan__free--ul'>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Sync unlimited devices</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>10 GB monthly uploads</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>200 MB max. note size</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Customize Home dashboard and access <br></br>extra widgets</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Connect primary Google Calendar account</li>
            <li className='plan__free--ul-li'><TiTick  className='tick'/>Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className='plan__free--button'>Get started</button>
        </div>
        </div>
      </div>
      <div className='work'>
        <h1 className='work__h1'>Your work, everywhere you are</h1>
        <p className='work__p'>
          Access your notes from your computer, phone or tablet by
           synchronising with various services, including whitepace,
            Dropbox and OneDrive. The app is available on Windows, macOS, Linux,
             Android and iOS. A terminal app is also available!
        </p>
        <button className='work__button'>Try Taskey <AiOutlineArrowRight className='header__button--icon' /> </button>
      </div>
      <div className='data'>
        <div className='data__content'>
          <h1 className='data__content--h1'>100% your data</h1>
          <img src={dataDecoration} className='data__content--img' alt='dataDecoration'></img>
          <p className='data__content--p'>
            The app is open source and your notes are saved to an open format, so you'll always have access to them.
           Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
           </p>
           <button className='data__content--button'>Read more <AiOutlineArrowRight className='header__button--icon' /></button>
        </div>
        <img className='data__image' src={dataImage} alt='dataIamge'></img>
      </div>
      <div className='sponsors'>
        <div className='sponsors__content'>
          <h1 className='sponsors__content--h1'>Our sponsors</h1>
          <img className='sponsors__content--img' alt='spomsors__image' src={sponsorsDecoration}></img>
        </div>
        <div className='sponsors__images'>
          <img src={apple} alt='appleLogo' className='sponsors__images--apple'></img>
          <img src={microsoft} alt='microsoftLogo' className='sponsors__images--microsoft'></img>
          <img src={slack} alt='slackLogo' className='sponsors__images--slack'></img>
          <img src={google} alt='googleLogo' className='sponsors__images--google'></img>
        </div>
      </div>
      <div className='apps'>
        <img className='apps__img' src={appsImage} alt='appsImage'></img>
        <div className='apps__content'>
          <h1 className='apps__content--h1'>Work with Your Favorite Apps Using whitepace</h1>
          <p className='apps__content--p'>
            Whitepace teams up with your
           favorite software. Integrate with over 1000+ apps with Zapier
            to have all the tools you need for your project success.
          </p>
          <button className='apps__content--button'>Read More <AiOutlineArrowRight className='header__button--icon' /> </button>
        </div>
      </div>
      <div className='says'>
        <h1 className='says__h1'>What Our Clients Says</h1>
        <img className='says__img' alt='SaysImg' src={saysDecoration} ></img>
        <div className='says__cards'>
          <div className='says__cards--card1'>
            <img className='says__cards--card1-img' alt='nothing' src={cardImage}></img>
            <p className='says__cards--card1-p'>
              Whitepate is designed as a collaboration tool for businesses 
              that is a full project management solution.
            </p>
            <hr className='says__cards--card1-hr'></hr>
            <div className='avatar'>
              <img className='avatar__img' src={card1Avatar} alt='card1Avatar'></img>
              <div className='a'>
              <p className='avatar__p'>Oberon Shaw, MCH</p>
              <p className='avatar__p2'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
          <div className='says__cards--card1'>
            <img className='says__cards--card1-img' alt='nothing' src={cardImage}></img>
            <p className='says__cards--card1-p'>
              Whitepate is designed as a collaboration tool for businesses 
              that is a full project management solution.
            </p>
            <hr className='says__cards--card1-hr'></hr>
            <div className='avatar'>
              <img className='avatar__img' src={card1Avatar} alt='card1Avatar'></img>
              <div className='a'>
              <p className='avatar__p'>Oberon Shaw, MCH</p>
              <p className='avatar__p2'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
          <div className='says__cards--card1'>
            <img className='says__cards--card1-img' alt='nothing' src={cardImage}></img>
            <p className='says__cards--card1-p'>
              Whitepate is designed as a collaboration tool for businesses 
              that is a full project management solution.
            </p>
            <hr className='says__cards--card1-hr'></hr>
            <div className='avatar'>
              <img className='avatar__img' src={card1Avatar} alt='card1Avatar'></img>
              <div className='a'>
              <p className='avatar__p'>Oberon Shaw, MCH</p>
              <p className='avatar__p2'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
