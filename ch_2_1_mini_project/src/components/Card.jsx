import Tag from "./Tag";

const Card = ({
  company,
  createdAt,
  logo,
  title,
  tags,
  salary,
  city,
  country,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="logo-div-outer">
          <div className="logo-div-inner">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="save-div">
          <p>Save</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 545.1C512 570.7 483.5 585.9 462.2 571.7L320 476.8L177.8 571.7C156.5 585.9 128 570.6 128 545.1L128 128zM192 112C183.2 112 176 119.2 176 128L176 515.2L293.4 437C309.5 426.3 330.5 426.3 346.6 437L464 515.2L464 128C464 119.2 456.8 112 448 112L192 112z" />
          </svg>
        </div>
      </div>

      <div className="card-body">
        <div>
          <h3>{company}</h3>
          <p>{createdAt}</p>
        </div>
        <h2>{title}</h2>
        <div>
          {tags?.map((tag) => (
            <Tag key={tag} value={tag} />
          ))}
        </div>
      </div>

      <div className="card-footer">
        <div className="package-location">
          <h4>{salary}</h4>
          <p>
            {city}, {country}
          </p>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
