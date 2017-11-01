import React from 'react'
import ReactDOM from 'react-dom'
import './travels.css'

export default class TravelAndAccomodation extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="panel panel-info etched">
          <div class="panel-heading">Travel & Accomodation</div>
          <div class="panel-body">
            <div class="col-xs-12">
                <p><i class="fa fa-plane" aria-hidden="true"></i>&nbsp;Flights</p>
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Make My Trip</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">GoIbibo</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Yatra</span></a>
                &nbsp;
                <div class="btn-group">
                  <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Others</span></a>
                  <a href="#" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Akbar Travels</a></li>
                    <li><a href="#">Cleartrip</a></li>
                    <li><a href="#">Ease My Trip</a></li>
                  </ul>
              </div>
            </div>

            <div class="col-xs-12">
                <p><i class="fa fa-bus" aria-hidden="true"></i>&nbsp;Bus</p>
               <a href="#" class="btn btn-default btn-sm"><span class="text-warning">RedBus.in</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">GoIbibo</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Yatra</span></a>
                &nbsp;
                <div class="btn-group">
                  <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Others</span></a>
                  <a href="#" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">In.via</a></li>
                    <li><a href="#">AbhiBus</a></li>
                    <li><a href="#">Paytm</a></li>
                  </ul>
              </div>
            </div>
            
            <div class="col-xs-12">
                <p><i class="fa fa-train" aria-hidden="true"></i>&nbsp;Train</p>
               <a href="#" class="btn btn-default btn-sm"><span class="text-warning">IRCTC</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Cleartrip</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Paytm</span></a>
                &nbsp;
                <div class="btn-group">
                  <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Others</span></a>
                  <a href="#" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">In.via</a></li>
                    <li><a href="#">AbhiBus</a></li>
                    <li><a href="#">Paytm</a></li>
                  </ul>
              </div>
            </div>
            
            <div class="col-xs-12">
                <p><i class="fa fa-hotel" aria-hidden="true"></i>&nbsp;Hotels</p>
               <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Make My Trip</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Booking.com</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Goibibo</span></a>
                &nbsp;
                <div class="btn-group">
                  <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Others</span></a>
                  <a href="#" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">In.via</a></li>
                    <li><a href="#">AbhiBus</a></li>
                    <li><a href="#">Paytm</a></li>
                  </ul>
              </div>
            </div>

            <div class="col-xs-12">
                <p><i class="fa fa-cab" aria-hidden="true"></i>&nbsp;Rental Cabs</p>
               <a href="#" class="btn btn-default btn-sm"><span class="text-warning">OLA</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Utaxi</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Merru</span></a>
                &nbsp;
                <div class="btn-group">
                  <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Others</span></a>
                  <a href="#" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">In.via</a></li>
                    <li><a href="#">AbhiBus</a></li>
                    <li><a href="#">Paytm</a></li>
                  </ul>
              </div>
            </div>

            <div class="col-xs-12">
                <p><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;Plan a trip</p>
               <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Inspirock</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Triphobo</span></a>
                &nbsp;
                <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Tripit</span></a>
                &nbsp;
                <div class="btn-group">
                  <a href="#" class="btn btn-default btn-sm"><span class="text-warning">Others</span></a>
                  <a href="#" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">In.via</a></li>
                    <li><a href="#">AbhiBus</a></li>
                    <li><a href="#">Paytm</a></li>
                  </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}