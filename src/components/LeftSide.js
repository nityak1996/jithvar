import React from "react";


const LeftSide = () => {
  return (
    <div>
      <aside className="left-sidebar">
        {/* <!-- Sidebar scroll--> */}
        <div className="scroll-sidebar">
          {/* <!-- Sidebar navigation--> */}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              {/* <!-- User Profile--> */}
              <li>
                {/* <!-- User Profile--> */}
                <div className="user-profile dropdown m-t-20">
                  <div className="user-pic">
                    <img
                      src="../../assets/images/users/1.jpg"
                      alt="users"
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="user-content hide-menu m-t-10">
                    <h5 className="m-b-10 user-name font-medium">
                      Steave Jobs
                    </h5>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-circle btn-sm m-r-5"
                      id="Userdd"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-settings"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      title="Logout"
                      className="btn btn-circle btn-sm"
                    >
                      <i className="ti-power-off"></i>
                    </a>
                    <div
                      className="dropdown-menu animated flipInY"
                      aria-labelledby="Userdd"
                    >
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti-user m-r-5 m-l-5"></i> My Profile
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti-wallet m-r-5 m-l-5"></i> My Balance
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti-email m-r-5 m-l-5"></i> Inbox
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti-settings m-r-5 m-l-5"></i> Account
                        Setting
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="fa fa-power-off m-r-5 m-l-5"></i> Logout
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End User Profile--> */}
              </li>
              {/* <!-- User Profile--> */}
              <li className="nav-small-cap">
                <i className="mdi mdi-dots-horizontal"></i>
                <span className="hide-menu">Personal</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="icon-Car-Wheel"></i>
                  <span className="hide-menu">Dashboards </span>
                </a>
                <ul aria-expanded="false" className="collapse  first-level">
                  <li className="sidebar-item">
                    <a href="index.html" className="sidebar-link">
                      <i className="icon-Record"></i>
                      <span className="hide-menu"> Dashboard 1 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="index2.html" className="sidebar-link">
                      <i className="icon-Record"></i>
                      <span className="hide-menu"> Dashboard 2 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="index3.html" className="sidebar-link">
                      <i className="icon-Record"></i>
                      <span className="hide-menu"> Dashboard 3 </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="icon-Car-Wheel"></i>
                  <span className="hide-menu">Details </span>
                </a>
                <ul aria-expanded="false" className="collapse  first-level">
                  <li className="sidebar-item">
                    <a href="/country" className="sidebar-link">
                      <i className="icon-Record"></i>
                      <span className="hide-menu"> Country Detail </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="/state" className="sidebar-link">
                      <i className="icon-Record"></i>
                      <span className="hide-menu"> State Detail </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="/city" className="sidebar-link">
                      <i className="icon-Record"></i>
                      <span className="hide-menu"> City Detail </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="mdi mdi-dots-horizontal"></i>
                <span className="hide-menu">Apps</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="icon-Mailbox-Empty"></i>
                  <span className="hide-menu">Inbox </span>
                </a>
                <ul aria-expanded="false" className="collapse  first-level">
                  <li className="sidebar-item">
                    <a href="inbox-email.html" className="sidebar-link">
                      <i className="mdi mdi-email"></i>
                      <span className="hide-menu"> Email </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="inbox-email-detail.html" className="sidebar-link">
                      <i className="mdi mdi-email-alert"></i>
                      <span className="hide-menu"> Email Detail </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="inbox-email-compose.html" className="sidebar-link">
                      <i className="mdi mdi-email-secure"></i>
                      <span className="hide-menu"> Email Compose </span>
                    </a>
                  </li>
                </ul>
              </li>

              {/* New Employee Details Section */}
              <li className="sidebar-item">
                <a href="/employee" className="sidebar-link waves-effect waves-dark">
                  <i className="icon-People"></i>
                  <span className="hide-menu">Employee Details</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default LeftSide;
