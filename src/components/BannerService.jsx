import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Banner = styled.div`
  background-image: url("/svg/Banner.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  position: absolute;
  left: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-left: -3rem;

  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateX(${(props) => (props.isVisible ? "0" : "-10rem")});
  transition: opacity 0.4s ease, transform 0.4s ease;
`;

function BannerService({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const currentRef = bannerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        } else if (entry.intersectionRatio === 0) {
          setIsVisible(false);
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
    <Banner ref={bannerRef} isVisible={isVisible}>
      {children}
    </Banner>
  );
}

export default BannerService;
