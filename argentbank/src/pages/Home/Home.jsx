import './Home.css';
import Feature from '../../components/Feature/Feature';
import chatIcon from '../../img/icon-chat.png';
import moneyIcon from '../../img/icon-money.png';
import securityIcon from '../../img/icon-security.png';

function Home() {
    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className="features">
                <Feature
                    featureImg={chatIcon}
                    featureImgAlt="Chat Icon"
                    featureTitle="You are our #1 priority"
                >
                    <p>
                        Need to talk to a representative? You can get in touch
                        through our 24/7 chat or through a phone call in less
                        than 5 minutes.
                    </p>
                </Feature>
                <Feature
                    featureImg={moneyIcon}
                    featureImgAlt="Money Icon"
                    featureTitle="More savings means higher rates"
                >
                    <p>
                        The more you save with us, the higher your interest rate
                        will be!
                    </p>
                </Feature>
                <Feature
                    featureImg={securityIcon}
                    featureImgAlt="Security Icon"
                    featureTitle="Security you can trust"
                >
                    <p>
                        We use top of the line encryption to make sure your data
                        and money is always safe.
                    </p>
                </Feature>
            </section>
        </main>
    );
}

export default Home;
