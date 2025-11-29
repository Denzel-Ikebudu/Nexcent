import './hero.css'
import hero_illustration from '../../assets/hero-image.png'
import logo1 from '../../assets/Logo.png'
import logo2 from '../../assets/Logo1.png'
import logo3 from '../../assets/Logo (2).png'
import logo4 from '../../assets/Logo (3).png'
import logo5 from '../../assets/Logo (4).png'
import logo6 from '../../assets/Logo (5).png'
import logo7 from '../../assets/Logo (6).png'
import logo8 from '../../assets/Icon.png'
import logo9 from '../../assets/Icon (1).png'
import logo10 from '../../assets/Icon (2).png'
import rafiki from '../../assets/rafiki.png'
import f5_1 from '../../assets/f5-1.png'
import f5_2 from '../../assets/f5-2.png'
import f5_3 from '../../assets/f5-3.png'
import f5_4 from '../../assets/f5-4.png'
import nexcent_logo from '../../assets/nexcent-logo.png'



const Hero = () => {

  const companyLogo = [
    { id: 1, src: logo1 },
    { id: 2, src: logo2 },
    { id: 3, src: logo3 },
    { id: 4, src: logo4 },
    { id: 5, src: logo5 },
    { id: 6, src: logo6 },
    { id: 7, src: logo7 },
   
  ];

  const suitableArea = [
    { id: 1, src: logo8, head: 'Membership Organization', p: 'our membership management  software provides full automation of membership renewals and payments' },
    { id: 2, src: logo9, head: 'National Associations', p: 'our membership management  software provides full automation of membership renewals and payments' },
    { id: 3, src: logo10, head: 'Clubs And Groups', p: 'our membership management  software provides full automation of membership renewals and payments' }
  ];

  const frame5 = [
    { id: 1, src: f5_1, head: '2,245,341', p: 'Members' },
    { id: 2, src: f5_2, head: '46,328', p: 'Clubs' },
    { id: 3, src: f5_3, head: '828,867', p: 'Event bookings' },
    { id: 4, src: f5_4, head: '1,926,436', p: 'Payments' },
    
  ]

  return (
    <div className='general'>
    <div className='hero-section'>
      
      <div className='hero-right'>
        <img src={hero_illustration} alt="" />
      </div>
      <div className='hero-left'>
        <h1>Lessons and insights <br/> <span>from 8 years</span></h1>
        <p>where to grow your business as a photographer: site or social media?</p>

        <button>Register </button>
      </div>

    </div>

    <div className='client-section'>
      <h1>Our Clients</h1>
      <p>we have been working with some Fortune 500+ clients</p>
      
      <div className='logo-strip-container'>
        {companyLogo.map(logo => (
          <div key={logo.id} className='logo-item'>
            <img src={logo.src} alt="" className='company-logo' />
          </div>
        ))}
      </div>

    </div>

    <div className='suitable-section'>
      <h1>Manage your entire community <br /> in a single system</h1>
      <p>Who is Nextcent suitable for?</p>
      
      <div className='suitable-content'>
        {suitableArea.map(logo => (
          <div key={logo.id} className='suitable-item'>
            <img src={logo.src} alt="" className='suitable-logo' />
            <h1>{logo.head}</h1>
            <p>{logo.p}</p>
          </div>
        ))}
      </div>
    </div>

    <div className='frame4'>
      <div className='frame4-right'>
        <h1>The unseen of spending three years at pixel grade</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque a deleniti praesentium temporibus id? At explicabo aliquam, voluptatem culpa assumenda soluta deleniti est illum fugit inventore, corporis unde? Harum quas maxime nisi nesciunt adipisci non, voluptas, doloremque fugiat eveniet repudiandae atque sapiente ipsam ab debitis dolorum quis perferendis vel!</p>
        <button>Learn More</button>
      <div className='frame4-left'>
        <img src={rafiki} alt="" />
      </div>
      </div>
    </div>

    <div className='frame5'>
        <div className='frame5-left'>
          <h1>Helping a local <br /> <span>business reinvent itself</span></h1>
          <p>We reached here with our hardwork and dedication</p>
        </div>
        <div className='frame5-right'>
          {frame5.map(i => (
            <div key={i.id} className='frame5-item'>
              <div className='item-image'>
                <img src={i.src} alt="" />
              </div>
              <div className='frame5-texts'>
                <h1>{i.head}</h1>
                <p>{i.p}</p>
              </div>
            </div>
          ))}
        </div>
    </div>

    <div className='last-frame'>
      <div className='part1'>
        <div className='part1-IH'>
          <img src={nexcent_logo} alt="" />
          <h1 className='part1-IH-h1'>Nexcent</h1>
        </div>
        <p className='part1-p'>Copyright 2020 Landify UI Kit. <br /> All right reserved</p>
        <img src="" alt="" />
      </div>

      <div className='part2'>
        <h1 className='part1-IH-h1'>Company</h1>
        <p className='part1-p'>About us</p>
        <p className='part1-p'>Blog</p>
        <p className='part1-p'>Contact us</p>
        <p className='part1-p'>Pricing</p>
        <p className='part1-p'>Testimonials</p>
      </div>

      <div className='part3'>
        <h1 className='part1-IH-h1'>Support</h1>
        <p className='part1-p'>Help center</p>
        <p className='part1-p'>Terms of service</p>
        <p className='part1-p'>Legal</p>
        <p className='part1-p'>Privacy Policy</p>
        <p className='part1-p'>Status</p>
      </div>

      <div className='part4'>
        <h1 className='part1-IH-h1'>Stay up to date</h1>
        <input type="email" placeholder='Your email address'  />
      </div>
    </div>

    </div>
  )
};

export default Hero
