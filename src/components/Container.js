import React from "react";

const Container = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* <!-- ============================================================== -->
                <!-- Info box -->
                <!-- ============================================================== --> */}
        <div className="card-group">
          {/* <!-- Card --> */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <span className="btn btn-circle btn-lg bg-danger">
                    <i className="ti-clipboard text-white"></i>
                  </span>
                </div>
                <div>New projects</div>
                <div className="ml-auto">
                  <h2 className="m-b-0 font-light">23</h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card --> */}
          {/* <!-- Card --> */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <span className="btn btn-circle btn-lg btn-info">
                    <i className="ti-wallet text-white"></i>
                  </span>
                </div>
                <div>Total Earnings</div>
                <div className="ml-auto">
                  <h2 className="m-b-0 font-light">113</h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card -->
                    <!-- Card --> */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <span className="btn btn-circle btn-lg bg-success">
                    <i className="ti-shopping-cart text-white"></i>
                  </span>
                </div>
                <div>Total Sales</div>
                <div className="ml-auto">
                  <h2 className="m-b-0 font-light">43</h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card -->
                    <!-- Card --> */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <span className="btn btn-circle btn-lg bg-warning">
                    <i className="mdi mdi-currency-usd text-white"></i>
                  </span>
                </div>
                <div>Profit</div>
                <div className="ml-auto">
                  <h2 className="m-b-0 font-light">63</h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card -->
                    <!-- Column --> */}
        </div>
        {/* <!-- ============================================================== -->
                <!-- Info box -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Email campaign chart -->
                <!-- ============================================================== --> */}
        <div className="row">
          {/* <!-- Column --> */}
          <div className="col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h4 className="card-title">Product Sales</h4>
                    <h5 className="card-subtitle">Overview of Latest Month</h5>
                  </div>
                  <div className="ml-auto">
                    <ul className="list-inline font-12 dl m-r-10">
                      <li className="list-inline-item">
                        <i className="fas fa-dot-circle text-info"></i> Ipad
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-dot-circle text-danger"></i> Iphone
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="product-sales" style={{ height: "305px" }}></div>
              </div>
            </div>
          </div>
          {/* <!-- Column --> */}
          <div className="col-md-3">
            <div className="card">
              <div className="card-body bg-light-info">
                <div className="d-flex align-items-center m-t-10 m-b-20">
                  <div className="m-r-10">
                    <i className="icon-Cloud-Sun display-5"></i>
                  </div>
                  <div>
                    <h1 className="m-b-0 font-light">
                      35
                      <sup>o</sup>
                    </h1>
                    <h5 className="font-light">Clear and sunny</h5>
                  </div>
                </div>
                <div id="ct-weather" style={{ height: "170px" }}></div>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <span className="btn-circle btn-lg btn btn-outline-secondary">
                      <i className="wi wi-day-sunny"></i>
                    </span>
                  </div>
                  <div className="m-l-10">
                    <h4 className="m-b-0">Monday</h4>
                    <h6 className="font-light m-b-0">March 2019</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Column --> */}
          <div className="col-md-3">
            <div className="card">
              <div className="card-body bg-light-warning text-white">
                <div
                  id="weeksales-bar"
                  className="position-relative"
                  style={{ height: "270px" }}
                ></div>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <span className="btn-circle btn-lg btn btn-outline-secondary">
                      <i className="ti-shopping-cart"></i>
                    </span>
                  </div>
                  <div className="m-l-10">
                    <h4 className="m-b-0">Sales</h4>
                    <h6 className="font-light m-b-0">March 2019</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- Email campaign chart -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Top Selliing Products -->
                <!-- ============================================================== --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                {/* <!-- title --> */}
                <div className="d-md-flex align-items-center">
                  <div>
                    <h4 className="card-title">Top Selling Products</h4>
                    <h5 className="card-subtitle">
                      Overview of Top Selling Items
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <div className="dl">
                      <select className="custom-select">
                        <option value="0" selected="">
                          Monthly
                        </option>
                        <option value="1">Daily</option>
                        <option value="2">Weekly</option>
                        <option value="3">Yearly</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <!-- title --> */}
              </div>
              <div className="table-responsive">
                <table className="table v-middle">
                  <thead>
                    <tr className="bg-light">
                      <th className="border-top-0">Products</th>
                      <th className="border-top-0">License</th>
                      <th className="border-top-0">Support Agent</th>
                      <th className="border-top-0">Technology</th>
                      <th className="border-top-0">Tickets</th>
                      <th className="border-top-0">Sales</th>
                      <th className="border-top-0">Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="m-r-10">
                            <a className="btn btn-circle btn-danger text-white">
                              EA
                            </a>
                          </div>
                          <div className="">
                            <h4 className="m-b-0 font-16">Elite Admin</h4>
                          </div>
                        </div>
                      </td>
                      <td>Single Use</td>
                      <td>John Doe</td>
                      <td>
                        <label className="label label-danger">Angular</label>
                      </td>
                      <td>46</td>
                      <td>356</td>
                      <td>
                        <h5 className="m-b-0">$2850.06</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="m-r-10">
                            <a className="btn btn-circle btn-info text-white">
                              MA
                            </a>
                          </div>
                          <div className="">
                            <h4 className="m-b-0 font-16">Monster Admin</h4>
                          </div>
                        </div>
                      </td>
                      <td>Single Use</td>
                      <td>Venessa Fern</td>
                      <td>
                        <label className="label label-info">Vue Js</label>
                      </td>
                      <td>46</td>
                      <td>356</td>
                      <td>
                        <h5 className="m-b-0">$2850.06</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="m-r-10">
                            <a className="btn btn-circle btn-success text-white">
                              MP
                            </a>
                          </div>
                          <div className="">
                            <h4 className="m-b-0 font-16">
                              Material Pro Admin
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>Single Use</td>
                      <td>John Doe</td>
                      <td>
                        <label className="label label-success">Bootstrap</label>
                      </td>
                      <td>46</td>
                      <td>356</td>
                      <td>
                        <h5 className="m-b-0">$2850.06</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="m-r-10">
                            <a className="btn btn-circle btn-purple text-white">
                              AA
                            </a>
                          </div>
                          <div className="">
                            <h4 className="m-b-0 font-16">Ample Admin</h4>
                          </div>
                        </div>
                      </td>
                      <td>Single Use</td>
                      <td>John Doe</td>
                      <td>
                        <label className="label label-purple">React</label>
                      </td>
                      <td>46</td>
                      <td>356</td>
                      <td>
                        <h5 className="m-b-0">$2850.06</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- Top Selliing Products -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Table -->
                <!-- ============================================================== --> */}
        <div className="row">
          {/* <!-- Column --> */}
          <div className="col-lg-4 col-md-12">
            <div className="row">
              {/* <!-- Column --> */}
              <div className="col-md-12">
                <div className="card bg-light-info no-card-border">
                  <div className="card-body">
                    <h5 className="card-title">Sales Difference</h5>
                    <div className="d-flex no-block">
                      <div className="align-self-center no-shrink">
                        <h2 className="m-b-0">$2842</h2>
                        <h6 className="text-muted">(160-165 Sales)</h6>
                      </div>
                      <div className="ml-auto">
                        <div
                          id="sales"
                          className=""
                          style={{ width: "150px", height: "140px" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-12">
                <div className="card bg-light-success no-card-border">
                  <div className="card-body">
                    <h5 className="card-title">Sales Prediction</h5>
                    <div className="d-flex no-block">
                      <div className="align-self-end no-shrink">
                        <h2 className="m-b-0">$6528</h2>
                        <h6 className="text-muted">(160-165 Sales)</h6>
                      </div>
                      <div className="ml-auto">
                        <div id="prediction"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
            </div>
          </div>
          {/* <!-- Column --> */}
          <div className="col-lg-8 col-md-12">
            <div className="card o-income">
              <div className="card-body">
                <div className="d-flex m-b-30 no-block">
                  <h5 className="card-title m-b-0 align-self-center">
                    Our Income
                  </h5>
                  <div className="ml-auto">
                    <select className="custom-select b-0">
                      <option selected="">January</option>
                      <option value="1">February</option>
                      <option value="2">March</option>
                      <option value="3">April</option>
                    </select>
                  </div>
                </div>
                <div
                  id="income"
                  style={{ height: "250px", width: "100%" }}
                ></div>
                <ul className="list-inline m-t-30 text-center font-12">
                  <li className="list-inline-item">
                    <i className="fa fa-circle text-success"></i> Growth
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-circle text-info"></i> Net
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- Table -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Recent comment and chats -->
                <!-- ============================================================== --> */}
        <div className="row">
          {/* <!-- column --> */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Comments</h4>
              </div>
              <div
                className="comment-widgets scrollable"
                style={{ height: "560px" }}
              >
                {/* <!-- Comment Row --> */}
                <div className="d-flex flex-row comment-row m-t-0">
                  <div className="p-2">
                    <img
                      src="../../assets/images/users/1.jpg"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">James Anderson</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-rounded label-primary">
                        Pending
                      </span>
                      <span className="action-icons">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-check"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- Comment Row --> */}
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="../../assets/images/users/2.jpg"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text active w-100">
                    <h6 className="font-medium">Michael Jorden</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-success label-rounded">
                        Approved
                      </span>
                      <span className="action-icons active">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="icon-close"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart text-danger"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- Comment Row --> */}
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="../../assets/images/users/5.jpg"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">Johnathan Doeting</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-rounded label-danger">
                        Rejected
                      </span>
                      <span className="action-icons">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-check"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- Comment Row --> */}
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="../../assets/images/users/6.jpg"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">James Anderson</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-rounded label-primary">
                        Pending
                      </span>
                      <span className="action-icons">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-check"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- Comment Row --> */}
                {/* <!-- Comment Row --> */}
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="../../assets/images/users/2.jpg"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text active w-100">
                    <h6 className="font-medium">Michael Jorden</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-success label-rounded">
                        Approved
                      </span>
                      <span className="action-icons active">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="icon-close"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart text-danger"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- Comment Row --> */}
              </div>
            </div>
          </div>
          {/* <!-- column --> */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Chats</h4>
                <div
                  className="chat-box scrollable position-relative"
                  style={{ height: "475px" }}
                >
                  {/* <!--chat Row --> */}
                  <ul className="chat-list">
                    {/* <!--chat Row --> */}
                    <li className="chat-item">
                      <div className="chat-img">
                        <img src="../../assets/images/users/1.jpg" alt="user" />
                      </div>
                      <div className="chat-content">
                        <h6 className="font-medium">James Anderson</h6>
                        <div className="box bg-light-info">
                          Lorem Ipsum is simply dummy text of the printing &amp;
                          type setting industry.
                        </div>
                      </div>
                      <div className="chat-time">10:56 am</div>
                    </li>
                    {/* <!--chat Row --> */}
                    <li className="chat-item">
                      <div className="chat-img">
                        <img src="../../assets/images/users/2.jpg" alt="user" />
                      </div>
                      <div className="chat-content">
                        <h6 className="font-medium">Bianca Doe</h6>
                        <div className="box bg-light-info">
                          It’s Great opportunity to work.
                        </div>
                      </div>
                      <div className="chat-time">10:57 am</div>
                    </li>
                    {/* <!--chat Row --> */}
                    <li className="odd chat-item">
                      <div className="chat-content">
                        <div className="box bg-light-inverse">
                          I would love to join the team.
                        </div>
                        <br />
                      </div>
                    </li>
                    {/* <!--chat Row --> */}
                    <li className="odd chat-item">
                      <div className="chat-content">
                        <div className="box bg-light-inverse">
                          Whats budget of the new project.
                        </div>
                        <br />
                      </div>
                      <div className="chat-time">10:59 am</div>
                    </li>
                    {/* <!--chat Row --> */}
                    <li className="chat-item">
                      <div className="chat-img">
                        <img src="../../assets/images/users/3.jpg" alt="user" />
                      </div>
                      <div className="chat-content">
                        <h6 className="font-medium">Angelina Rhodes</h6>
                        <div className="box bg-light-info">
                          Well we have good budget for the project
                        </div>
                      </div>
                      <div className="chat-time">11:00 am</div>
                    </li>
                    {/* <!--chat Row --> */}
                    {/* <!-- <div id="someDiv"></div> --> */}
                  </ul>
                </div>
              </div>
              <div className="card-body border-top">
                <div className="row">
                  <div className="col-9">
                    <div className="input-field m-t-0 m-b-0">
                      <input
                        type="text"
                        id="textarea1"
                        placeholder="Type and enter"
                        className="form-control
                                    border-0"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <a
                      className="btn-circle btn-lg btn-cyan float-right text-white"
                      href="javascript:void(0)"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== --> */}
        {/* <!-- Recent comment and chats --> */}
        {/* <!-- ============================================================== --> */}
      </div>
    </div>
  );
};

export default Container;
