import Head from "next/head";
import style from "./page.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faChevronUp } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

const Home = () => {
  return (
    <div>
      <div className={style.body}>
        <div className={style.header}>
          <img
            className={style.leftImg}
            src="https://corp.khanbank.com/Content/img/khanbank.png"
            alt=""
          />
          <div className={style.power}>
            <FontAwesomeIcon icon={faPowerOff} />
          </div>
        </div>
        <div className={style.container}>
          <div className={style.topCon}>
            <h1>ГАНБОЛД МӨНХТУЯА</h1>
            <div className={style.para}>
              <p className={style.nogoon}>Илгээсэн суваг:</p>
              <p>kiosk</p>
            </div>
            <div className={style.para}>
              <p className={style.nogoon}>Регистр:</p>
              <p>ДА88063001</p>
            </div>
            <div className={style.para}>
              <p className={style.nogoon}>Илгээсэн огноо:</p>
              <p>2024-02-26</p>
            </div>
            <div className={style.para}>
              <p className={style.nogoon}>хүчингүй болох огноо:</p>
              <p>2024-03-27</p>
            </div>
            <div className={style.para}>
              <p className={style.nogoon}>Хүлээн авагч байгууллага:</p>
              <p className={style.boot}>-</p>
            </div>
          </div>
          <div className={style.bottomCon}>
            <div className={style.paraBot}>
              <p>5130 005 786</p>
              <FontAwesomeIcon icon={faChevronUp} className={style.chev} />
            </div>
            <div className={style.paraBot}>
              <p>Бүтээгдэхүүний нэр</p>
              <p className={style.marbot}>Х.ГҮЙ ХАД/ИРГЭД/MNT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;