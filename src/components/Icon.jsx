import {
  GiAries,
  GiWaves,
  GiCancer,
  GiCapricorn,
  GiGemini,
  GiLeo,
  GiLibra,
  GiPisces,
  GiSagittarius,
  GiScorpio,
  GiTaurus,
  GiVirgo,
} from "react-icons/gi";
import {
  ARIES,
  AQUARIUS,
  CANCER,
  CAPRICORN,
  GEMINI,
  LEO,
  LIBRA,
  PISCES,
  SAGITTARIUS,
  SCORPIO,
  TAURUS,
  VIRGO,
} from "../util/nameOfHoroscopes";
import PropTypes from "prop-types";

const Icon = ({ iconName }) => {
  switch (iconName) {
    case ARIES:
      return <GiAries />;

    case AQUARIUS:
      return <GiWaves />;

    case CANCER:
      return <GiCancer />;

    case CAPRICORN:
      return <GiCapricorn />;

    case GEMINI:
      return <GiGemini />;

    case LEO:
      return <GiLeo />;

    case LIBRA:
      return <GiLibra />;

    case PISCES:
      return <GiPisces />;

    case SAGITTARIUS:
      return <GiSagittarius />;

    case SCORPIO:
      return <GiScorpio />;

    case TAURUS:
      return <GiTaurus />;

    case VIRGO:
      return <GiVirgo />;
  }
};

Icon.propTypes = {
  iconName: PropTypes.string,
};

export default Icon;
