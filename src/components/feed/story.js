import React from 'react'
import './story.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Story extends React.Component {
  render () {
    return (

      <div class="panel panel-default">
        <div class="card-img-overlay" >
        <img class="img-circle img-thumbnail" src="https:\/\/minotar.net/avatar/Ewwe" width="64" height="64" alt="Avatar" />
        <span class="label label-default"  data-toggle="tooltip" data-placement="top" title="Tooltip on top"><b>Ewwe</b> - <em>Před 9 hodinami</em></span>
      </div>
        <div class="panel-heading">
          <i>Mashable</i> - <span>#Social-Media</span><span>#Web</span>
        </div>
        <div class="panel-image">
          <img alt="test" src="http:\/\/666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_52d09387ae003_1.JPG" class="panel-image-preview" />
          <h4>Summary</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper et.</p>
        </div>
        <div class="panel-body hide">
          <p>this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph,</p>
          <p>this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph,</p>
          <p>this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph, this is another paragraph,</p>
        </div>
        <div class="panel-footer clearfix">
          <a href="#download" class="btn btn-primary btn-sm btn-hover pull-left">Save <span class="fa fa-bookmark"></span></a>
          <a href="#facebook" class="btn btn-success btn-sm btn-hover pull-left facebook">Shr <span class="glyphicon glyphicon-send"></span></a>
          <a class="btn comsys btn-danger btn-sm btn-hover pull-left social">Cmt <span class="fa fa-comment"></span></a>
          <a href="#share" class="btn btn-warning btn-sm btn-hover pull-left social">Like <span class="fa fa-thumbs-up"></span></a>
          <span class="toggler fa fa-chevron-down pull-right"></span>
        </div>
      </div>
    )
  }
}
