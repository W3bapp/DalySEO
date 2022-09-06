import React, {useRef, useState} from 'react'
import Section from '@/layout/Section'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import Title from '@/text/Title'
const wilfred = 'assets/images/reviews/wilfred-veerman.png';
const anne = 'assets/images/reviews/anne-eefstra.png';
const nicolas = 'assets/images/reviews/Nicolas Schaegert.png';
const background = 'assets/images/reviews/duotone.png'


const reviews = [
    {
        name: 'Wilfred Veerman',
        text: `Prima gozers, ze waren erg vriendelijk, behulpzaam en bereid die extra moeite te doen voor mij. Zeker aan te raden!`,
		image: wilfred,
		alt:"avatar review"
    },
    {
        name: 'Anne Eefstra',
        text: `Dankzij Daly Verhuizingen ben ik snel en goed geholpen. Ze waren super behulpzaam, efficient, prijsvriendelijk en ik wil hun hiervoor graag bedanken voor hun hulp.`,
		image: anne,
		alt:"avatar review"
    },
    {
        name: 'Marcel van Schimmeren',
        text: `Ik wil Daly Verhuizingen bedanken voor hun moeite en inzet. Ze waren erg vriendelijk en secuur met mijn spullen. Dit was extra belangrijk voor mij omdat het dierbare bezittingen zijn. Bedankt voor de moeite mannen.`,
		image: nicolas,
		alt:"avatar review"
    },
];

function Services(props) {

    const [activeSlide, setActiveSlide] = useState(0)
    const sliderRef = useRef('')

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 7000,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: current => setActiveSlide(current),
        slickGoTo: activeSlide || 0,
    };

    const goToClickedSlide = (i) => {
        setActiveSlide(i)
        sliderRef.current.slickGoTo(i)
    };

    return (
        <Section id="reviews" style={{backgroundImage: `url(${background})`}} className="background-image">
            <Fade bottom>
                <div className="reviews">

                    <Title title="home.reviews.title" className="title-button"/>

                    <Slider ref={slider => (sliderRef.current = slider)}  {...settings}>
                        {reviews.map((review) => {
                            return (
                                <div className="review-card">
                                    <h1>{review.text}</h1>
                                    <div className="review-details">

										<div className="review-avatar">
											<img src={review.image} alt={review.alt}/>
										</div>

                                        <span>
                                            <p>{review.name}</p>
										</span>

                                    </div>
                                </div>
                            )
                        })}
                    </Slider>

                    <div className="slider-indicator-wrapper">
                        {reviews.map((d, i) => <div onClick={() => goToClickedSlide(i)}
                                                    className={`slider-indicator ${i === activeSlide
                                                        ? 'slider-indicator-active'
                                                        : null}`}/>)}
                    </div>

                </div>

            </Fade>

        </Section>
    )
}

export default Services
