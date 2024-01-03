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
  Costumer,
} from "./components";
import "./main.scss";

const footerData = [
  {
    companyTitle: "Company",
    company: ["About", "Testimonials", "Find a doctor", "Apps"],
  },
  {
    regionTitle: "Region",
    region: ["Indonesia", "Singapore", "Hongkong", "Canada"],
  },
  {
    helpTitle: "Help",
    help: ["Help center", "Contact support", "Instructions", "How it work"],
  },
];

const ourServicesData = [
  {
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    url: "/search.png",
  },
  {
    title: "Online pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
    url: "/pharmacy.png",
  },
  {
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    url: "/consultation.png",
  },
  {
    title: "Details Info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    url: "/details.png",
  },
  {
    title: "Emergency care",
    description: "You can get 24/7 urgent care for yourself or your children",
    url: "/emergency.png",
  },
  {
    title: "Tracking",
    description: "Track and save your medical history and health data",
    url: "/tracking.png",
  },
];

const articleData = [
  {
    url: "/image1.png",
    cardTitle: "Disease detection, check up in the laboratory",
    description:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
    buttonText: "Read more",
  },
  {
    url: "/image2.png",
    cardTitle: "Disease detection, check up in the laboratory",
    description:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
    buttonText: "Read more",
  },
  {
    url: "/image2.png",
    cardTitle: "Disease detection, check up in the laboratory",
    description:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
    buttonText: "Read more",
  },
  
];

function Homepage() {
  return (
    <>
      <Header />

      <main className="">
        <section className="section-hero">
          <Image
            className="element"
            src="/element.png"
            alt="element"
            width={130}
            height={120}
          />
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
              {ourServicesData.map((service, index) => (
                <OurServicesCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  url={service.url}
                />
              ))}
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

        <section className="section-costumer">
          <div className="container">
            <div className="section-costumer__body">
              <Image
                className="section-costumer__body-element1"
                src="/group.png"
                alt="element"
                width={130}
                height={120}
              />
              <Image
                className="section-costumer__body-element2"
                src="/element.png"
                alt="element"
                width={130}
                height={120}
              />
              <SubTitle title="What our customer are saying" />
              <Costumer
                url="/customer-image.png"
                title="Edward Newgate"
                subTitle="Founder Circle"
                description="“Our dedicated patient engagement app and 
                web portal allow you to access information instantaneously (no tedeous form, long calls, 
                or administrative hassle) and securely”"
              />
            </div>
          </div>
        </section>

        <section className="section-article">
          <SubTitle title="Check out our latest article" />
          <Image
            className="section-article-vector"
            src="/vector2.png"
            alt="element"
            width={578}
            height={557}
          />
          <div className="container">
            <div className="section-article__body">
              <Image
                className="section-article__body-element1"
                src="/element.png"
                alt="element"
                width={130}
                height={120}
              />

              {articleData.map((article, index) => (
                <Article
                  key={index}
                  url={article.url}
                  cardTitle={article.cardTitle}
                  description={article.description}
                  buttonText={article.buttonText}
                />
              ))}
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
          companyTitle={footerData[0].companyTitle}
          company={footerData[0].company}
          regionTitle={footerData[1].regionTitle}
          region={footerData[1].region}
          helpTitle={footerData[2].helpTitle}
          help={footerData[2].help}
        />
      </footer>
    </>
  );
}

export default Homepage;
