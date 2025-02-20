import { CardProps } from '../../interface/CardProps';
import './Card.css';

export default function Card(props: CardProps) {
  const { img, place, mapLink, title, dates, description } = props;
  return (
    <article className="card flex-row gap-1 mb-1">
      <div className="card-image-container">
        <img className="card-image" src={img?.src} alt={img?.alt} />
      </div>
      <div className="card-content">
        <span className="marker-icon place">{place}</span>
        <a className="map-link" 
            target="_blank"
            href={mapLink}>View on Google Maps</a>

        {title ? <h2>{title}</h2> : <h2>Special Place</h2>}
        <h4>{dates ? dates : "a while ago"}</h4>
        {description && <p>{description}</p>}
      </div>
    </article>
  );
}