import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';


export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Aboutus /> */}
      <Digital />
      <Dedicated />
      {/* <Beliefs /> */}
      {/* <Wework /> */}
      <Ourteam />
      {/* <Featured /> */}
      {/* <Manage />  */}
      {/* <FAQ /> */}
      {/* <Testimonials /> */}
      {/* <Articles /> */}
      {/* <Joinus /> */}
      {/* <Insta /> */}                                                                               
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.378908227124!2d13.035541632349121!3d77.60936996196725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzA3LjciTiA1wrAyOCcwMy41Ilc!5e0!3m2!1sen!2sus!4v1618298271234!5m2!1sen!2sus" width="600" height="450" style={{width: '1000px', height: '400px', margin: '60px auto'}} loading="lazy"></iframe>
    </main>
  )
}
