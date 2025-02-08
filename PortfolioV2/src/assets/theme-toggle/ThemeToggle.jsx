import PropTypes from 'prop-types';
import "./theme-toggle.css";

const ThemeToggle = ({ theme }) => {

  const setTheme = () => {
    document.querySelector("body").setAttribute("data-theme", theme);
  };

  return (
    <div onClick={setTheme} className={`theme-toggle ${theme}`}>
    </div>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default ThemeToggle;