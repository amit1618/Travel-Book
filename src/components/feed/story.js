import React from 'react'
import './story.css'

export default class Story extends React.Component {
  render () {
    return (
      <div class="panel panel-default">
        <img class="img-circle img-thumbnail" src="http:\/\/www.iconninja.com/ico/32/office-user-costume-business-avatar-man-male-15872.ico" width="64" height="64" alt="Avatar" />
        &nbsp;&nbsp;<span class="label label-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><b>Amit Kumar</b></span>
        <div class="panel-image">
          <img alt="test" src="http:\/\/www.holidify.com/images/cmsuploads/compressed/Gokarna_Rinal_20170820185203.jpg" class="panel-image-preview" />
          <p>Situated on the coast of Karwar, Gokarna is a small town in Karnataka, primarily known for two reasons - its beaches and temples. Gokarna can be different things to different people. Every year hordes of tourists visit Gokarna in search of sanctity and salvation on one hand and respite and relaxation on the other. The out-of-town beaches are a curious contrast to the life inside the town</p>
        </div>
        <div class="panel-footer clearfix">
          <a class="btn comsys btn-danger btn-sm btn-hover pull-left social">Comment <span class="fa fa-comment"></span></a>
          <a href="#share" class="btn btn-warning btn-sm btn-hover pull-left social">Like <span class="fa fa-thumbs-up"></span></a>
          <span class="toggler fa fa-chevron-down pull-right"></span>
        </div>
      </div>
    )
  }
}
