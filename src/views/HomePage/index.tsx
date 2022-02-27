import React from "react";
import {
  DefaultSection,
  InfoContainer,
  StyledVideo,
  VideoSection,
  VideoSectionContent,
} from "./styles";
import PizzaVideo from "../../assets/pizzaVideo.mp4";
import Button from "../../components/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import InfoBox from "../../components/InfoBox";

const HomePage = () => {
  const openHours = [
    { text: "Poniedziałek: 13:00-20:00" },
    { text: "Wtorek: 13:00-20:00" },
    { text: "Środa: 13:00-20:00" },
    { text: "Czwartek: 13:00-20:00" },
    { text: "Piątek: 13:00-20:00" },
    { text: "Sobota: 13:00-21:00" },
    { text: "Niedziela: 13:00-20:00" },
  ];
  return (
    <>
      <VideoSection>
        <StyledVideo src={PizzaVideo} loop autoPlay muted />
        <VideoSectionContent>
          <h1>Pizza prosto z pieca</h1>
          <p>
            Naszą pizze tworzymy według tradycyjnej włoskiej receptury,
            wyłącznie z najwyższej jakości składników
          </p>
          <Button>
            MENU <MdKeyboardArrowRight size={30} />
          </Button>
        </VideoSectionContent>
      </VideoSection>

      <DefaultSection>
        <InfoContainer>
          <InfoBox
            title={"Godziny otwarcia"}
            description={"Dzisiaj: 13:00-21:00"}
            isDropdown={true}
            dropdownItems={openHours}
          />
          <InfoBox
            title={"Godziny dostawy"}
            description={"Dzisiaj: 13:00-20:40"}
          />
          <InfoBox title={"Kontakt"} description={"+48 000 000 000"} />
        </InfoContainer>
      </DefaultSection>
    </>
  );
};

export default HomePage;
