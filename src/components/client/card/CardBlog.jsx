import './CardBlog.css';
function CardBlog({image,title, date, description,styleCard,styleImage, area}) {
    return (
      <div className={`card ${area}`}>
        <img src={image} className={styleImage} alt="images" />
        <div className={styleCard}>
          <label className="card-title fs-6">{date}</label>
          <p className="card-text">
            <strong>{title}</strong>
          </p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
}
export default CardBlog;