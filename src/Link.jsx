import "./link.css";

const Link = ({ deviceType, linkActive }) => {
  return (
    <div className={deviceType === "desktop" ? "desktop" : "mobile"}>
      <ul>
        <li onClick={() => linkActive(false)}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => linkActive(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => linkActive(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => linkActive(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Link;
