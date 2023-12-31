import style from "./CountrySlider.module.css";
import antigua_flag from "../../assets/antigua_flag.webp";
import dominica_flag from "../../assets/dominica_flag.webp";
import grenada_flag from "../../assets/grenada_flag.webp";
import malta_flag from "../../assets/malta_flag.webp";
import portugal_flag from "../../assets/portugal_flag.webp";
import stkitts_flag from "../../assets/stkitts_flag.webp";
import turkey_flag from "../../assets/turkey_flag.webp";
import usa_flag from "../../assets/usa_flag.webp";
import antiguaBackground from "../../assets/antigua_barbuda.webp";
import dominicaBackground from "../../assets/dominica.webp";
import grenadaBackground from "../../assets/grenada.webp";
import maltaBackground from "../../assets/Malta.webp";
import portugalBackground from "../../assets/portugal.webp";
import stkittsBackground from "../../assets/st_kitts.webp";
import turkeyBackground from "../../assets/turkiye.webp";
import usaBackground from "../../assets/usa.webp";
import { useState } from "react";
import Button from "../../genericComponents/Button/Button";

function CountrySlider() {
  const antiguaContent = {
    title: "Antigua and Barbuda",
    bodyText:
      "As one of the most popular second citizenship programs in the Caribbean region, Antigua and Barbuda offer many advantages and opportunities. This program not only helps applicants secure stable residency rights, but also provides a range of benefits including visa convenience, asset protection, and tax advantages, making it a highly attractive choice.",
    ad_1: "3 Months",
    ad_2: "4 Generations",
    ad_3: "Starting With USD100,000",
    background: antiguaBackground,
    to: "/citizenship/antigua",
  };

  const dominicaContent = {
    title: "Dominica",
    bodyText:
      "Dominican Passport provides visa-free or visa-on-arrival entry into more than 130 countries and regions. Additionally, the approval speed for Dominican passports is relatively fast, usually requiring only 3 months. Compared to programs from other countries, the Dominican citizenship by investment requires a relatively low investment amount and has a simpler and faster procedure.",
    ad_1: "3 Months",
    ad_2: "130+ Visa-Free Countries",
    ad_3: "Starting With USD100,000",
    background: dominicaBackground,
    to: "/citizenship/dominica",
  };

  const grenadaContent = {
    title: "Grenada",
    bodyText:
      "A Grenadian passport has a high level of global mobility, allowing visa-free access to more than 140 countries, and global account opening. Grenada is one of the Commonwealth member countries, with a stable democratic political system and taxation. The approval speed of Grenada's investment citizenship program is relatively fast, usually only requiring 3-4 months to obtain Grenadian nationality and passport.",
    ad_1: "4 Months",
    ad_2: "130+ Visa-Free Countries",
    ad_3: "Starting With USD150,000",
    background: grenadaBackground,
    to: "/citizenship/grenada",
  };

  const maltaContent = {
    title: "Malta",
    bodyText:
      "Malta's investment citizenship program is one of the most well-known globally, requiring applicants to make certain investments to obtain Maltese nationality. In general, Malta's investment citizenship program requires a high investment amount and has a longer process, but it offers an EU passport and a high degree of visa freedom, hence it's favored by investors.",
    ad_1: "12 Months",
    ad_2: "186 Visa-Free Countries",
    ad_3: "Starting With 950,000 Euros",
    background: maltaBackground,
    to: "/citizenship/malta",
  };

  const portugalContent = {
    title: "St. Lucia",
    bodyText:
      "St. Lucia lies in the eastern Caribbean Sea, northwest of Barbados and south of Martinique. A volcanic island mostly covered in rainforest, it is famous for its twin peaks — the Pitons — and its magical beaches. St. Lucia is a member of the Commonwealth and CARICOM and has excellent air links to Europe and North America.",
    ad_1: "3-4 Months",
    ad_2: "146 Visa-Free Countries",
    ad_3: "Starting With $100,000",
    background: portugalBackground,
    to: "/citizenship/portugal",
  };

  const stkittisContent = {
    title: "St. Kitts and Nevis",
    bodyText:
      "St. Kitts and Nevis Passport provides visa-free travel, asset protection, tax advantages, etc. These benefits can provide applicants with more opportunities and advantages in international business and investments. Moreover, the approval speed of St. Kitts' second citizenship program is relatively fast, usually only taking 2-3 months. ",
    ad_1: "4 Months",
    ad_2: "139+ Visa-Free Countries",
    ad_3: "Starting With $250,000",
    background: stkittsBackground,
    to: "/citizenship/stkitts",
  };

  const turkeyContent = {
    title: "Turkey",
    bodyText:
      "Turkey is a country uniquely located on the Eurasian continent, and its second citizenship program also has many advantages. As a country with diverse culture, advanced economy, and strategic location, Turkey's second citizenship can bring applicants numerous benefits, including visa-free travel, asset protection, and tax advantages. ",
    ad_1: "8 Months",
    ad_2: "US E-2 Visa",
    ad_3: "Starting With $300,000",
    background: turkeyBackground,
    to: "/citizenship/turkey",
  };

  const usaContent = {
    title: "United States",
    bodyText:
      "The United States, a global superpower, attracts countless high-net-worth individuals with its comprehensive advantages and passport strength. High-quality family life, superior real estate, tax, and investment environment make your family life more stable. Additionally, U.S. educational resources are world-leading, with top universities such as Harvard and Yale, providing broad development space for children.",
    ad_1: "3 - 5 years",
    ad_2: "180+ Visa-Free Countries",
    ad_3: "Starting With $800,000",
    background: usaBackground,
    to: "/citizenship/usa",
  };

  const [contentList, setContentList] = useState([
    antiguaContent,
    dominicaContent,
    grenadaContent,
    maltaContent,
    portugalContent,
    stkittisContent,
    turkeyContent,
    usaContent,
  ]);
  const [sliderShowIndex, setSliderShowIndex] = useState(0);

  return (
    <article className={style.container}>
      <div className={style.flags}>
        <img src={antigua_flag} alt="" />
        <img src={dominica_flag} alt="" />
        <img src={grenada_flag} alt="" />
        <img src={malta_flag} alt="" />
        <img src={portugal_flag} alt="" />
        <img src={stkitts_flag} alt="" />
        <img src={turkey_flag} alt="" />
        <img src={usa_flag} alt="" />
      </div>
      {contentList.map((item, index) => (
        <div
          key={index}
          className={style.slide}
          style={
            {
              "--slider-translateX": `${-(sliderShowIndex - index) * 88}%`,
            } as React.CSSProperties
          }
        >
          <div
            className={style.item}
            style={
              {
                "--slider-background": `url(${item.background})`,
              } as React.CSSProperties
            }
          >
            <h2 className={style.title}>{item.title}</h2>
            <p className={style.text}>{item.bodyText}</p>
            <div className={style.adWrapper}>
              <p className={style.ad_1}>{item.ad_1}</p>
              <p className={style.ad_2}>{item.ad_2}</p>
              <p className={style.ad_3}>{item.ad_3}</p>
            </div>
            <Button text="Learn More" containerStyle={style.button} />
          </div>
        </div>
      ))}
    </article>
  );
}

export default CountrySlider;
