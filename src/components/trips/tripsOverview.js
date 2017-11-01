import React from 'react'
import {Timeline, TimelineEvent,TimelineBlip } from 'react-event-timeline'
import './trips.css'

export default class TripOverview extends React.Component {
  render () {
    return (
      <div class="panel panel-default">
        <div class="panel-heading">
          Trip Overview
        </div>
        <div class="panel-body">
          <span class="label label-success tripLabel">Recent<span class="badge badgeLabel">42</span></span>
          <Timeline>
            <TimelineEvent title="KodaiKanal" createdAt="2016-09-12 10:06 PM" icon={<i class="glyphicon glyphicon-ok-sign"></i>} iconColor="#6fba1c"/>
            <TimelineEvent title="Gokarna" createdAt="2016-09-12 10:06 PM" icon={<i class="glyphicon glyphicon-ok-sign"></i>} iconColor="#6fba1c" />
          </Timeline>

          <span class="label label-success tripLabel">Upcoming<span class="badge badgeLabel">10</span></span>
          <Timeline>
            <TimelineEvent title="Ooty" createdAt="2016-09-12 10:06 PM" icon={<i class="glyphicon glyphicon-pushpin"></i>} iconColor="#6fba1c"/>
            <TimelineEvent title="Mysore" createdAt="2016-09-12 10:06 PM" icon={<i class="glyphicon glyphicon-pushpin"></i>} iconColor="#6fba1c" />
            <TimelineEvent title="Goa" createdAt="2016-09-12 10:06 PM" icon={<i class="glyphicon glyphicon-pushpin"></i>} iconColor="#6fba1c" />
            <TimelineEvent title="Coorg" createdAt="2016-09-12 10:06 PM" icon={<i class="glyphicon glyphicon-pushpin"></i>} iconColor="#6fba1c" />
            <TimelineEvent title="Wayanad" createdAt="2016-09-12 10:06 PM" icon={<i class="glyphicon glyphicon-pushpin"></i>} iconColor="#6fba1c" />
          </Timeline>

          <span class="label label-success tripLabel">WishList<span class="badge badgeLabel">12</span></span>
          <Timeline>
            <TimelineBlip title="Paris" icon={<i class="glyphicon glyphicon-star"></i>} iconColor="#6fba1c" />
            <TimelineBlip title="Gangtok" icon={<i class="glyphicon glyphicon-star"></i>} iconColor="#6fba1c" />
            <TimelineBlip title="Leh" icon={<i class="glyphicon glyphicon-star"></i>} iconColor="#6fba1c" />
          </Timeline>
        </div>
        <div class="panel-footer">
          <button type="button" class="btn btn-success btn-md" data-toggle="modal" data-target="#myModal">View All</button>
        </div>
      </div>
      
    )
  }
}