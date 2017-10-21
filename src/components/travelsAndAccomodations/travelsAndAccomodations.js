import React from 'react'
import ReactDOM from 'react-dom'

export default class TravelAndAccomodation extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="panel panel-default">
          <div class="panel-heading">Travel & Accomodation</div>
          <div class="panel-body">
            <div class="col-xs-12">
                <p>Flights</p>
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
                <p>Bus</p>
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
                <p>Train</p>
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
                <p>Rental Cabs</p>
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

          </div>
        </div>
      </div>
    )
  }
}