import Subtitle from "../components/subtitle";
import NormalText from "../components/NormalText";
import Section from "../components/section";
import SubtitleService from "../components/SubtitleServices";
import ImgServiceComponent from "../components/imgServices";
import BannerService from "../components/bannerService";
import ItemService from "../components/ItemService";
import { useState, useEffect, useRef } from "react";
import BannerTitle from "../components/BannerTitle";

function ServiceSection() {
  const [itemsVisible, setItemsVisible] = useState({
    typescript: false,
    github: false,
    react: false,
  });
  const bannerRef = useRef(null);

  useEffect(() => {
    const currentRef = bannerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          // Secuencia de animación de items
          setTimeout(() => {
            setItemsVisible((prev) => ({ ...prev, typescript: true }));
          }, 400); // Después del banner (0.4s)

          setTimeout(() => {
            setItemsVisible((prev) => ({ ...prev, github: true }));
          }, 800); // Después de typescript (0.4s + 0.4s)

          setTimeout(() => {
            setItemsVisible((prev) => ({ ...prev, react: true }));
          }, 1200); // Después de github (0.4s + 0.4s + 0.4s)
        } else if (entry.intersectionRatio === 0) {
          setItemsVisible({
            typescript: false,
            github: false,
            react: false,
          });
        }
      },
      {
        threshold: [0, 0.2],
        rootMargin: "0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Section id="service-section" background={"#0D1B3B"} height={"150vh"}>
      <Subtitle style={{ gridColumn: "2 / 4" }}>Services</Subtitle>
      <div style={{ gridRow: "3/5", gridColumn: "2 / 6" }}>
        <SubtitleService style={{ margin: "0" }}>
          Designs for any device
        </SubtitleService>
        <NormalText>
          <ul>
            <li>Web Design</li>
            <li>App Design</li>
            <li>Figma</li>
            <li>Webflow</li>
          </ul>
        </NormalText>
      </div>
      <ImgServiceComponent
        src="pc.png"
        alt="PC Image"
        gridColumn="8 / 13"
        gridRow="3 / 7"
        delay="1000ms"
      />
      <ImgServiceComponent
        src="laptop.png"
        alt="Laptop Image"
        gridColumn="7 / 11"
        gridRow="4 / 7"
        delay="600ms"
      />

      <ImgServiceComponent
        src="Smartphone.png"
        alt="Mobile Image"
        gridColumn="7 / 9"
        gridRow="3 / 7"
      />

      <div
        ref={bannerRef}
        style={{
          gridColumn: "1 / 11",
          gridRow: "8 / 12",
          position: "relative",
        }}
      >
        <BannerService>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <ItemService
              img={"TypescriptIcon.png"}
              title={"Typescript"}
              isVisible={itemsVisible.typescript}
            />
            <ItemService
              img={"GithubIconOutlined.png"}
              title={"Github"}
              isVisible={itemsVisible.github}
            />
            <ItemService
              img={"React.png"}
              title={"React"}
              isVisible={itemsVisible.react}
            />
            <BannerTitle>Front-End Development</BannerTitle>
          </div>
        </BannerService>
      </div>
    </Section>
  );
}

export default ServiceSection;
