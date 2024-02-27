import style from "./style.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faChevronUp,
  faFilePdf,
  faDownload,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

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
            <h1>САЙНТУЯА ТЭНГИС</h1>
            <div className={style.para}>
              <p className={style.nogoon}>Илгээсэн суваг:</p>
              <p>kiosk</p>
            </div>
            <div className={style.para}>
              <p className={style.nogoon}>Регистр:</p>
              <p>МЮ96080919</p>
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
              <p>5023 343 162</p>
              <FontAwesomeIcon icon={faChevronUp} className={style.chev} />
            </div>
            <div className={style.paraBot}>
              <p className={style.nogoon2}>Бүтээгдэхүүний нэр</p>
              <p className={`${style.marbot} ${style.nogoon2}`}>
                ХАРИЛЦАХ/ ИРГЭД/ MNT
              </p>
            </div>
            <div className={style.paraBot}>
              <p className={style.nogoon2}>Үйлчилгээний төрөл</p>
              <p className={`${style.marbot} ${style.shar}`}>Дансны хуулга</p>
            </div>
            <div className={style.paraBot}>
              <p className={style.nogoon2}>Файл</p>

              <div className={style.divid}></div>
              <p className={style.marbot}>
                <FontAwesomeIcon icon={faFilePdf} className={style.pdf} />
                0FH452BSY3QK1U0C
              </p>
            </div>
            <a
              className={style.button1}
              href="https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/O1VGVnW-SPliJa0PUZeJXdnIryfGfxMGEf0im5.pdf"
              download="0FH452BSY3QK1U0C.pdf"
            >
              <FontAwesomeIcon icon={faDownload} />
              <p> Татах</p>
            </a>
          </div>
          <div className={style.commonQ}>
            <p>Түгээмэл асуулт хариулт</p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.commonArrow}
            />
          </div>
        </div>
        <div className={style.security}>
          <div className={style.layer1}>
            <p>
              Нууцлалын бодлого <span> |</span>
            </p>
            <p> Үйлчилгээний ерөнхий нөхцөл</p>
          </div>
          <div className={style.layer2}>
            <p>
              2024 ХААН БАНК <span>|</span>
            </p>
            <p> Хувилбар 1.1.215</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
