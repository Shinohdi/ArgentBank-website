import './Feature.css';

function Feature({ featureImg, featureImgAlt, featureTitle, children }) {
    return (
        <div className="feature-item">
            <img
                src={featureImg}
                alt={featureImgAlt}
                className="feature-icon"
            />
            <h3 className="feature-item-title">{featureTitle}</h3>
            {children}
        </div>
    );
}

export default Feature;
