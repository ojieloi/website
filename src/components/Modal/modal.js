import * as React from "react";
import Header from "../common/Header/header";
import Link from "../common/Link/link";
import Body from "../common/Body/body";
import "./modal.css";

const Modal = ({ toggleModal }) => {
  const handleToggleModal = () => {
    toggleModal(false);
  }
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-wrapper__header-wrapper">
          <Header>More about me</Header>
          <Link className="modal-wrapper__close-modal" role="button" onClick={handleToggleModal}>
            Close
          </Link>
        </div>

        <Body className="modal-wrapper__body">
          Growing up, I moved from contry to country - Nigeria to Ghana, a
          pit-stop in South Africa, then onwards to Kenya, and finally in the
          summer of 2012, the United States - New Jersey. Pretty certain it’s
          because my mom got fed up with all the moving..
        </Body>
        <Body className="modal-wrapper__body">
          I went through the entirety of high school not really knowing what I
          wanted to major in for Uni. I later settled on Computer and Electrical
          engineering, this was the period when I wrote my first ever bits of
          code - Java, eww.
        </Body>
        <Body className="modal-wrapper__body">
          During this period, I also picked up an interest in UI design after
          watching a series of YouTube videos on a software called Adobe XD,
          which was still in Beta at the time. Curios about it, I decided to
          pick that up, tried recreating some of my favorite apps, and the rest
          is history.
        </Body>
        <Body className="modal-wrapper__body">
          This was also the time I decided I wanted to focus more of the
          software creation side of development, so midway through my degree, I
          switched to Computer Science, ended up graduating Summa Cum Laude.
        </Body>
      </div>
    </div>
  );
};

export default Modal;
