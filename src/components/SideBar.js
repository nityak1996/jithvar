import React from "react";

const SideBar = () => {
  return (
    <div>
      <aside className="customizer">
        <a href="javascript:void(0)" className="service-panel-toggle">
          <i className="fa fa-spin fa-cog"></i>
        </a>
        <div className="customizer-body">
          <ul className="nav customizer-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab
                                   "
                aria-controls="pills-home"
                aria-selected="true"
              >
                <i className="mdi mdi-wrench font-20"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#chat"
                role="tab
                                   "
                aria-controls="chat"
                aria-selected="false"
              >
                <i className="mdi mdi-message-reply font-20"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab
                                   "
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <i className="mdi mdi-star-circle font-20"></i>
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* <!-- Tab 1 --> */}
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="p-15 border-bottom">
                {/* <!-- Sidebar --> */}
                <h5 className="font-medium m-b-10 m-t-10">Layout Settings</h5>
                <div className="custom-control custom-checkbox m-t-10">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="theme-view"
                    id="theme-view"
                  />
                  <label className="custom-control-label" htmlFor="theme-view">
                    Dark Theme
                  </label>
                </div>
                <div className="custom-control custom-checkbox m-t-10">
                  <input
                    type="checkbox"
                    className="custom-control-input sidebartoggler"
                    name="collapssidebar
                                   "
                    id="collapssidebar"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="collapssidebar"
                  >
                    Collapse Sidebar
                  </label>
                </div>
                <div className="custom-control custom-checkbox m-t-10">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="sidebar-position"
                    id="sidebar-position"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="sidebar-position"
                  >
                    Fixed Sidebar
                  </label>
                </div>
                <div className="custom-control custom-checkbox m-t-10">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="header-position"
                    id="header-position"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="header-position"
                  >
                    Fixed Header
                  </label>
                </div>
                <div className="custom-control custom-checkbox m-t-10">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="boxed-layout"
                    id="boxed-layout"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="boxed-layout"
                  >
                    Boxed Layout
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                {/* <!-- Logo BG --> */}
                <h5 className="font-medium m-b-10 m-t-10">Logo Backgrounds</h5>
                <ul className="theme-color">
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-logobg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-logobg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-logobg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-logobg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-logobg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-logobg="skin6"
                    ></a>
                  </li>
                </ul>
                {/* <!-- Logo BG --> */}
              </div>
              <div className="p-15 border-bottom">
                {/* <!-- Navbar BG --> */}
                <h5 className="font-medium m-b-10 m-t-10">
                  Navbar Backgrounds
                </h5>
                <ul className="theme-color">
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-navbarbg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-navbarbg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-navbarbg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-navbarbg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-navbarbg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-navbarbg="skin6"
                    ></a>
                  </li>
                </ul>
                {/* <!-- Navbar BG --> */}
              </div>
              <div className="p-15 border-bottom">
                {/* <!-- Logo BG --> */}
                <h5 className="font-medium m-b-10 m-t-10">
                  Sidebar Backgrounds
                </h5>
                <ul className="theme-color">
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-sidebarbg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-sidebarbg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-sidebarbg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-sidebarbg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-sidebarbg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item">
                    <a
                      href="javascript:void(0)"
                      className="theme-link"
                      data-sidebarbg="skin6"
                    ></a>
                  </li>
                </ul>
                {/* <!-- Logo BG --> */}
              </div>
            </div>
            {/* <!-- End Tab 1 -->
                <!-- Tab 2 --> */}
            <div
              className="tab-pane fade"
              id="chat"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <ul className="mailbox list-style-none m-t-20">
                <li>
                  <div className="message-center chat-scroll">
                    <a
                      href="javascript:void(0)"
                      className="message-item"
                      id="chat_user_1"
                      data-user-id="1"
                    >
                      <span className="user-img">
                        <img
                          src="../../assets/images/users/1.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                        <span className="profile-status online pull-right"></span>
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">Pavan kumar</h5>
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                        <span className="time">9:30 AM</span>
                      </div>
                    </a>
                    {/* <!-- Message --> */}
                    <a
                      href="javascript:void(0)"
                      className="message-item"
                      id="chat_user_2"
                      data-user-id="2"
                    >
                      <span className="user-img">
                        <img
                          src="../../assets/images/users/2.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                        <span className="profile-status busy pull-right"></span>
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">Sonu Nigam</h5>
                        <span className="mail-desc">
                          I've sung a song! See you at
                        </span>
                        <span className="time">9:10 AM</span>
                      </div>
                    </a>
                    {/* <!-- Message --> */}
                    <a
                      href="javascript:void(0)"
                      className="message-item"
                      id="chat_user_3"
                      data-user-id="3"
                    >
                      <span className="user-img">
                        <img
                          src="../../assets/images/users/3.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                        <span className="profile-status away pull-right"></span>
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">Arijit Sinh</h5>
                        <span className="mail-desc">I am a singer!</span>
                        <span className="time">9:08 AM</span>
                      </div>
                    </a>
                    {/* <!-- Message --> */}
                    <a
                      href="javascript:void(0)"
                      className="message-item"
                      id="chat_user_4"
                      data-user-id="4"
                    >
                      <span className="user-img">
                        <img
                          src="../../assets/images/users/4.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                        <span className="profile-status offline pull-right"></span>
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">Nirav Joshi</h5>
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                        <span className="time">9:02 AM</span>
                      </div>
                    </a>
                    {/* <!-- Message -->
                                <!-- Message --> */}
                    <a
                      href="javascript:void(0)"
                      className="message-item"
                      id="chat_user_5"
                      data-user-id="5"
                    >
                      <span className="user-img">
                        <img
                          src="../../assets/images/users/5.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                        <span className="profile-status offline pull-right"></span>
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">Sunil Joshi</h5>
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                        <span className="time">9:02 AM</span>
                      </div>
                    </a>
                    {/* <!-- Message -->
                                <!-- Message --> */}
                    <a
                      href="javascript:void(0)"
                      className="message-item"
                      id="chat_user_6"
                      data-user-id="6"
                    >
                      <span className="user-img">
                        <img
                          src="../../assets/images/users/6.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                        <span className="profile-status offline pull-right"></span>
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">Akshay Kumar</h5>
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                        <span className="time">9:02 AM</span>
                      </div>
                    </a>
                    {/* <!-- Message -->
                                <!-- Message --> */}
                    <a
                      href="javascript:void(0)"
                      className="message-item"
                      id="chat_user_7"
                      data-user-id="7"
                    >
                      <span className="user-img">
                        <img
                          src="../../assets/images/users/7.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                        <span className="profile-status offline pull-right"></span>
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">Pavan kumar</h5>
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                        <span className="time">9:02 AM</span>
                      </div>
                    </a>
                    {/* <!-- Message -->
                                <!-- Message --> */}
                    <a
                      href="javascript:void(0)"
                      className="message-item"
                      id="chat_user_8"
                      data-user-id="8"
                    >
                      <span className="user-img">
                        <img
                          src="../../assets/images/users/8.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                        <span className="profile-status offline pull-right"></span>
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">Varun Dhavan</h5>
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                        <span className="time">9:02 AM</span>
                      </div>
                    </a>
                    {/* <!-- Message --> */}
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- End Tab 2 -->
                <!-- Tab 3 --> */}
            <div
              className="tab-pane fade p-15"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <h6 className="m-t-20 m-b-20">Activity Timeline</h6>
              <div className="steamline">
                <div className="sl-item">
                  <div className="sl-left bg-success">
                    <i className="ti-user"></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-medium">
                      Meeting today
                      <span className="sl-date"> 5pm</span>
                    </div>
                    <div className="desc">you can write anything </div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-info">
                    <i className="fas fa-image"></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-medium">Send documents to Clark</div>
                    <div className="desc">Lorem Ipsum is simply </div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img
                      className="rounded-circle"
                      alt="user"
                      src="../../assets/images/users/2.jpg"
                    />{" "}
                  </div>
                  <div className="sl-right">
                    <div className="font-medium">
                      Go to the Doctor
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Contrary to popular belief</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img
                      className="rounded-circle"
                      alt="user"
                      src="../../assets/images/users/1.jpg"
                    />{" "}
                  </div>
                  <div className="sl-right">
                    <div>
                      <a href="javascript:void(0)">Stephen</a>
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Approve meeting with tiger</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-primary">
                    <i className="ti-user"></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-medium">
                      Meeting today
                      <span className="sl-date"> 5pm</span>
                    </div>
                    <div className="desc">you can write anything </div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-info">
                    <i className="fas fa-image"></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-medium">Send documents to Clark</div>
                    <div className="desc">Lorem Ipsum is simply </div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img
                      className="rounded-circle"
                      alt="user"
                      src="../../assets/images/users/4.jpg"
                    />{" "}
                  </div>
                  <div className="sl-right">
                    <div className="font-medium">
                      Go to the Doctor
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Contrary to popular belief</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img
                      className="rounded-circle"
                      alt="user"
                      src="../../assets/images/users/6.jpg"
                    />{" "}
                  </div>
                  <div className="sl-right">
                    <div>
                      <a href="javascript:void(0)">Stephen</a>
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Approve meeting with tiger</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Tab 3 --> */}
          </div>
        </div>
      </aside>
      <div className="chat-windows"></div>
    </div>
  );
};

export default SideBar;
