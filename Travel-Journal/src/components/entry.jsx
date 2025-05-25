export default function Entry({img, alt, location, title, mapLink, dates, text}) {
    return(
        <article className="journal-entry">
            <div className="image-container">
                <img src={img}  alt={alt} className="main-img" />
            </div>
            <div className="entry-info">
                <img src="src/assets/images/marker.png" alt="marker"/><span>Location: {location}</span> <br/>
            
                <h2>{title}</h2>

                <a href={mapLink}>View on Google maps</a>

                <p className="trip-dates">{dates}</p>

                <p className="trip-text">{text}</p>
            </div>
        </article>
    )
}