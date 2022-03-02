import React, { useEffect } from "react";
import {
  DefaultSection,
  StyledLink,
  InfoContainer,
  ReviewsHeader,
  ReviewsTitle,
  StyledVideo,
  VideoSection,
  VideoSectionContent,
  SmallSpacer,
  ReviewsList,
} from "./styles";
import PizzaVideo from "../../assets/pizzaVideo.mp4";
import Button from "../../components/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import InfoBox from "../../components/InfoBox";
import Review from "../../components/Review";
import AnimationContainer from "../../components/AnimationContainer";

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
        <AnimationContainer animationName={"fade-up"}>
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
        </AnimationContainer>

        <SmallSpacer />

        <AnimationContainer animationName={"fade-right"}>
          <ReviewsHeader>
            <ReviewsTitle>Opinie klientów</ReviewsTitle>
            <p>99,2% klientów jest z nas zadowolonych!</p>
            <StyledLink to={"/reviews"}>Zobacz wszystkie opinie</StyledLink>
          </ReviewsHeader>

          <ReviewsList>
            <li>
              <Review text={"Wspaniała pizza"} author={"Karolina"} />
            </li>
            <li>
              <Review
                text={
                  "Świetna pizza, świeże składniki, doskonały smak. Polecam."
                }
                author={"Marcin"}
              />
            </li>
            <li>
              <Review
                text={
                  "Wszystko sprawnie i pysznie, jedyny minus do którego mogę się przyczepić to dokładniejsze czytanie zamówienia, bo nie dostałam dodatkowego sosu. Ale pizza przepyszna."
                }
                author={"Karolina"}
              />
            </li>
          </ReviewsList>
        </AnimationContainer>
      </DefaultSection>

      <DefaultSection></DefaultSection>
    </>
  );
};

export default HomePage;
