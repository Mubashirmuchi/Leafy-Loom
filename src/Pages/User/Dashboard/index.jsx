import React from "react";
import "./index.css";

const index = () => {
    return (
        <div className="max-w-[70%] m-auto">
            <div>
                {" "}
                <nav className="nav">
                    <div className="container nav_container">
                        <div className="nav_left">
                            <a href="#" className="nav_logo">
                                Leafy Loom
                            </a>
                            <ul className="nav_list">
                                <li className="nav_item">
                                    <a href="#" className="nav_link active">
                                        Home
                                    </a>
                                </li>
                                <li className="nav_item">
                                    <a href="#" className="nav_link">
                                        Products
                                    </a>
                                </li>
                                <li className="nav_item">
                                    <a href="#" className="nav_link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav_right flex">
                            <img src="/src/Pages/User/Dashboard/images/cart.png" alt="" className="nav_icon" />
                            <img src="/src/Pages/User/Dashboard/images/user.png" alt="" className="nav_icon" />
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container header_container">
                <div className="header_content">
                    <div className="wrapper">
                        <h1 className="headet_main_title">Buy your dream plants</h1>
                        <div className="header_items">
                            <div className="header_item">
                                <p className="header_item_number">50+</p>
                                <p className="header_item_text">Plant Species</p>
                            </div>
                            <div className="header_item">
                                <p className="header_item_number">100+</p>
                                <p className="header_item_text">Customers</p>
                            </div>
                        </div>
                        <form action="#" className="header_form">
                            <input type="text" className="header_form_input" placeholder="What are you looking for?" />
                            <img src="/src/Pages/User/Dashboard/images/search.png" alt="" className="header_form_icon" />
                        </form>
                    </div>
                    <div className="wrapper"></div>
                </div>
            </div>
            <section className="section">
                <div className="container selling_container">
                    <div className="selling_item">
                        <h2 className="selling_h2">Best Selling Plants</h2>
                        <p className="selling_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <a href="#" className="selling_btn">
                            See more &rarr;
                        </a>
                    </div>
                    <div className="selling_item">
                        <img src="/src/Pages/User/Dashboard/images/selling-1.png" alt="" className="selling_item_img" />
                        <p className="selling_item_title">Natural Plants</p>
                        <p className="selling_item_price">$ 999</p>
                    </div>
                    <div className="selling_item">
                        <img src="/src/Pages/User/Dashboard/images/selling-2.png" alt="" className="selling_item_img" />
                        <p className="selling_item_title">Artificial Plants</p>
                        <p className="selling_item_price">$ 999</p>
                    </div>
                    <div className="selling_item">
                        <img src="/src/Pages/User/Dashboard/images/selling-3.png" alt="" className="selling_item_img" />
                        <p className="selling_item_title">Artificial Plants</p>
                        <p className="selling_item_price">$ 999</p>
                    </div>
                </div>
            </section>{" "}
            <section className="section">
                <div className="container">
                    <div className="section_header">
                        <h2 className="section_h2">About Us</h2>
                        <p className="section_p">Order now and appreciate the beauty of nature</p>
                    </div>
                    <div className="about_container">
                        <div className="about_item">
                            <div className="about_img_box">
                                <img src="/src/Pages/User/Dashboard/images/plant.png" alt="" className="about_item_img" />
                            </div>
                            <h4 className="about_item_title">Large Assortment</h4>
                            <p className="about_item_text">
                                we offer many different types of products with fewer variations in each category.
                            </p>
                        </div>
                        <div className="about_item">
                            <div className="about_img_box">
                                <img
                                    src="/src/Pages/User/Dashboard/images/delivery.png"
                                    alt=""
                                    className="about_item_img"
                                />
                            </div>
                            <h4 className="about_item_title">Fast & Free Shipping</h4>
                            <p className="about_item_text">
                                4-day or less delivery time, free shipping and an expedited delivery option.
                            </p>
                        </div>
                        <div className="about_item">
                            <div className="about_img_box">
                                <img src="/src/Pages/User/Dashboard/images/support.png" alt="" className="about_item_img" />
                            </div>
                            <h4 className="about_item_title">24/7 Support</h4>
                            <p className="about_item_text">
                                answers to any business related inquiry 24/7 and in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>{" "}
            <section className="section">
                <div className="container">
                    <div className="section_header">
                        <h2 className="section_h2">Categories</h2>
                        <p className="section_p">Find what you are looking for</p>
                    </div>
                </div>
                <div className="categories">
                    <div className="container cat_container">
                        <div className="category">
                            <img src="/src/Pages/User/Dashboard/images/category-1.png" alt="" className="category_img" />
                            <p className="category_title">Natural Plant</p>
                        </div>
                        <div className="category category_center">
                            <img src="/src/Pages/User/Dashboard/images/category-2.png" alt="" className="category_img" />
                            <p className="category_title">Plant Accessories</p>
                        </div>
                        <div className="category">
                            <img src="/src/Pages/User/Dashboard/images/category-3.png" alt="" className="category_img" />
                            <p className="category_title">Artificial Plant</p>
                        </div>
                    </div>
                    <div className="container categories_bottom">
                        <p className="categories_p">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="categories_btn">
                            See more &rarr;
                        </a>
                    </div>
                </div>
            </section>{" "}
            <section className="section">
                <div className="container">
                    <div className="section_header">
                        <h2 className="section_h2">
                            What clients sya about <br />
                            GREENMIND?
                        </h2>
                    </div>
                    <div className="reviews">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="review">
                                        <p className="review_text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum odit ut
                                            magni numquam eum aspernatur at iure explicabo! Provident laudantium commodi
                                            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit
                                            asperiores atque! Fuga, consequatur excepturi.
                                        </p>
                                        <div className="review_footer">
                                            <div className="review_user">
                                                <h3 className="review_user_name">Joh Doe</h3>
                                                <p className="review_user_designation">Youtuber</p>
                                            </div>
                                            <h3 className="review_rating">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span>4.5</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="review">
                                        <p className="review_text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum odit ut
                                            magni numquam eum aspernatur at iure explicabo! Provident laudantium commodi
                                            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit
                                            asperiores atque! Fuga, consequatur excepturi.
                                        </p>
                                        <div className="review_footer">
                                            <div className="review_user">
                                                <h3 className="review_user_name">Joh Doe</h3>
                                                <p className="review_user_designation">Youtuber</p>
                                            </div>
                                            <h3 className="review_rating">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span>4.5</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="review">
                                        <p className="review_text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum odit ut
                                            magni numquam eum aspernatur at iure explicabo! Provident laudantium commodi
                                            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit
                                            asperiores atque! Fuga, consequatur excepturi.
                                        </p>
                                        <div className="review_footer">
                                            <div className="review_user">
                                                <h3 className="review_user_name">Joh Doe</h3>
                                                <p className="review_user_designation">Youtuber</p>
                                            </div>
                                            <h3 className="review_rating">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span>4.5</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </section>{" "}
            <footer className="footer p-6">
                <div className="container footer_container">
                    <div className="footer_item">
                        <h2 className="nav_logo">Leafy Loom</h2>
                        <p className="footer_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste .</p>
                    </div>
                    <div className="footer_item">
                        <div className="footer_item_title">Information</div>
                        <ul className="footer_list">
                            <li className="footer_list_item">About</li>
                            <li className="footer_list_item">Product</li>
                            <li className="footer_list_item">Blog</li>
                        </ul>
                    </div>
                    <div className="footer_item">
                        <div className="footer_item_title">Company</div>
                        <ul className="footer_list">
                            <li className="footer_list_item">Communtiy</li>
                            <li className="footer_list_item">Careers</li>
                            <li className="footer_list_item">Our Story</li>
                        </ul>
                    </div>
                    <div className="footer_item">
                        <div className="footer_item_title">Contact</div>
                        <ul className="footer_list">
                            <li className="footer_list_item">Getting Starded</li>
                            <li className="footer_list_item">Pricing</li>
                            <li className="footer_list_item">Resources</li>
                        </ul>
                    </div>
                </div>
                <div className="container footer_copy">
                    <p>2023 all Right Reserved Term of use GREENMIND</p>
                </div>
            </footer>
        </div>
    );
};

export default index;
