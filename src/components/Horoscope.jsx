import PropTypes from "prop-types";
import Icon from "./Icon";

const Horoscope = ({ name }) => {
  return (
    <article>
      <div className="flex h-auto w-full flex-col items-center border-8 bg-sky-600">
        <Icon iconName={name} className="h-1/2 w-1/2 fill-red-600" />
        {name}
      </div>
    </article>
  );
};

Horoscope.propTypes = {
  name: PropTypes.string,
};

export default Horoscope;
