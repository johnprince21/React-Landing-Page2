import React from 'react';
import './Lp1.css';
const Lp1 = () => {
    return (
        <div>
            <div class="nav-and-front bg-white-dark">

                <div class="nav ">
                    <div class="left-nav">
                        <h3 class="volkhov-bold">Trabook <i><img src="./icons/Vector.png" alt="vector" /></i> </h3>

                    </div>
                    <div class="menu">
                        <ul class="center-nav">
                            <li class="nav-para poppins-regular text-color-black">Home</li>
                            <li class="nav-para poppins-regular text-color-black">About</li>
                            <li class="nav-para poppins-regular text-color-black">Destination</li>
                            <li class="nav-para poppins-regular text-color-black">Tour</li>
                            <li class="nav-para poppins-regular text-color-black">Blog</li>
                        </ul>
                    </div>
                    <div class="right-nav">
                        <p class="poppins-semibold nav-para btn login-btn">Login</p>
                        <input type="button" value="Sign up" class="btn-bg poppins-semibold nav-para btn-text-color signup" />
                    </div>
                </div>

                <div class="front-content">
                    <div class="content-journey">
                        <div class="h1-container-content-journey">
                            <h1 class="primary-colors-black-color volkhov-bold">Get started your exciting <span
                                class="primary-colors-orange-font">journey</span> with us.</h1>
                        </div>
                        <div class="p-container-content-journey">
                            <p class="para-max poppins-regular para-journey">A Team of experienced tourism professionals will
                                provide you with the best advice and tips or your desire place.</p>
                        </div>
                        <div class="discover-now-">
                            <input type="button" value="Discover Now"
                                class="para-medium btn discover-now-btn bg-btn-color-fullWhite" />
                        </div>
                    </div>
                    <div class="logo"><img src="./Public/Image (3).png" alt="image" class="img-width-front" /></div>
                </div>

                <div class="explore-container ">
                    <form class="bg-btn-color-fullWhite explore-tab">


                        <div>
                            <label for="location" class="poppins-medium content primary-colors-black-color">
                                Location
                            </label>
                            <select name="location" id="location" class="form-dropdown">
                            </select>
                            <p class="poppins-regular para-x-min text-color-light-gray">Where are you going</p>
                        </div>
                        <div>
                            <label for="date" class="poppins-medium content primary-colors-black-color">
                                Date
                            </label>
                            <select name="date" id="date" class="form-dropdown">
                            </select>
                            <p class="poppins-regular para-x-min text-color-light-gray">When you will go</p>
                        </div>
                        <div>
                            <label for="guest" class="poppins-medium content primary-colors-black-color">
                                Guest
                            </label>
                            <select name="guest" id="guest" class="form-dropdown">
                            </select>
                            <p class="poppins-regular para-x-min text-color-light-gray">Number of guest</p>
                        </div>
                        <div>
                            <input type="button" value="Explore Now"
                                class="poppins-medium btn-bg para-medium btn-text-color explore-btn" />
                        </div>

                    </form>
                </div>


            </div>

            <div class="travel bg-blue-dim-color">
                <div class="travel-top">
                    <div>
                        <h2 class="volkhov-bold text-color-black h2-travel">Things you need <span
                            class="primary-colors-orange-font">to do</span> </h2>
                        <p class="para-medium text-color-light-gray poppins-regular para-travel">We ensure that you'll embark on
                            a perfectly planned,<br />safe vacation at a price you can afford.</p>
                    </div>
                    <div><i><img src="./icons/Element.png" alt="element" class="travel-icon" /></i></div>
                </div>

                <div class="travel-menu-container">
                    <div class="travel-btn-box bg-btn-color-fullWhite ">
                        <i><img src="./icons/Group (3).png" alt="icon" /></i>
                        <h3 class="primary-colors-black-color poppins-semibold">Sign Up</h3>
                        <p class="text-color-light-gray poppins-regular para-min">Completes all the work associated<br />with
                            planing and processing</p>
                    </div>
                    <div class="travel-btn-box bg-btn-color-fullWhite">
                        <i><img src="./icons/Group (1).png" alt="icon" /></i>
                        <h3 class="primary-colors-black-color poppins-semibold">Worth of Money</h3>
                        <p class="text-color-light-gray poppins-regular para-min">After successful access then book<br />from
                            exclusive deals & pricing</p>
                    </div>
                    <div class="travel-btn-box bg-btn-color-fullWhite">
                        <i><img src="./icons/Group (2).png" alt="icon" /></i>
                        <h3 class="primary-colors-black-color poppins-semibold">Exciting Travel</h3>
                        <p class="text-color-light-gray poppins-regular para-min">Start and explore a wide range of<br />exciting
                            travel experience.</p>
                    </div>
                </div>
            </div>

            <div class="deals-discount bg-white-light">
                <div class="deals-discount-top">
                    <h2 class="volkhov-bold deals-discount-heading-margin">
                        Exclusive <span class="primary-colors-orange-font">deals & discounts</span>
                    </h2>
                    <p class="para medium poppins-regular deals-discount-top-para">
                        Discover our fantastic early booking discounts<br />& start planning your journey.
                    </p>
                </div>
                <div class="place">
                    <div class="spain ">
                        <img src="./Public/Image1.1.png" alt="img" />
                        <div class="place-discribe">

                            <div class="rating-tab">
                                <h3 class="poppins-medium text-color-black ">Madrid</h3>
                                <p class="poppins-regular para-min text-color-light-gray"><i><img src="./icons/star 1.png"
                                    alt="icon" /></i> 4.8</p>
                            </div>
                            <div class="country-price">
                                <div>
                                    <p class="poppins-regular text-color-light-gray para-min"><i><img
                                        src="./icons/Group 1000003537.png" alt="icon" /></i> Spain</p>
                                </div>
                                <div class="price-tag-section">
                                    <p class="text-price-color-min poppins-medium para-min"><s>$950</s></p>
                                    <p
                                        class="primary-colors-orange-font poppins-semibold para-min bg-color-orange-light discount-price">
                                        $850</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="italy img-fix-btn">

                        <img src="./Public/Image (4).pngmit
                " alt="img" class="img-fix-btn" />
                        <input type="button" value="Book Now"
                            class="btn-bg btn-text-color poppins-medium para.medium img-inside-btn" />
                        <div class="place-discribe">
                            <div class="rating-tab">
                                <h3 class="poppins-medium text-color-black">Firenze</h3>
                                <p class="poppins-regular para-min text-color-light-gray"><i><img src="./icons/star 1.png"
                                    alt="icon" /></i> 4.5</p>
                            </div>
                            <div class="country-price">
                                <div>
                                    <p class="poppins-regular text-color-light-gray para-min"><i><img
                                        src="./icons/Group 1000003537.png" alt="icon" /></i> Italy</p>
                                </div>
                                <div class="price-tag-section">
                                    <p class="text-price-color-min poppins-medium para-min"><s>$850</s></p>
                                    <p
                                        class="primary-colors-orange-font poppins-semibold para-min bg-color-orange-light discount-price">
                                        $750</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="france">
                        <img src="./Public/Image (1).png" alt="img" />
                        <div class="place-discribe">
                            <div class="rating-tab">
                                <h3 class="poppins-medium text-color-black">Paris</h3>
                                <p class="poppins-regular para-min text-color-light-gray"><i><img src="./icons/star 1.png"
                                    alt="icon" /></i> 4.4</p>
                            </div>
                            <div class="country-price">
                                <div>
                                    <p class="poppins-regular text-color-light-gray para-min"><i><img
                                        src="./icons/Group 1000003537.png" alt="icon" /></i> France</p>
                                </div>
                                <div class="price-tag-section">
                                    <p class="text-price-color-min poppins-medium para-min"><s>$699</s></p>
                                    <p
                                        class="primary-colors-orange-font poppins-semibold para-min bg-color-orange-light discount-price">
                                        $599</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="uk">
                        <img src="./Public/Image (2).png" alt="img" />
                        <div class="place-discribe">
                            <div class="rating-tab">
                                <h3 class="poppins-medium text-color-black">London</h3>
                                <p class="poppins-regular para-min text-color-light-gray"><i><img src="./icons/star 1.png"
                                    alt="icon" /></i> 4.8</p>
                            </div>
                            <div class="country-price">
                                <div>
                                    <p class="poppins-regular text-color-light-gray para-min"><i><img
                                        src="./icons/Group 1000003537.png" alt="icon" /></i> UK</p>
                                </div>
                                <div class="price-tag-section">
                                    <p class="text-price-color-min poppins-medium para-min"><s>$850</s></p>
                                    <p
                                        class="primary-colors-orange-font poppins-semibold para-min bg-color-orange-light discount-price">
                                        $850</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="slide-btn-deals-discount">
                    <i><img src="./icons/Btn-1.png" alt="icon" /></i>
                    <i><img src="./icons/Btn-2.png" alt="icon" /></i>
                </div>
            </div>

            <div class="trip bg-white-light">

                <div class="trip-top">

                    <div>
                        <h2 class="volkhov-bold trip-heading-margin">
                            Best <span class="primary-colors-orange-font"> vacation plan</span>
                        </h2>
                        <p class="para medium poppins-regular trip-top-para">
                            Plan your perfect vacation with our travel agency. Choose<br />among hundreds of all-inclusive offers!
                        </p>
                    </div>

                    <div>
                        <i><img src="./icons/Element-vacation.png" alt="icon" class="trip-icon" /></i>
                    </div>
                </div>
                <div class="slide-btn-trip">
                    <i><img src="./icons/Btn-1.png" alt="icon" /></i>
                    <i><img src="./icons/Btn-2.png" alt="icon" /></i>
                </div>
                <div class="place">
                    <div class="rome">
                        <img src="./Public/trip.png" alt="img" />
                        <div class="trip-discribe">
                            <div class="price-trip">
                                <h3 class="poppins-medium text-color-black">Rome, Italy</h3>
                                <p class="poppins-semibold h3 primary-colors-orange-font">$5,42k</p>
                            </div>
                            <div class="rating-days-trip">
                                <div>
                                    <p class="poppins-medium text-color-light-gray para-min"><i><img
                                        src="./icons/Navigation.png" alt="icon" /></i> 10 Days Trip</p>
                                </div>
                                <div class="rating-trip">
                                    <p class="poppins-regular para-min text-color-light-gray "><i><img src="./icons/star 1.png"
                                        alt="" /></i> 4.8</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="london">
                        <img src="./Public/vacation(1).png" alt="img" />
                        <div class="trip-discribe">
                            <div class="price-trip">
                                <h3 class="poppins-medium text-color-black">London, UK</h3>
                                <p class="poppins-semibold h3 primary-colors-orange-font">$2,42k</p>
                            </div>
                            <div class="rating-days-trip">
                                <div>
                                    <p class="poppins-medium text-color-light-gray para-min"><i><img
                                        src="./icons/Navigation.png" alt="icon" /></i> 07 Days Trip</p>
                                </div>
                                <div class="rating-trip">
                                    <p class="poppins-regular para-min text-color-light-gray "><i><img src="./icons/star 1.png"
                                        alt="" /></i> 4.7</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="osaka">
                        <img src="./Public/vacation.png" alt="img" />
                        <div class="trip-discribe">
                            <div class="price-trip">
                                <h3 class="poppins-medium text-color-black">Osaka,Japan</h3>
                                <p class="poppins-semibold h3 primary-colors-orange-font">$5,42k</p>
                            </div>
                            <div class="rating-days-trip">
                                <div>
                                    <p class="poppins-medium text-color-light-gray para-min"><i><img
                                        src="./icons/Navigation.png" alt="icon" /></i> 10 Days Trip</p>
                                </div>
                                <div class="rating-trip">
                                    <p class="poppins-regular para-min text-color-light-gray "><i><img src="./icons/star 1.png"
                                        alt="" /></i> 4.8</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="aboutus bg-blue-dim-color">
                <div class="aboutus-left">
                    <h2 class="volkhov-bold text-color-black h2-aboutus-left">What people say <span
                        class="primary-colors-orange-font">about us.</span></h2>
                    <p class="roboto-regular para-x-min text-color-light-gray">Our Clients send us bunch of smilies with our
                        services <br />and we love them.</p>
                    <div class="slide-btn-aboutus">
                        <i><img src="./icons/Btn-1.png" alt="icon" /></i>
                        <i><img src="./icons/Btn-2.png" alt="icon" /></i>
                    </div>
                </div>

                <div class="aboutus-right">
                    <div class="aboutus-right-back-content bg-blue-dim-color">
                        <p class="poppins-semibold para medium text-color-black">
                            Chris Thomas
                        </p>
                        <p class="para-14 poppins-medium text-color-light-gray">
                            CEO of Red Button
                        </p>
                    </div>

                    <div class="aboutus-right-top">
                        <i class="aboutus-right-img-logo"><img src="./icons/img-logo.png" alt="icon" /></i>
                    </div>
                    <div class="aboutus-right-logo">
                        <i><img src="./icons/Element2.png" alt="icon" /></i>
                    </div>
                    <div class="aboutus-right-top-content bg-btn-color-fullWhite text-color-dark-gray para-min poppins-medium">
                        <div> <q>On the Windows talking painted pasture yet its <br /> express parties use. Sure last upon he same
                            as <br />knew next. Of believed or diverted no.</q> </div>
                        <div>
                            <p class="poppins-semibold para medium text-color-black">
                                Mike tayior
                            </p>
                            <p class="para-14 poppins-medium text-color-light-gray">Lahore, Pakistan</p>
                        </div>
                    </div>



                </div>
            </div>

            <div class="latest-blog .bg-white-dark">
                <div class="latest-blog-heading">
                    <h2 class="volkhov-bold text-full-black-color">Get update with <span
                        class="primary-colors-orange-font">latest blog</span></h2>
                </div>
                <div class="latest-blog-imgs">
                    <div class="img1">
                        <img src="./Public/blog-4.png" alt="img" />
                        <div class="blog-discribe">
                            <p class="para medium poppins-medium text-color-black">The Amazing Difference a <br />Year of
                                Travelling.</p>
                            <p class="blog-date inter-font para-min text-price-color-min">July 27, 2021</p>
                        </div>
                    </div>

                    <div class="img2">
                        <img src="./Public/blog-3.png" alt="img" />
                        <div class="blog-discribe">
                            <p class="para medium poppins-medium text-color-black">Travel far enough, you<br />meet yourself.</p>
                            <p class="blog-date inter-font para-min text-price-color-min">July 27, 2021</p>
                        </div>
                    </div>

                    <div class="img3">
                        <img src="./Public/blog-2.png" alt="img" />
                        <div class="blog-discribe">
                            <p class="para medium poppins-medium text-color-black">How to Save Money While<br /> Visiting Africa.
                            </p>
                            <p class="blog-date inter-font para-min text-price-color-min">July 27, 2021</p>
                        </div>
                    </div>
                    <div class="img4">
                        <img src="./Public/blog-1.png" alt="img" />
                        <div class="blog-discribe">
                            <p class="para medium poppins-medium text-color-black">Reflections on 5 Months of <br />Travel: Time
                                to Hang</p>
                            <p class="blog-date inter-font para-min text-price-color-min">July 27, 2021</p>
                        </div>
                    </div>
                </div>
                <div class="sider">
                    <i><img src="./icons/Slider.png" alt="icon" /></i>
                </div>
            </div>

            <div class="footer-link bg-orange">
                <div class="footer-link-content">
                    <h2 class="volkhov-bold btn-text-color footer-link-content-heading"> Subscribe and get exclusive <br /> deals
                        & offer</h2>
                </div>
                <div class="subscribe-btn-box bg-btn-color-fullWhite">
                    <div class="enter-mail">
                        <i><img src="./icons/Group 46.png" alt="icon" /></i>
                        <span class="poppins-regular para-min text-price-color-min">Enter your mail</span>
                    </div>

                    <div>
                        <input type="button" value="Subscribe" class="subscribe-btn btn-bg btn-text-color" />
                    </div>
                </div>

                <i class="footer-link-icon1"><img src="./icons/footer-icon-link.png" alt="icon" /></i>
                <i class="footer-link-icon2"><img src="./icons/Group 42.png" alt="icon" /></i>
            </div>


            <div class="footer-content bg-blue-dim-color">
                <div class="footer-top">
                    <div class="footer-content1">
                        <h3 class="volkhov-bold">Trabook <i><img src="./icons/Vector.png" alt="vector" /></i> </h3>
                        <p class="para-min poppins-medium text-color-light-gray">Book your trip in minute, get full<br />Controll
                            for much longer.</p>
                        <div>
                            <i><img src="./icons/Social (1).png" alt="Social" /></i>
                        </div>
                    </div>
                    <div class="footer-content2">

                        <div class="content21">

                            <p class="para-medium poppins-semibold text-color-black">Company</p>
                            <br />
                            <p class="para-medium poppins-regular text-color-light-gray">About</p>
                            <p class="para-medium poppins-regular text-color-light-gray">Careers</p>
                            <p class="para-medium poppins-regular text-color-light-gray">Logistic</p>
                            <p class="para-medium poppins-regular text-color-light-gray">Privacy & Policy</p>

                        </div>

                        <div class="content22">

                            <p class="para-medium poppins-semibold text-color-black">Contact</p>
                            <br />
                            <p class="para-medium poppins-regular text-color-light-gray">Help/FAQ</p>
                            <p class="para-medium poppins-regular text-color-light-gray">Press</p>
                            <p class="para-medium poppins-regular text-color-light-gray">Affilates</p>
                            <p></p>

                        </div>

                        <div class="content23">

                            <p class="para-medium poppins-semibold text-color-black">More</p>
                            <br />
                            <p class="para-medium poppins-regular text-color-light-gray">Press Centre</p>
                            <p class="para-medium poppins-regular text-color-light-gray">Our Blog</p>
                            <p class="para-medium poppins-regular text-color-light-gray">Low Fore tips</p>
                            <p></p>

                        </div>
                    </div>

                </div>
                <hr />
                <div class="footer-bottom">

                    <div class="para-min poppins-regular text-color-light-gray">Copyright, Trabook 2022. All rights reserved.
                    </div>
                    <div class="para-min poppins-regular text-color-light-gray">Terms & Conditions</div>
                </div>

            </div>
        </div>
    );
};

export default Lp1;