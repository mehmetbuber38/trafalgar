import React from "react";
import Image from "next/image";
import { Header, Footer } from "./layouts";
import {
  Hero,
  SubTitle,
  OurServicesCard,
  Providers,
  Download,
  Article,
} from "./components";
import "./main.scss";
import { Link } from "react-router-dom";

const footerCompanyData = [
  {
    company: ["About", "Testimonials", "Find a doctor", "Apps"],
  },
];

const footerRegionData = [
  {
    region: ["Indonesia", "Singapore", "Hongkong", "Canada"],
  },
];

const footerHelpData = [
  {
    help: ["Help center", "Contact support", "Instructions", "How it work"],
  },
];

function Homepage() {
  return (
    <>
      <Header />

      <main className="">
        <section className="section-hero">
          <Image src="/element.png" alt="element" width={130} height={120} />
          <Hero
            title="Virtual healthcare 
            for you"
            description="Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone"
            buttonText="Consult today"
            url="/hero-photo.png"
          />
        </section>

        <section className="section-ourServices">
          <SubTitle
            title="Our services"
            description="We provide to you the best choiches for you. 
            Adjust it to your health needs and make sure your undergo
             treatment with our highly qualified doctors you can consult with us
              which type of service is suitable for your health"
          />

          <div className="section-ourServices__image">
            <Image src="/Vector.png" alt="element" width={930} height={670} />
          </div>

          <div className="container">
            <div className="section-ourServices__body">
              <OurServicesCard
                url="/search.png"
                title="Search doctor"
                description="Choose your doctor from thousands of specialist, general, and trusted hospitals"
              />
              <OurServicesCard
                url="/pharmacy.png"
                title="Online pharmacy"
                description="Buy  your medicines with our mobile application with a simple delivery system"
              />
              <OurServicesCard
                url="/consultation.png"
                title="Consultation"
                description="Free consultation with our trusted doctors and get the best recomendations"
              />
              <OurServicesCard
                url="/details.png"
                title="Details info"
                description="Free consultation with our trusted doctors and get the best recomendations"
              />
              <OurServicesCard
                url="/emergency.png"
                title="Emergency care"
                description="You can get 24/7 urgent care for yourself or your children and your
                lovely family"
              />
              <OurServicesCard
                url="/tracking.png"
                title="Tracking"
                description="Track and save your medical history and health data "
              />
            </div>
          </div>

          <div className="section-ourServices__button">
            <button>Learn more</button>
          </div>
        </section>

        <section className="section-providers">
          <Providers
            url="/providers-photo.png"
            title="Leading healthcare providers"
            description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
            in the solutions we deliver"
            buttonText="Learn more"
          />
        </section>

        <section className="section-download">
          <Download
            title="Download our mobile apps"
            description="Our dedicated patient engagement app and 
            web portal allow you to access information instantaneously (no tedeous form, long calls, 
            or administrative hassle) and securely"
            buttonText="Download"
            url="/download-image.png"
          />
        </section>

        <section className="section-article">
          <SubTitle title="Check out our latest article" />

          <div className="container">
            <div className="section-article__body">
              <Article
                url="/image1.png"
                cardTitle="Disease detection, check 
            up in the laboratory"
                description="In this case, the role of the health laboratory is very important to do
          a disease detection..."
                buttonText="Read more"
              />
              <Article
                url="/image2.png"
                cardTitle="Disease detection, check up"
                description="In this case, the role of the health laboratory is very important to do
          a disease detection..."
                buttonText="Read more"
              />
              <Article
                url="/image3.png"
                cardTitle="Disease detection, check up"
                description="In this case, the role of the health laboratory is very important to do
          a disease detection..."
                buttonText="Read more"
              />
            </div>
          </div>

          <div className="section-article__button">
            <button>Wiev all</button>
          </div>
        </section>
      </main>

      <footer>
        <Footer
          title="Trafalgar"
          description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
        for everyone"
          links="©Trafalgar PTY LTD 2020. All rights reserved"
          companyTitle="Company"
          company={footerCompanyData[0].company}
          regionTitle="Region"
          region={footerRegionData[0].region}
          helpTitle="Help"
          help={footerHelpData[0].help}
        />
      </footer>
    </>
  );
}

export default Homepage;
