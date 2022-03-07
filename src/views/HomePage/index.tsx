import React from "react";
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
  ImageContentContainer,
  MenuSection,
  BackgroundImageContainer,
  ImageTilesContainer,
  OrderingStepsContainer,
} from "./styles";
import PizzaVideo from "../../assets/pizzaVideo.mp4";
import Button from "../../components/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import InfoBox from "../../components/InfoBox";
import Review from "../../components/Review";
import AnimationContainer from "../../components/AnimationContainer";
import MenuLogo from "../../assets/menuImage.png";
import ColoredSpacer from "../../components/ColoredSpacer";
import ImageTiles, { IImage } from "../../components/ImageTiles";
import LemonadePhoto from "../../assets/lemonadePhoto.jpg";
import PizzaPhoto from "../../assets/pizzaPhoto.jpg";
import OilPhoto from "../../assets/oilPhoto.jpg";
import v from "../../components/variables";
import Steps from "../../components/Steps";
import { IStep } from "../../components/Steps/Step";
import { ReactComponent as CartIcon } from "../../assets/Cart icon.svg";
import { ReactComponent as WalletIcon } from "../../assets/Wallet icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/Menu icon.svg";
import { BackgroundImage } from "../../components/globalStyles";
import Footer from "../../components/Footer";

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

  const menuImages: IImage[] = [
    { text: "NAPOJE", src: `url(${LemonadePhoto})` },
    { text: "PIZZA", src: `url(${PizzaPhoto})` },
    { text: "SOSY", src: `url(${OilPhoto})` },
    { text: "ZOBACZ PEŁNE MENU", fill: "white", textColor: v.green },
  ];

  const orderingSteps: IStep[] = [
    {
      image: <MenuIcon />,
      title: "Wybierz danie",
      description: "Wybierz danie oraz promocję",
    },
    {
      image: <CartIcon />,
      title: "Dodaj do koszyka",
      description: "Bez rejestracji, mniej niż 30 sekund",
    },
    {
      image: <WalletIcon />,
      title: "Zapłać",
      description: "Gotówka, karta, szybki przelew",
    },
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

      <MenuSection>
        <BackgroundImageContainer>
          <BackgroundImage src={MenuLogo} />
          <AnimationContainer animationName={"zoom-in-up"}>
            <ImageContentContainer>
              <h1>Wybierz do pizzy 1 sos gratis</h1>
              <ColoredSpacer width={"20%"} color="white" />
              <Button>
                MENU <MdKeyboardArrowRight size={"1.5em"} />
              </Button>
            </ImageContentContainer>
          </AnimationContainer>
        </BackgroundImageContainer>
      </MenuSection>

      <DefaultSection marginOnTop={false}>
        <ImageTilesContainer>
          <ImageTiles images={menuImages} />
        </ImageTilesContainer>
      </DefaultSection>

      <DefaultSection marginOnBottom={true}>
        <OrderingStepsContainer>
          <Steps steps={orderingSteps} />
          <Button>
            ZAMÓW ONLINE <MdKeyboardArrowRight size={"1.5em"} />
          </Button>
        </OrderingStepsContainer>
      </DefaultSection>

      <Footer />
    </>
  );
};

export default HomePage;
